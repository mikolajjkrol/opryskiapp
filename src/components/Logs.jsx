import { useQuery } from "@tanstack/react-query"
import { fetchData } from "../store/http";
import { useDispatch } from "react-redux";
import { dataActions } from "../store";

function Logs(){
    const dispatch = useDispatch()

    const {data, isLoading, isError} = useQuery({
        queryKey: ['logs'],
        queryFn: fetchData,
        onSuccess: (data) => {
            dispatch(dataActions.swapData(data))
        }
    });

    return (
        <div className="logs">
            <div className="title">Baza danych</div>
            <div className="alldata">
                <div className="data">
                    <div className="record"></div>
                    <div className="record"></div>
                </div>
            </div>
        </div>
    )
}
export default Logs