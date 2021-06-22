const products = [
{
    id: 1,
    brand: "Burton",
    name: "Men's Burton Kilroy Pow",
    style : "Freestyle",
    avatar: "https://www.burton.com/static/product/W21/19532103000155_1.png?impolicy=bglt&imwidth=486",
    price: 600
},
{
    id: 2,
    brand: "Burton",
    name: "Men's Burton Ripcord",
    style : "All-Mountain",
    avatar: "https://www.burton.com/static/product/W21/10704107000145_1.png?impolicy=bglt&imwidth=486",
    price: 650
},
{
    id: 3,
    brand: "Burton",
    name: "Burton Skeleton Key",
    style : "Park",
    avatar: "https://www.burton.com/static/product/W21/22251100000162_1.png?impolicy=bglt&imwidth=486",
    price: 800
},
{
    id: 4,
    brand: "Burton",
    name: "Burton Family Tree Sensei",
    style : "Freestyle",
    avatar: "https://www.burton.com/static/product/W21/22242100000151_1.png?impolicy=bglt&imwidth=486",
    price: 700
},
{
    id: 5,
    brand: "Rome",
    name: "Rome-ServiceDog",
    style : "Freestyle",
    avatar: "https://cdn.shopify.com/s/files/1/0370/4055/4115/products/Rome-ServiceDogSnowboard-2020-2021_1024x1024.png?v=1599223244",
    price: 700
},
{
    id: 6,
    brand: "Rome",
    name: "Rome-SpeedFreak",
    style : "All-Mountain",
    avatar: "https://cdn.shopify.com/s/files/1/0370/4055/4115/products/Rome-SpeedFreakSnowboard-2020-2021_1024x1024.png?v=1599224649",
    price: 900
},
{
    id: 7,
    brand: "Rome",
    name: "Rome-Royal Carp",
    style : "Park",
    avatar: "https://cdn.shopify.com/s/files/1/0370/4055/4115/products/Rome-RoyalSnowboard-2020-2021_1024x1024.png?v=1599222975",
    price: 800
},
{
    id: 8,
    brand: "Rome",
    name: "Rome-RavineSelect",
    style : "Park",
    avatar: "https://cdn.shopify.com/s/files/1/0370/4055/4115/products/Rome-RavineSelect-Snowboard-2020-2021_1024x1024.png?v=1599221718",
    price: 700
},
{
    id: 9,
    brand: "Rome",
    name: "Rome-National xXx",
    style : "All-Mountain",
    avatar: "https://cdn.shopify.com/s/files/1/0370/4055/4115/products/Rome-NationalSnowboard-Flip-2020-2021_1024x1024.png?v=1599220976",
    price: 900
},
{
    id: 10,
    brand: "Burton",
    name: "Burton Free Thinker",
    style : "Speed-Snowboard",
    avatar: "https://www.burton.com/static/product/W21/13219106000150_1.png?impolicy=bglt&imwidth=486",
    price: 500
},
{
    id: 11,
    brand: "Rome",
    name: "Rome-ServiceDog",
    style : "Freestyle",
    avatar: "https://cdn.shopify.com/s/files/1/0370/4055/4115/products/Rome-ServiceDogSnowboard-2020-2021_1024x1024.png?v=1599223244",
    price: 700
},
{
    id: 12,
    brand: "Rome",
    name: "Rome-SpeedFreak",
    style : "All-Mountain",
    avatar: "https://cdn.shopify.com/s/files/1/0370/4055/4115/products/Rome-SpeedFreakSnowboard-2020-2021_1024x1024.png?v=1599224649",
    price: 900
},
{
    id: 13,
    brand: "Rome",
    name: "Rome-Royal Carp",
    style : "Park",
    avatar: "https://cdn.shopify.com/s/files/1/0370/4055/4115/products/Rome-RoyalSnowboard-2020-2021_1024x1024.png?v=1599222975",
    price: 800
},
{
    id: 14,
    brand: "Burton",
    name: "Men's Burton Kilroy Pow",
    style : "Freestyle",
    avatar: "https://www.burton.com/static/product/W21/19532103000155_1.png?impolicy=bglt&imwidth=486",
    price: 600
},
{
    id: 15,
    brand: "Burton",
    name: "Burton Family Tree Sensei",
    style : "Freestyle",
    avatar: "https://www.burton.com/static/product/W21/22242100000151_1.png?impolicy=bglt&imwidth=486",
    price: 700
},
{
    id: 16,
    brand: "Burton",
    name: "Men's Burton Ripcord",
    style : "All-Mountain",
    avatar: "https://www.burton.com/static/product/W21/10704107000145_1.png?impolicy=bglt&imwidth=486",
    price: 650
},
{
    id: 17,
    brand: "Burton",
    name: "Burton Skeleton Key",
    style : "Park",
    avatar: "https://www.burton.com/static/product/W21/22251100000162_1.png?impolicy=bglt&imwidth=486",
    price: 800
},
{
    id: 18,
    brand: "Rome",
    name: "Rome-National xXx",
    style : "All-Mountain",
    avatar: "https://cdn.shopify.com/s/files/1/0370/4055/4115/products/Rome-NationalSnowboard-Flip-2020-2021_1024x1024.png?v=1599220976",
    price: 900
},
{
    id: 19,
    brand: "Burton",
    name: "Burton Free Thinker",
    style : "Speed-Snowboard",
    avatar: "https://www.burton.com/static/product/W21/13219106000150_1.png?impolicy=bglt&imwidth=486",
    price: 500
},
{
    id: 20,
    brand: "Rome",
    name: "Rome-ServiceDog",
    style : "Freestyle",
    avatar: "https://cdn.shopify.com/s/files/1/0370/4055/4115/products/Rome-ServiceDogSnowboard-2020-2021_1024x1024.png?v=1599223244",
    price: 700
},
{
    id: 21,
    brand: "Rome",
    name: "Rome-SpeedFreak",
    style : "All-Mountain",
    avatar: "https://cdn.shopify.com/s/files/1/0370/4055/4115/products/Rome-SpeedFreakSnowboard-2020-2021_1024x1024.png?v=1599224649",
    price: 900
},
{
    id: 22,
    brand: "Rome",
    name: "Rome-Royal Carp",
    style : "Park",
    avatar: "https://cdn.shopify.com/s/files/1/0370/4055/4115/products/Rome-RoyalSnowboard-2020-2021_1024x1024.png?v=1599222975",
    price: 800
},
{
    id: 23,
    brand: "Rome",
    name: "Rome-RavineSelect",
    style : "Park",
    avatar: "https://cdn.shopify.com/s/files/1/0370/4055/4115/products/Rome-RavineSelect-Snowboard-2020-2021_1024x1024.png?v=1599221718",
    price: 700
},
{
    id: 24,
    brand: "Rome",
    name: "Rome-National xXx",
    style : "All-Mountain",
    avatar: "https://cdn.shopify.com/s/files/1/0370/4055/4115/products/Rome-NationalSnowboard-Flip-2020-2021_1024x1024.png?v=1599220976",
    price: 900
},
];

const productRow = document.querySelector(".row1");
const activeFilters = {};
let currentState = [];

/**
0. construim o noua variabila globala care sa contina filtrele active
1. construim un event custom cu numele filterChanged (new Event)
2. la fiecare change pe select, vom declansa acest nou event (dispatchEvent)
3. ascultam la acest event si modificam lista in functie de filtrele disponibile (document.addEventListener, generateTable)
*/

function generateContainer(products) {
    currentState = products;
    productRow.innerHTML = "";
    for (let product of products) {
        const productWrapper = document.createElement("div");
        productWrapper.classList.add("col-4");
        productWrapper.innerHTML = `
        <div class="box">
            <div class="slider">
                <img src="${product.avatar}" alt="">
                <div class="buy">
                    <a href="#" class="btn">Buy now</a>
                    <a href="../Pagina-5/product-page.html" class="btn">Details</a>
                </div>
            </div>
            <div class="detail-box">
                <div class="type">
                    <a href="#">${product.name}</a>
                    <span>${product.style}</span>
                </div>
                <a href="#" class="price">${product.price}.Eur</a>
            </div>
        </div>
        `
        productRow.appendChild(productWrapper)
        // const objectKeys = Object.keys(product);
        // for (let key of objectKeys) {
        //     console.log(product[key])
        //     const td = document.createElement("td");
        //     td.textContent = product[key];
        //     console.log(td)
        // }
    }
}
generateContainer(products)

// function generateFilter(selectId, objectKey) {
// const values = new Set(cars.map((car) => car[objectKey]));
// const select = document.getElementById(selectId);

// for (let value of values) {
//     const option = document.createElement("option");
//     option.value = value;
//     option.textContent = value;
//     select.appendChild(option);
// }
// }

// generateFilter("marci", "marca");
// generateFilter("ani", "an");

// document.addEventListener("filterChanged", function (event) {
// const filter = event.detail.filter;
// const value = event.detail.value;

// activeFilters[filter] = value;

// const filteredCars = cars.filter((car) => {
//     return (
//     (!activeFilters.marca || car.marca === activeFilters.marca) &&
//     (!activeFilters.an || car.an === Number(activeFilters.an))
//     );
// });

// generateTable(filteredCars);
// });

// const selectElements = document.querySelectorAll(
// "select[data-filter='true']"
// );

// for (let selectElement of selectElements) {
// selectElement.addEventListener("change", (event) => {
//     const value =
//     event.target.value === "null" ? null : event.target.value;
//     const filterDetails = { filter: event.target.name, value: value };
//     const filterChangedEvent = new CustomEvent("filterChanged", {
//     detail: filterDetails
//     });
//     document.dispatchEvent(filterChangedEvent);
// });
// }

// generateTable(cars);

// const sortSelect = document.getElementById("sort");

// function sortBy(field, direction) {
// currentCarsState.sort(function (a, b) {
//     let value1 = a[field];
//     let value2 = b[field];

//     if (typeof value1 === "string") value1 = value1.toUpperCase();
//     if (typeof value2 === "string") value2 = value2.toUpperCase();

//     if (
//     (direction === "asc" && value1 < value2) ||
//     (direction === "desc" && value1 > value2)
//     ) {
//     return -1;
//     }

//     if (
//     (direction === "asc" && value1 > value2) ||
//     (direction === "desc" && value1 < value2)
//     ) {
//     return 1;
//     }

//     return 0;
// });
// generateTable(currentCarsState);
// }

// sortSelect.addEventListener("change", (event) => {
// const { value } = event.target;
// switch (value) {
//     case "nume-ascendent": {
//     sortBy("marca", "asc");
//     break;
//     }
//     case "nume-descendent": {
//     sortBy("marca", "desc");
//     break;
//     }
//     case "pret-descendent": {
//     sortBy("pret", "desc");
//     break;
//     }
//     case "pret-ascendent": {
//     sortBy("pret", "asc");
//     break;
//     }
// }
// generateTable(currentCarsState);
// });