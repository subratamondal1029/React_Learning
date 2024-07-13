const Button = ({buttonType, buttonImage, buttonName, clickEvent}) =>{
    return(
        <button className="arrowBtn" data-type={buttonType} title={buttonName} onClick={clickEvent}>
            <img src={buttonImage} alt={buttonName} />
        </button>
    )
}

export default Button