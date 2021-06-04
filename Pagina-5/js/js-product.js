const productImage = document.querySelector(".product-image");
const smallImg = productImage.getElementsByClassName("small-img");
const changeImage = document.getElementById("change-here");

for (let image of smallImg) {
    image.addEventListener("click", function() {
        changeImage.src = image.src
    })
}






