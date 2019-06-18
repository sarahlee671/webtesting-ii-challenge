import React from "react";

const Display = props => {
    return (
        <div>
            <p>At-bat: {props.player}</p>
            <p>Balls: {props.ball-count}</p>
            <p>Strikes: {props.strike-count}</p>
        </div>
    )
}

export default Display;