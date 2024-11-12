import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./index.css";
import pizzaData from "./data.js";

function Header() {
  return (
    <header className="text-center my-4">
      <h1 className="display-4 text-warning text-uppercase">Freddy's Pizzeria Co.</h1>
    </header>
  );
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img src={photoName} alt={name} className="card-img-top" />
      <div className={`card-body ${soldOut ? "text-muted" : ""}`}>
        <h5 className="card-title">{name}</h5>
        <p className="card-text fst-italic">{ingredients}</p>
        <p className="fw-bold">{soldOut ? "Sold Out" : `$${price}`}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu pizzas={pizzaData} />
      <Footer />
    </div>
  );
}

function Menu({ pizzas }) {
  return (
    <section className="menu text-center mb-5">
      <h2 className="h4 text-uppercase mb-4">Our Menu</h2>
      <p className="lead mb-4">Authentic Italian cuisine, all from our stone oven.</p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {pizzas.map((pizza) => (
          <div className="col" key={pizza.name}>
            <Pizza
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              photoName={pizza.photoName}
              soldOut={pizza.soldOut}
            />
          </div>
        ))}
      </div>
      <Button />
    </section>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;
  return (
    <footer className="footer mt-5 text-center">
      <p className="text-secondary">{isOpen ? "We're currently open" : "Sorry, we're currently closed"}</p>
    </footer>
  );
}

function Button() {
  return (
    <button className="btn btn-warning btn-lg mt-4">Order Now</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


