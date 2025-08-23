import 'bootstrap-icons/font/bootstrap-icons.css';
function Notification({type, message}){
    return (
        <div className={`notification ${type == 'okay' ? 'okay' : 'error'}`}>
            {type == 'okay' ? (        
            <i className="bi bi-check-square"></i>
            ) : (
            <i className="bi bi-exclamation-diamond"></i>)}

            {message} 
        </div>
    )
}

export default Notification