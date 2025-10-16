import { calculateTotal, removeFromCart, cart } from './cart.js';
import { showToast } from './toast.js';

export function updateCartUI(cartData) {
  const cartItemsDiv = document.getElementById("cartItems");
  const cartTotalDiv = document.getElementById("cartTotal");
  const cartCountSpan = document.getElementById("cartCount");

  cartItemsDiv.innerHTML = "";

  (cartData || []).forEach((book, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <span>${book.title} - ₹${book.price}</span>
      <button data-index="${index}" style="background:red; color:white; border:none; border-radius:6px; padding:4px 8px; cursor:pointer;">
        Remove
      </button>
    `;
    cartItemsDiv.appendChild(itemDiv);
  });

  cartItemsDiv.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = Number(e.target.getAttribute("data-index"));
      const removedBook = cart[idx];
      if (removedBook) {
        removeFromCart(idx);
        updateCartUI(cart);
        showToast(`❌ Removed "${removedBook.title}" from cart`);
      }
    });
  });

  cartTotalDiv.textContent = `Total: ₹${calculateTotal()}`;
  cartCountSpan.textContent = cart.length;
}
