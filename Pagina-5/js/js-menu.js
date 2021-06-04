const menu = document.querySelector(".menu-icon");
const MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

menu.addEventListener("click", function() {
    menuToggle()
})

function menuToggle() {
    if(MenuItems.style.maxHeight ===  "0px") {
        MenuItems.style.maxHeight = "200px"
    } else {
        MenuItems.style.maxHeight = "0px"
    }
}