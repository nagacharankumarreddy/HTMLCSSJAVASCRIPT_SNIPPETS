let images = [
  "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/579987/pexels-photo-579987.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4386178/pexels-photo-4386178.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=600",
];
let prices = document.getElementsByClassName("price");
let imageElements = document.getElementsByClassName("image");
function getRandomPrice() {
  return parseInt(Math.random() * 100) * 10;
}
for (let i = 0; i < prices.length; i++) {
  prices[i].innerHTML = "Price:" + getRandomPrice();
}
for (let i = 0; i < imageElements.length; i++) {
  imageElements[i].src = images[i];
}
