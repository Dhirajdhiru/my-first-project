const cartCount = document.getElementById("cartCount");
const addButtons = document.querySelectorAll(".add");
const filterButtons = document.querySelectorAll(".chip");
const products = document.querySelectorAll(".product");
const timer = document.getElementById("timer");

let count = 0;

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    cartCount.textContent = count;
    button.textContent = "Added";
    button.disabled = true;
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    products.forEach((product) => {
      const category = product.dataset.category;
      if (filter === "all" || filter === category) {
        product.style.display = "grid";
      } else {
        product.style.display = "none";
      }
    });
  });
});

function startTimer() {
  let totalSeconds = 2 * 60 * 60 + 15 * 60 + 32;

  setInterval(() => {
    totalSeconds = totalSeconds > 0 ? totalSeconds - 1 : 0;
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    timer.textContent = `Ends in ${hours}:${minutes}:${seconds}`;
  }, 1000);
}

startTimer();
