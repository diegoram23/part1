import React from "react";

const Part = (props) => {
    console.log('this is part', props)
    return (
        <div>
            <p> {props.name} {props.exercises}</p>
        </div>
    )
}
export default Part