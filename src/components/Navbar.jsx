import { useState } from "react"
import { useDispatch } from "react-redux";
import { uiActions } from "../store";

import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar(){
    const [ hovered, setHovered ] = useState(0);
    
    const dispatch = useDispatch()


    const clickedBtn = (page) => {
        dispatch(uiActions.setPage(page))
        if(page == 'home'){
            setHovered(0);
        } else if (page == 'add'){
            setHovered(1);
        } else if (page == 'logs'){
            setHovered(2);
        }
    }
    
    return (
        <div className="navbar">
            <div className="highlight" style={{ left: `${hovered * 32.5}%` }} />
            <button onClick={() => {clickedBtn('home')}}>
                <i className="bi bi-house"></i>
            </button>
            <button onClick={() => {clickedBtn('add')}}>
                <i className="bi bi-plus-square"></i>
            </button>
            <button onClick={() => {clickedBtn('logs')}}>
                <i className="bi bi-sliders2"></i>
            </button>
        </div>
    )
}

export default Navbar