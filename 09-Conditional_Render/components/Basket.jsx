const basket = ({applePosi, basketId, appleNum}) =>{
    return (
        <div className="basket" id={"basket" + basketId}>
            <p className="appleNumCon">
                <span id={applePosi + "Apple"}>{appleNum}</span> Apple
            </p>
            basket {basketId} {appleNum === 10 ? "(full)": null} 
            {/* we can use ternary oprator of js to render element conditionaly */}
        </div>
    )
}

export default basket
