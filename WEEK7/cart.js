export let cart = [];

// Add a book to the cart
export function addToCart(book) {
  if (book) {
    cart.push(book);
  }
  return cart;
}

// Remove a book by index
export function removeFromCart(index) {
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
  }
  return cart;
}

// Calculate total price of books in cart
export function calculateTotal() {
  return cart.reduce((sum, book) => sum + (book.price || 0), 0);
}
