import {createRoot} from "react-dom/client"
import AppleCounter from "./components/appleCounter"
import "../06-Event_Handling/style.css"

const App = () =>{
    return (
    <>
        <AppleCounter />
    </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
