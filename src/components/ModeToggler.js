function ModeToggler(props) {
    let darkModeOn = true
    function handleClick() {
        darkModeOn = !darkModeOn;
        if (darkModeOn == true) {
            console.log ("Dark Mode is on")
        }
        else {
            console.log ("light mode is on")
        }
    }
    return (
        <div>
             <button onCLick={handleClick}>
                Click Me
             </button>

        </div>
    )

}

export default ModeToggler