// import { Fragment } from "react"

// function Button() {
//   return (
//     <>
//       <button>Hello</button>
//       <p>Subrata</p>
//     </>
//   )
// }

// export default Button


// if we want to return multiple react element we can't to return multiple element we can use react fregment 
// we can wrap those element in a "div" to avoid error but if we want to render these element without any parent
// we can use <Fragment></Fragment> it will stop giving the error and it will render multiple element without any parent element 
// to use <Fragment> we need to import from react
//  <></>  this is a short form of rect fregment  This method no need to import <Fragment> from react 




// children props in react component 

const Button = ({children}) => {
  return (
    <button title={children}>{children}</button>
  )
}

export default Button

// notes in app.jsx