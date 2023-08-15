"use strict";

const itemsContainer = document.querySelector("#items-container");
const cartContainer = document.querySelector(".cart");
const btn = document.querySelectorAll(".btn");

const products = [
  { id: 1, itemNumber: "Item 1", price: "Price 60", url: "./img/bcaa.jpg" },
  { id: 2, itemNumber: "Item 2", price: "Price 80", url: "./img/creatine.jpg" },
  {
    id: 3,
    itemNumber: "Item 3",
    price: "Price 10",
    url: "./img/protein_powder.jpg",
  },
  {
    id: 4,
    itemNumber: "Item 4",
    price: "Price 45",
    url: "./img/fat_burners.jpg",
  },
];

products.forEach((product) => {
  itemsContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="item">
        <img
          class="img"
          src="${product.url}"
          alt="${product.itemNumber}"
        />
        <p class="item-number">${product.itemNumber}</p>
        <p class="price">${product.price}</p>
        <button id="product-${product.id}" class="btn">Add</button>
      </div>
    <button id="product-${product.id}">Add</button>`
  );
});

itemsContainer.addEventListener("click", (e) => {
  if (e.target.id.startsWith("product")) {
    const id = parseInt(e.target.id.split("-")[1]);
    const product = products.find((product) => product.id === id);
  }
});

// itemsContainer.addEventListener("click", (e) => {
//   if (e.target.classList.contains("btn")) {
//     console.log("clicked");

//     let div = document.createElement("div");
//     div.classList.add("cart-item");
//     div.innerText = "item added";
//     cartContainer.appendChild(div);
//   }
// });
