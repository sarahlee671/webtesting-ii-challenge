import React from "react";

const Display = props => {
    return (
        <div>
            <p>At-bat: {props.player}</p>
            <p>Balls: {props.balls}</p>
            <p>Strikes: {props.strikes}</p>
        </div>
    )
}

export default Display;