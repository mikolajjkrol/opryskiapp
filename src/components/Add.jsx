import { useDispatch } from "react-redux"
import { uiActions } from "../store"

function Add(){
    const dispatch = useDispatch()
    
    return (
        <div className="add">
            <div className="title">Dodaj oprysk</div>
            <button onClick={() => {dispatch(uiActions.togglePopup())}}>
                <i className="bi bi-plus"></i>
            </button>
        </div>
    )
}

export default Add