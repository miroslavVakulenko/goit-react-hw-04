import css from "../ClearButton/ClearButton.module.css"

function ClearButton({onClick}){
    return(<button className={css.clearButton} onClick={onClick}>
        Clear List
      </button>)
}

export default ClearButton;