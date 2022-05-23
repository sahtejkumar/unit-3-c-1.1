//store the products array in localstorage as "products"
let type = document.querySelector("#type");
let desc = document.querySelector("#desc");
let price = document.querySelector("#price");
let image = document.querySelector("#image");

let f1 = document.querySelector("#form");
f1.addEventListener("submit", myfunc);

let PumaArr = JSON.parse(localStorage.getItem("pumadetails")) || [];

function myfunc() {
  event.preventDefault();

  let inputData = {
    type: form.type.value,
    desc: form.desc.value,
    price: form.price.value,
    image: form.image.value,
  };
  console.log(inputData);
  PumaArr.push(inputData);

  localStorage.setItem("pumadetails", JSON.stringify(PumaArr));
}
