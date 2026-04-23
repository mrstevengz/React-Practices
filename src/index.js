import React from "react";
import ReactDOM from "react-dom/client";

//Empieza con letra mayuscula
//Debe retornar JSX (HTML)
//Debe cerrar el tag
function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h3>Hello People</h3>
        <ul>
          <li>
            <a href="">hola mundo</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "hello world"),
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
