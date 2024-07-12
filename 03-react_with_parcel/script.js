import { data } from "./data.js";
console.log(data);


// if we want to access the data in the data.js file we can write type="module" in script tag
// but if we install any package using npm we cant directly access the download file using type=module we need a bundler like parcel, vite , webpack
// now we are going to use parcel for bundling our react files

// import React from "react"; 
// if we access the react without any bundler it will give an error (TypeError: Failed to resolve module specifier "react". Relative references must start with either "/", "./", or "../".)

// npm install parcel -D
// we can add script to start a parcel server in package.json file "start": "parcel source(folder/htmlfile)"
// parcel will create a dist folder and rewrite the code with react code and also create a index.html file and when we start a pacel server it will serve the dist folder
// if we see the dist folder's script file we can see the react code
// if we serve dist folder using live server it will show same webpage as we see in parcel server

// now we can access the react file from node_modules folder (browser cant read the node_modules)
// import React from "react"; // we also dont have to write .js extension | in react new version also dont have to import react from node_modules parcel will automatically import it
// const name = prompt('Enter Your Name')
const element = <div className="element">
    hello world
    <h1>hello {data.name}</h1>
    <p>Let,s go for {data.hobbies[0]}</p>
</div>

// we can write js code in html directly using {} 


console.log(element);
// if we log the element it will show the react element object

// we have to import react-dom to render element
// import ReactDOM from "react-dom"; // its giving an error in console to import from react-dom/clint (Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".)
import ReactDOM from "react-dom/client"; // this is the correct way to import react-dom in react 18

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element)