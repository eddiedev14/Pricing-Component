const checkbox = document.querySelector("#checkbox");
const prices = document.querySelectorAll(".main__price")
const monthPrices = [19.99, 24.99, 39.99];
const anuallyPrices = [199.99, 249.99, 399.99];

checkbox.addEventListener("change", () => {
    prices.forEach((element, index) => {
        element.textContent = checkbox.checked ? "$" + monthPrices[index] : "$" + anuallyPrices[index];
    });
})