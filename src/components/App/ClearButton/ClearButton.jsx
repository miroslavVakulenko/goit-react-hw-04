import css from "../ClearButton/ClearButton.module.css"

function ClearButton({onClick}){
    return(<button style={css.ClearButton} onClick={onClick}>
        Clear List
      </button>)
}

export default ClearButton;