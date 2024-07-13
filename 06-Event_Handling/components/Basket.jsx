const basket = ({applePosi, basketId, appleNum}) =>{
    return (
        <div className="basket" id={"basket" + basketId}>
            <p className="appleNumCon">
                <span id={applePosi + "Apple"}>{appleNum}</span> Apple
            </p>
            basket {basketId}
        </div>
    )
}

export default basket