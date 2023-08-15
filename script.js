"use strict";

const itemsContainer = document.querySelector(".items");
const cartContainer = document.querySelector(".cart");
const btn = document.querySelectorAll(".btn");

const products = [
  { id: 1, itemNumber: "Item 1", Price: "Price 60", url: "./img/bcaa.jpg" },
  { id: 2, itemNumber: "Item 2", Price: "Price 80", url: "./img/creatine.jpg" },
  {
    id: 3,
    itemNumber: "Item 3",
    Price: "Price 10",
    url: "./img/protein_powder.jpg",
  },
  {
    id: 3,
    itemNumber: "Item 4",
    Price: "Price 45",
    url: "./img/fat_burners.jpg",
  },
];

products.forEach((product) => {
  element.insertAdjacentHTML(
    "beforeend",
    `<button id="product-${product.id}">Add</button>`
  );
});

itemsContainer.click((e) => {
  if (e.id.startsWith("product")) {
    const id = e.id.split("-")[1];
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
