
function Calendar(){
    const month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

    return (
        <div className="calendar">
            <div className="days">
                <div className="month">
                    {month.map((item, key) => {
                    return (<div className="day" id={key}>{item+1}</div>)
                    })}
                    </div>
                    <div className="month">
                    {month.map((item, key) => {
                    return (<div className="day" id={key}>{item+1}</div>)
                    })}
                    </div>
                    <div className="month">
                    {month.map((item, key) => {
                    return (<div className="day" id={key}>{item+1}</div>)
                    })}
                </div>
            </div>
            <div className="time">sierpień 2025</div>
        </div>
    )
}

export default Calendar