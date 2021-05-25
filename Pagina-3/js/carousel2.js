const main2 = document.getElementsByTagName('main')[0];
const carousel2 = main2.querySelector(".carousel2");
const buttons2 = carousel2.getElementsByTagName("button");
const itemContainer2 = main2.querySelector(".carousel-track2");
const itemCount2 = itemContainer2.children.length;
const itemWidth2 = 300; // item width + margin
const activeClass2 = "target-element";
const maxVisibleItems2 = 1;

function getElementIndex2(element) {
  return Array.from(element.parentNode.children).indexOf(element);
}

window.addEventListener("resize", function (e) {
  // optiona: use a debounce function
  console.log(window.innerWidth);
  // update the maxVisibleItems value based on window width
});

for (let button2 of buttons2) {
  button2.addEventListener("click", function (elem) {
    const { go } = elem.target.dataset;
    console.log(go)
    
    const nextActiveElementSibling2 =
      go === "next2"
        ? "nextElementSibling"
        : "previousElementSibling";

    const activeElement2 = carousel2.getElementsByClassName(activeClass2)[0];

    const nextActiveElement2 = activeElement2[nextActiveElementSibling2];
    nextActiveElement2.classList.add(activeClass2);
    activeElement2.classList.remove(activeClass2);

    const activeElementIndex2 = getElementIndex2(nextActiveElement2);

    const translateValue2 = `-${itemWidth2 * activeElementIndex2}px`;
    itemContainer2.style.transform = `translateX(${translateValue2})`;

    document.querySelector('button[data-go="prev2"').disabled =
      activeElementIndex2 === 0;
    document.querySelector('button[data-go="next2"').disabled =
      itemCount2 - activeElementIndex2 === maxVisibleItems2;
  });
};