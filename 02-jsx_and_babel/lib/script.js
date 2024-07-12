const element = /*#__PURE__*/React.createElement("div", null, "Hello, world!", /*#__PURE__*/React.createElement("h1", null, "Hello world2"));

// same as react.createElement 
// javascript cant read jsx we need to compile it to javascript using babel.js library 
// It will convert jsx to react elements
// we can use npm to install babel for production level code it will a new javascript file and all code are convert into a react code

//what is a  source maps
// source maps are a way to map the original source code to the transpiled code. This makes debugging easier.
// if we use any bundler like webpack or parcel they make a maps files and liked it with the original source code
// source map are create a new file with (file.js.map) linked by a code that write in compiler generated file (//# sourceMappingURL=file.js.map)
// we dont need to learn about source maps it will automatically genrate by the bundler

const root = ReactDOM.createRoot(document.getElementById('rootContainer'));
root.render(element);
//# sourceMappingURL=script.js.map