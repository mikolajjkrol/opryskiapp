import { useDispatch } from "react-redux";
import { useEffect, useState } from "react"
import { uiActions } from "../store";
import { sendData, getData } from "../store/http";

function Opryski(){
    const [ shouldRender, setShouldRender ] = useState(true);
    const [ dateVal, setDateVal ] = useState('');
    const [ placeVal, setPlaceVal ] = useState('');
    const [ inputVal, setInputVal] = useState('');
    const [ badInput, setBadInput ] = useState(false);
    const [ badPlaceInput, setBadPlaceInput ] = useState(false);

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setDateVal(today)
    }, []);

    async function handleSubmit(){
        // MAKING SURE THAT INPUTS HAVE ANY VALUE SINCE I NEED IT
        if (!inputVal){
            setBadInput(true);
            if (!placeVal){
                setBadPlaceInput(true)
            }
            return
        } else if (!placeVal){
            setBadPlaceInput(true)
            return
        }

        // NEXT STEP LOADING
        setLoading(true);

        // SENDING DATA
        try { 
            await sendData({
                name: inputVal.toLowerCase(),
                date: dateVal,
                place: placeVal
            });

            // UPDATING THE DATA ON DIFFRENT COMPONENTS AND UPDATING INFO
            dispatch(getData())
            dispatch(uiActions.toggleSent())

            // CLEARING THE INPUTS FOR MOREEEE
            setDateVal(new Date().toISOString().split('T')[0]);
            setPlaceVal('');
            setInputVal('');
        } catch (err) {
            dispatch(uiActions.toggleError())
        } finally {
            setLoading(false);
        }
    }

    function handleHide(){
        setShouldRender(false)
        setTimeout(() => dispatch(uiActions.togglePopup()), 500)
    }

    return (
        <>
        <div className={`background ${shouldRender ? '' : 'show-off'}`}></div>
        <div className={`opryski ${shouldRender ? 'slide-up' : 'slide-down'}`}>
            
            <input type="text"
                className={`${badInput ? 'badinput' : ''}`}
                list="opryski" 
                placeholder="Wybór oprysku" 
                value={inputVal}
                onChange={(e) => {setInputVal(e.target.value) 
                setBadInput(false)}}/>
            <datalist id="opryski">
                <option value="Ridomil"></option>
                <option value="Topsin"></option>
                <option value="Asashi"></option>
                <option value="Hospilan"></option>
                <option value="Dursban"></option>
                <option value="Roundup"></option>
            </datalist>
            
            <input type="date" value={dateVal} onChange={(e) => {setDateVal(e.target.value)}}/>
            <input type="text" value={placeVal} onChange={(e) => {setPlaceVal(e.target.value)
                setBadPlaceInput(false)}} placeholder="Miejsce oprysku" className={`${badPlaceInput ? 'badinput' : ''}`}/>
            <button onClick={handleSubmit} disabled={loading}>Dodaj oprysk</button>
            
            <div className="x" onClick={handleHide}>x</div>
        </div>
        </>
    )
}

export default Opryski