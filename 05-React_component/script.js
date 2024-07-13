import React from "react";
import "./style.css";

function AddContentIncard(props) {
  const { image, brand, content } = props;
  return (
    <div className="card">
      <img src={image} alt={brand + " logo"} loading="lazy" />
      <h1>{brand}</h1>
      <p>{content}</p>
      <a href={image} target="_black">
        <button>Preview</button>
      </a>
    </div>
  );
}

import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));


// react component that take a function that return a reactelement (in AddContentIncard() function its return a react element that created by babel (jsx to react element)) and create a react react element.
//    root.render({
//           $$typeof: Symbol.for('react.element'),
//           type: AddContentIncard,
//           ref: null,
//           props:{
//             key: 10,
//             content: "iPhone 13 Pro",
//             image: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png",
//             brand: "apple",
//           }
//       }) // write the react element own react element means a object that have some value that react need

//   root.render(
//     React.createElement(AddContentIncard, {
//       key: 10,
//       content: "iPhone 13 Pro",
//       image: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png",
//       brand: "apple",
//     })
//   ); //same here we create a react element using react.createElement()

// root.render(
//   <AddContentIncard
//     key="10"
//     content="iPhone 13 Pro"
//     brand="Apple"
//     image="https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png"
//   />
// ); 

// how does a react component was created ? 
//this is using jsx and its acctually an react compoment 
// this jsx code will convert into a react.createElement() code 
// in this element there have a function as type 
// and the function AddContentIncard() return a react element 
// now the root.render will render() the element in webpage


// if we want to use react component we need to make the fist letter Capital of that function name


fetch("https://dummyjson.com/products/category/smartphones")
  .then((res) => res.json())
  .then((data) => {
    const cards = data.products.map((product) => {
      return <AddContentIncard key={product.id} content={product.title} brand={product.brand} image={product.thumbnail}/>;
    });
    
    root.render(cards)
  });

export {AddContentIncard, root}