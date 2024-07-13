import leftArrow from "../../06-Event_Handling/img/leftArrow.png"
import rightArrow from "../../06-Event_Handling/img/rightArrow.webp"
import Basket from "../../06-Event_Handling/components/Basket.jsx"
import Button from "../../06-Event_Handling/components/Button.jsx"
import { useState } from "react"


const AppleCounter = () =>{

    const [leftAppleNum, setLeftAppleNum] = useState(10)
    const [rightAppleNum, setRightAppleNum] = useState(0)

function handelClick(e){
    const btnType = e.target.tagName === "IMG" ? e.target.alt : e.target.title
    
    if (btnType === "Right Arrow" && leftAppleNum !== 0) {
        setLeftAppleNum(leftAppleNum - 1)
        setRightAppleNum(rightAppleNum + 1)
    }else if(btnType === "Left Arrow" && rightAppleNum !== 0){
        setLeftAppleNum(leftAppleNum + 1)
        setRightAppleNum(rightAppleNum - 1)
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