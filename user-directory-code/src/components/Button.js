function Button(props) {

    return (
        <div>
            <button id='button-style' onClick={props.handleNext}> Next </button>
            <button id='button-two' onClick={props.handlePrevious}> Previous </button>
        </div>
    )
}


export default Button;