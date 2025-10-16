import { books } from './data.js';
import { addToCart, cart } from './cart.js';
import { updateCartUI } from './ui.js';
import { showToast } from './toast.js';

export function displayBooks(bookArray = books) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  (bookArray || []).forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
      <div>
        <h3>${book.title}</h3>
        <p><small>by ${book.author}</small></p>
        <p>₹${book.price}</p>
        ${
          book.availability === "in stock"
            ? `<button data-index="${index}">Add to Cart</button>`
            : `<span style="color:red;">Out of Stock</span>`
        }
      </div>
    `;

    bookList.appendChild(bookDiv);
  });

  // Attach "Add to Cart" button events
  bookList.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = Number(e.target.getAttribute("data-index"));
      addToCart(bookArray[idx]);
      updateCartUI(cart);
      showToast(`✅ Added "${bookArray[idx].title}" to cart`);
    });
  });
}
