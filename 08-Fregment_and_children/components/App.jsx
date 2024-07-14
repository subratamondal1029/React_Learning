import Button from "./Button"

function App({children: H1}) {
  return (
    <>
     {/* <Button children="hello world"/> */}
    <Button>Hello world</Button>
    {H1}
    </>
    
  )
}

export default App


// we can pass children in two way 
// 1. we can directly pass children as prop in component (<Button "hello world"/>)
// 2. we can write the component as a html tag and pass the children as content

// it will decress the props in component 
// it make readable for human it will be familiar because as web developer already known about html stacture

// we can pass children anything that we want we also pass any component
// if we want to use component that pass as children we just need to write as js {children}
// or we can rename the children name in destacturing process {children: H1} and to render the component we can use <>{H1}</>