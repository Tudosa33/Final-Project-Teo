const products = [
    { name: "Burton Family Tree Sensei", price: "700.Eur", avatar: "https://www.burton.com/static/product/W21/22242100000151_1.png?impolicy=bglt&imwidth=486"},
    { name: "Burton Free Thinker", price: "650.Eur", avatar: "https://www.burton.com/static/product/W21/13219106000150_1.png?impolicy=bglt&imwidth=486"},
    { name: "Burton Free Thinker", price: "650.Eur", avatar: "https://www.burton.com/static/product/W21/13219106000150_1.png?impolicy=bglt&imwidth=486"},
    { name: "Burton Free Thinker", price: "650.Eur", avatar: "https://www.burton.com/static/product/W21/13219106000150_1.png?impolicy=bglt&imwidth=486"},
    { name: "Burton Free Thinker", price: "650.Eur", avatar: "https://www.burton.com/static/product/W21/13219106000150_1.png?impolicy=bglt&imwidth=486"},
    { name: "Burton Free Thinker", price: "650.Eur", avatar: "https://www.burton.com/static/product/W21/13219106000150_1.png?impolicy=bglt&imwidth=486"},
    { name: "Burton Free Thinker", price: "950.Eur", avatar: "https://www.burton.com/static/product/W21/13219106000150_1.png?impolicy=bglt&imwidth=486"},
    { name: "Burton Free Thinker", price: "650.Eur", avatar: "https://www.burton.com/static/product/W21/13219106000150_1.png?impolicy=bglt&imwidth=486"},
    { name: "Burton Free Thinker", price: "650.Eur", avatar: "https://www.burton.com/static/product/W21/13219106000150_1.png?impolicy=bglt&imwidth=486"},
    { name: "Burton Free Thinker", price: "650.Eur", avatar: "https://www.burton.com/static/product/W21/13219106000150_1.png?impolicy=bglt&imwidth=486"},
    { name: "Burton Free Thinker", price: "650.Eur", avatar: "https://www.burton.com/static/product/W21/13219106000150_1.png?impolicy=bglt&imwidth=486"}
];

const main = document.getElementsByTagName("main")[0];
const imgContainer = main.querySelector(".image-container");
const activeFilters = {};
let currentProductsState = [];

// function createProduct(products) {
//   currentProductsState = products;
//   imgContainer.innerHTML = "";
//   for( let product of products) {
//    const displayProductItems = item => {
//      let displayProduct = items.map(product => `<div class="box">
//      <div class="slider">
//          <img src="${product.avatar}" alt="">
//          <div class="buy">
//              <a href="#" class="btn">Buy now</a>
//          </div>
//      </div>
//      <div class="detail-box">
//          <div class="type">
//              <a href="#">${product.name}</a>
//              <span>Freestyle</span>
//          </div>
//          <a href="#" class="price">${product.price}</a>
//      </div>
//  </div>`)
//    }
//   }
//   imgContainer.appendChild(displayProductItems)
// }
// createProduct(products)