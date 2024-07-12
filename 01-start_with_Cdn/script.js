// creating a element using React.createElement
// The default value of react.createElement is to create a DOM element
// React.createElement(type, props, children) 
// react is acctually a library so we have write javascript code to create a react element (eg. class(html), className(js))
// this is actually a function that will create an object
// react dom will convert this object into a DOM element and render it on the webpage

const element = React.createElement(
  "div",
  { className: "element" , // we have to write javascript

  },
  "Hello World",
  React.createElement("h1", null, "Hello World 2"), //we can add element inside the element as children
);

// output
{/* <div class="element">
    hello World
    <h1>Hello World 2</h1>
</div> */}




const root = ReactDOM.createRoot(document.getElementById("root")); //this is creating a root to render element to the webpage
root.render(element); //this is render element to the webpage using react dom
