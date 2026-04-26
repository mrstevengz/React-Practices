import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81P0NvoRrWL._AC_UL600_SR600,400_.jpg"
    alt=""
  />
);
const Title = () => {
  return <h2>Theo of Golden: A Novel</h2>;
};

const Author = () => <h2>Allen Levi</h2>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
