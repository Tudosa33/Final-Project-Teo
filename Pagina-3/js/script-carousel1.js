const main = document.getElementsByTagName('main')[0];
const carousel = main.querySelector(".carousel");
const buttons = carousel.getElementsByTagName("button");
const itemContainer = main.querySelector(".carousel-track");
const itemCount = itemContainer.children.length;
const itemWidth = 270; // item width + margin
const activeClass = "active-element";
const maxVisibleItems = 2;

function getElementIndex(element) {
  return Array.from(element.parentNode.children).indexOf(element);
}

window.addEventListener("resize", function (e) {
  // optiona: use a debounce function
  console.log(window.innerWidth);
  // update the maxVisibleItems value based on window width
});

for (let button of buttons) {
  button.addEventListener("click", function (e) {
    const { direction } = e.target.dataset;
    console.log(direction)
    
    const nextActiveElementSibling =
      direction === "next"
        ? "nextElementSibling"
        : "previousElementSibling";

    const activeElement = carousel.getElementsByClassName(activeClass)[0];
    console.log(activeElement)

    const nextActiveElement = activeElement[nextActiveElementSibling];
    nextActiveElement.classList.add(activeClass);
    activeElement.classList.remove(activeClass);

    const activeElementIndex = getElementIndex(nextActiveElement);

    const translateValue = `-${itemWidth * activeElementIndex}px`;
    itemContainer.style.transform = `translateX(${translateValue})`;

    document.querySelector('button[data-direction="prev"').disabled =
      activeElementIndex === 0;
    document.querySelector('button[data-direction="next"').disabled =
      itemCount - activeElementIndex === maxVisibleItems;
  });
};

