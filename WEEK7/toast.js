export function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 2500);
}
