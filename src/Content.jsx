import React from "react";
import Part from "./Part";

const Content = (props) => {
    return (
        <div>
            <Part name={props.content1.name} exercises={props.content1.exercises} />
            <Part name={props.content2.name} exercises={props.content2.exercises} />
            <Part name={props.content3.name} exercises={props.content3.exercises} />
        </div>
    )
}

export default Content