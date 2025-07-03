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
 function loadCart() {
            // Get the cart from localStorage
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            console.log('Cart:', cart); // Debug: Log cart items
            let cartItemsContainer = document.getElementById('cart-items');
            let totalAmount = 0; // Initialize total amount

            // Clear the container
            cartItemsContainer.innerHTML = '';

            // Populate the cart items and calculate the total price
            cart.forEach((item, index) => {
                cartItemsContainer.innerHTML += `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" style="max-width: 100px; height: auto; margin-right: 10px;">
                        <span>${item.name} - &#8377;${item.price}</span>
                         <button  class="remove" onclick="removeItem(${index})" >✖</button>
                    </div>`;
                totalAmount += item.price; // Accumulate total price
            });

            // If no items are in the cart, display a message
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<div>Your cart is empty.</div>';
            } else {
                cartItemsContainer.innerHTML += `<div><strong>Total Price: &#8377;${totalAmount}</strong>shipping charges: &#8377;0  </div>`;
            }
        }
        function removeItem(index) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        }
        function clearCart() {
            localStorage.removeItem('cart'); // Clear the cart from localStorage
            loadCart(); // Reload the cart display
        }

        function checkout() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            if (cart.length === 0) {
                alert('Your cart is empty! Please add items before checking out.');
            } else {
                alert('Proceeding to checkout...\nTotal Amount: ₹' + cart.reduce((sum, item) => sum + item.price, 0));
            }}
        window.onload = loadCart; // Load cart items when the page is loaded