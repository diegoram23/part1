import React from "react";

const Content = (props) => {
        console.log(props)
    const Part = (props) => {
        return (
            <div>
                <p> {props.name} {props.exercises}</p>
            </div>
        )
    }
    return (
        <div>
            <Part name={props.content.parts[0].name} exercises={props.content.parts[0].exercises} />
            <Part name={props.content.parts[1].name} exercises={props.content.parts[1].exercises} />
            <Part name={props.content.parts[2].name} exercises={props.content.parts[2].exercises} />
        </div>
    )
}

export default Content