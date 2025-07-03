let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`${productName} has been added to your cart!`);
}
const cartItems = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');
let total = 0;

function addToCart(product, price) {
  const item = document.createElement('li');
  item.textContent = `${product} - $${price.toFixed(2)}`;
  cartItems.appendChild(item);
  total += price;
  totalDisplay.textContent = total.toFixed(2);
// Get all remove buttons
const removeButtons = document.querySelectorAll('.remove-btn');

// Add event listener to each button
removeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the parent element (product item)
    const productItem = button.parentNode;
    
    // Remove the product item
    productItem.remove();
  });
});


}