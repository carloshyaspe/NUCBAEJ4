const pizzas = [
  {
    id: 1,
    title: "Napolitana",
    image: "assets/img/pizza-napolitana.jpg",
    precio: "1700",
    ingredientes: ["Muzzarella", "Pasta de tomate"],
  },
  {
    id: 2,
    title: "Hawaiana",
    image: "assets/img/pizza-hawaiana.jpg",
    precio: "2200",
    ingredientes: ["Muzzarella", "Jamon", "Anana"],
  },
  {
    id: 3,
    title: "Pollo",
    image: "assets/img/pizza-pollo.jpg",
    precio: "2200",
    ingredientes: ["Muzzarella", "Pollo"],
  },
  {
    id: 4,
    title: "Mexicana",
    image: "assets/img/pizza-mexicana.jpg",
    precio: "2600",
    ingredientes: ["Muzzarella", "Carne Picada", "Palta"],
  },
  {
    id: 5,
    title: "Vegetariana",
    image: "assets/img/pizza-vegetariana.jpg",
    precio: "1800",
    ingredientes: ["Muzzarella", "Vegetales"],
  },
  {
    id: 6,
    title: "Cuatro Quesos",
    image: "assets/img/pizza-cuatroquesos.jpg",
    precio: "2400",
    ingredientes: ["Muzzarella", "Provolone", "Azul", "Parmesano"],
  },
];

const cards = document.querySelector(".cards");
const form = document.querySelector('.form');
const searchInput = document.querySelector('.input-search');
document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", searchPizza);
  renderPizzas(getLocal("pizzas"));
});
const getLocal = (item) => {
  return JSON.parse(localStorage.getItem(item));
};


function saveLocalStorage(pizzasarray) {
  localStorage.setItem("pizzas", JSON.stringify(pizzasarray));
}

const renderPizza = pizza => {
  const {
    image,
    title,
    precio,
    ingredientes,
  } = pizza;
  return `
    <div class="card" style="width: 18rem;">
      <img src=${image} class="card-img-top" alt=${title}>
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">$${precio}</h6>
        <p class="card-text">${ingredientes}</p>
        <a href="#" class="btn btn-primary">Agregar</a>
      </div>
    </div>
  `;
};

const renderPizzas = (Pizzasarr) => {
  cards.innerHTML = Pizzasarr.map(renderPizza).join('');
};


const searchPizza = (e) => {
  e.preventDefault();
  const pizzaValue = searchInput.value;
  if (pizzaValue === "") {
     saveLocalStorage(pizzas);
     renderPizzas(pizzas);
     return alert("Ingresa una pizza");
  }
  console.log(pizzaValue);
  console.log(pizzas);
  let pizzasFilter = pizzas.filter((pizza) =>
       pizza.title.toLowerCase().includes(pizzaValue.toLowerCase())
  );
  saveLocalStorage(pizzasFilter);
  renderPizzas(pizzasFilter);
  form.reset();
};

