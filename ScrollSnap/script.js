function getRandomPrice() {
  return parseInt(Math.random() * 1000);
}
let prices = document.getElementsByClassName("price");
console.log(getRandomPrice());
for (let i = 0; i < prices.length; i++) {
  prices[i].innerHTML = "Price:" + getRandomPrice();
}
