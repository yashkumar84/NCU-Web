import { productService } from "../services/services.js";

window.addEventListener("load", bindEvents);

async function bindEvents() {
  const data = await getData();
  console.log(data);
  data.map((product) => printCard(product));
}

async function getData() {
  return await productService.fetchData();
}

function printCard(product) {
  const card = `<div class="card" style="width: 18rem;">
  <img src=${product.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">${product.title}</h4>
    <p class="card-text">${product.description}</p>
    <h5 class="card-title">${product.price}</h5>
    <a href="#" class="btn btn-primary">Add To Cart</a>
  </div>
</div>`;

  const container = document.querySelector(".container");
  container.innerHTML += card;
}
