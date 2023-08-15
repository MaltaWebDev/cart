"use strict";

const itemsContainer = document.querySelector("#items-container");
const cartContainer = document.querySelector(".cart");
const btn = document.querySelectorAll(".btn");

// create products as arr of objects
const products = [
  { id: 1, itemNumber: "Item 1", price: "Price $60", url: "./img/bcaa.jpg" },
  {
    id: 2,
    itemNumber: "Item 2",
    price: "Price $80",
    url: "./img/creatine.jpg",
  },
  {
    id: 3,
    itemNumber: "Item 3",
    price: "Price $10",
    url: "./img/protein_powder.jpg",
  },
  {
    id: 4,
    itemNumber: "Item 4",
    price: "Price $45",
    url: "./img/fat_burners.jpg",
  },
];

// add products to container
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
      </div>`
  );
});

// add items to cart when 'Add' button is clicked
itemsContainer.addEventListener("click", (e) => {
  if (e.target.id.startsWith("product")) {
    const id = parseInt(e.target.id.split("-")[1]);
    const product = products.find((product) => product.id === id);
    console.log("btn clicked", e.target.id, product);
    cartContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="cart-item">
        <p class="cart-item-number">${product.itemNumber}</p>
        <p class="cart-price">${product.price}</p>
        <p class="quantity">Quantity: <span>1</span></p>
        <button class="minus-btn" data-product-id="${product.id}">-</button>
        <button class="plus-btn" data-product-id="${product.id}">+</button>
      </div>`
    );
  }
});

// add functionality to plus and minus buttons
cartContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("minus-btn") ||
    e.target.classList.contains("plus-btn")
  ) {
    const cartItem = e.target.closest(".cart-item");
    const quantityElement = cartItem.querySelector(".quantity span");
    let currentQuantity = parseInt(quantityElement.textContent);

    if (e.target.classList.contains("minus-btn")) {
      if (currentQuantity === 1) {
        cartItem.remove();
      } else {
        currentQuantity--;
      }
    } else if (e.target.classList.contains("plus-btn")) {
      currentQuantity++;
    }

    quantityElement.textContent = currentQuantity;
    updateTotalPrice();
  }
});

// update price when items are added
function updateTotalPrice() {
  const cartItems = document.querySelectorAll(".cart-item");
  let totalPrice = 0;
  cartItems.forEach((item) => {
    const price = parseFloat(
      item.querySelector(".cart-price").textContent.replace("Price $", "")
    );
    const quantity = parseInt(item.querySelector(".quantity span").textContent);
    totalPrice += price * quantity;
  });
  document.querySelector(".total-price span").textContent =
    totalPrice.toFixed(2);
}
