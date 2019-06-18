import React from "react";

const Dashboard = props => {
    return(
        <div>
            <button onClick={props.addStrike}>
                strike
            </button>
            <button onClick={props.addBall}>
                ball
            </button>
            <button onClick={props.foulChange}>
                foul
            </button>
            <button onClick={props.hitReset}>
                hit
            </button>
        </div>
    )
}

export default Dashboard;