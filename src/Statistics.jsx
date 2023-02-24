import React from "react";



const Statistics = (props) => {

    return (
        <div>
            <h2>Statistics</h2>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>total {props.total}</p>
            <p>positive {props.positive}%</p>
        </div>
    )
}

export default Statistics