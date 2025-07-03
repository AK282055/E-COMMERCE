const products = [
  { id: 1, name: "chili" },
  { id: 2, name: "onion"}
 
];

let cart = [];

function displayProducts() {
  const container = document.querySelector(".grocery-items");
  container.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" height="100" width="100">
      <h3>${product.name}</h3>
      <p>${product.price}rs</p>
      <button onclick="addToCart(${product.id})">Add to cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCart();
  }
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
    cartItems.appendChild(div);
    total += item.price;
  });

  totalElement.textContent = total.toFixed(2);
}

function checkout() {
  alert("Thank you for shopping with us!");
  cart = [];
  updateCart();
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", displayProducts);
