import "./style.css"

function addContentIncard(props){
    const {key, image, brand, content} = props
    return (
        <div className="card" key={key}>
            <img src={image} alt={brand + " logo"} loading="lazy"/>
            <h1>{brand}</h1>
            <p>{content}</p>
            <a href={image} target="_black"><button>Preview</button></a>
        </div>
        )
}


// const cardContainer = [
//     addContentIncard(1, "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", "React", "React is a JavaScript library for building user interfaces."),
//     addContentIncard(2, "https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png", "Javascript", "JavaScript is the world's most popular programming language."),
//     addContentIncard(3, "https://cdn.iconscout.com/icon/free/png-256/free-node-js-3628954-3030179.png?f=webp&w=256", "node Js", "Node.js is an open source server environment."),

// ]


import ReactDOM from "react-dom/client";
const root =  ReactDOM.createRoot(document.getElementById("root"));
// root.render(cardContainer);

fetch('https://dummyjson.com/products/category/smartphones')
.then(res => res.json())
.then((data) =>{
    let cardContainer2 = data.products.map((product) => {
        // return addContentIncard(product.id, product.thumbnail, product.brand, product.title) // if we directly pass an array to render cards we have to menten order of every prameters
        // but if we pass an object and destacture in addContentIncard() function it will solve
        
        return addContentIncard({key: product.id, image: product.thumbnail, brand: product.brand, content: product.title})
    })

    return cardContainer2
})
.then((data) => {
    root.render(data)
})
