import { useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchData, deleteOprysk, getData } from "../store/http";
import { useDispatch } from "react-redux";
import { dataActions, uiActions } from "../store";

import 'bootstrap-icons/font/bootstrap-icons.css';
function Logs(){
    const dispatch = useDispatch()
    const queryClient = useQueryClient();

    const {data, isLoading, isError} = useQuery({
        queryKey: ['logs'],
        queryFn: fetchData,
        onSuccess: (data) => {
            dispatch(dataActions.swapData(data))
        }
    });

    const handleDelete = async (id) => {
        try {
            await deleteOprysk(id);
            queryClient.invalidateQueries(['logs']);
        } catch(err) {
            console.error('Could not delete', err);
        }
        dispatch(uiActions.toggleSent())
    }

    const sortedData = Array.isArray(data) ? [...data].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    ) : [];

    return (
        <div className="logs">
            <div className="title">Baza danych</div>
            <div className="alldata">
                <div className="data" translate="no">
                    {sortedData != false ? sortedData.map((item) => {
                    return (
                        <div className="record" key={item.id}>
                            <div className="txt">
                                <div className="date">{item.date}</div>
                                oprysk {item.name.toLowerCase()}, {item.place.charAt(0).toUpperCase() + item.place.slice(1)}     
                            </div>
                            <button onClick={() => {handleDelete(+item.id)}}>
                                <i className="bi bi-x-circle"></i>
                            </button>
                        </div>
                    
                    )}) : <div className="loading"><i className="bi bi-arrow-clockwise"></i> <i>Narazie nic...</i></div>}
                </div>
            </div>
        </div>


    //  <div className="record">
    //     <div className="txt">
    //         <div className="date">25-02-2025</div>
    //         oprysk ridomil, u Markowej     
    //     </div>
    //     <button>
    //         <i className="bi bi-x-circle"></i>
    //     </button>
    //  </div>
    )
}
export default Logs