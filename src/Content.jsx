import React from "react";

const Content = (props) => {

    const Part = (props) => {
        return (
            <div>
                <p> {props.name} {props.exercises}</p>
            </div>
        )
    }
    return (
        <div>
            <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
            <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
            <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
        </div>
    )
}

export default Content