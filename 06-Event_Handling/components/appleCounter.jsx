import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById('root'))

import leftArrow from "../img/leftArrow.png"
import rightArrow from "../img/rightArrow.webp"
import Basket from "./Basket.jsx"
import Button from "./Button.jsx"

let leftAppleNum = 10
let rightAppleNum = 0

const AppleCounter = () =>{

function handelClick(e){
    e.stopPropagation()

    const btnType = e.target.tagName === "IMG" ? e.target.alt : e.target.title
    
    if (btnType === "Right Arrow" && leftAppleNum !== 0) {
        leftAppleNum--
        rightAppleNum++
        root.render(<AppleCounter />)
    }else if(btnType === "Left Arrow" && rightAppleNum !== 0){
        leftAppleNum++
        rightAppleNum--
        root.render(<AppleCounter />)
    }


}


    return (
        <main>
            <Basket basketId="1" appleNum={leftAppleNum} applePosi="left"/>
            <div id="buttons">
                <Button buttonType="left" buttonImage={leftArrow} buttonName="Left Arrow" clickEvent={handelClick}/>
                <Button buttonType="right" buttonImage={rightArrow} buttonName="Right Arrow" clickEvent={handelClick}/>
            </div>
            <Basket basketId="2" appleNum={rightAppleNum} applePosi="right"/>
      </main>
    )
}

export default AppleCounter