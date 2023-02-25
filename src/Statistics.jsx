import React from "react";
import StatisticsLine from "./StatisticsLine";



const Statistics = (props) => {
    if (props.total === 0) {
        return (
            <h2>Statistics</h2>
        )
    }
    return (
        <div>
            <h2>Statistics</h2>
            <StatisticsLine text='good' value={props.good}/>
            <StatisticsLine text='neutral' value={props.neutral}/>
            <StatisticsLine text='bad' value={props.bad}/>
            <StatisticsLine text='total' value={props.total}/>
            <StatisticsLine text='positive' value={`${props.positive}%`}/>
        </div>
    )
}

export default Statistics