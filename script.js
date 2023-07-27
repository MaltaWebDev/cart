"use strict";

function Item(imageSrc, altText, itemNumber, price) {
  this.imageSrc = imageSrc;
  this.altText = altText;
  this.itemNumber = itemNumber;
  this.price = price;
}

Item.prototype.generateHTML = function () {
  let div = document.createElement("div");
  div.classList.add("item");

  let img = document.createElement("img");
  img.src = this.imageSrc;
  img.alt = this.altText;
  div.appendChild(img);

  let itemNumberText = document.createElement("p");
  itemNumberText.classList.add("item-number");
  itemNumberText.textContent = this.itemNumber;
  div.appendChild(itemNumberText);

  let itemPrice = document.createElement("p");
  itemPrice.classList.add("item-price");
  itemPrice.textContent = this.price;
  div.appendChild(itemPrice);

  let button = document.createElement("button");
  button.textContent = "Add";
  div.appendChild(button);

  return div;
};