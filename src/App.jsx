import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Add from "./components/Add";
import Logs from "./components/Logs";
import Opryski from "./components/Opryski";

import 'bootstrap-icons/font/bootstrap-icons.css';

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store";
import { useEffect } from "react";

import Notification from "./components/Notification";

function App() {
  const theme = useSelector(state => state.ui.theme)
  const popup = useSelector(state => state.ui.popup)
  const page = useSelector(state => state.ui.page)

  const error = useSelector(state => state.ui.error)
  const success = useSelector(state => state.ui.success)

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => dispatch(uiActions.toggleError()), 2000);
      return () => clearTimeout(timer);
    } 
  }, [error, dispatch]); 

  useEffect(() => {
  if (success) {
    const timer = setTimeout(() => dispatch(uiActions.toggleSent()), 2000);
    return () => clearTimeout(timer);
  }
}, [success, dispatch]);

  return (
    <div className={`container ${theme ? 'dark' : 'light'}`}>
            
      {error && <Notification type='error' message='Coś poszło nie tak!'/>}
      {success && <Notification type='okay' message='Udało się!' />}


      {page === 'home' && <Home/>}
      {page === 'add' && <Add/>}
      {page === 'logs' && <Logs/>}

      <Navbar/>

      {popup && <Opryski/>}

      <div className="toggle" onClick={() => {dispatch(uiActions.toggleTheme())}}>
        <i className="bi bi-stars"></i>
      </div>
    </div>
  )
}

export default App