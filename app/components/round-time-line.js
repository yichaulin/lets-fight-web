import React, { useEffect, useState } from "react";
import { Timeline } from 'antd';

const sleep = async (times) => {
    return new Promise(resolve => {
        setTimeout(resolve, times)
    })
}

const displayRoundGadually = async (allRounds, setDisplayRounds) => {
    for (let i = 0; i < allRounds.length; i++) {
        setDisplayRounds(allRounds.slice(0, i+1))
        await sleep(2000)
    }
}

const RoundTimeLine = ({rounds}) => {
    const [displayRounds, setDisplayRounds] = useState([])

    useEffect(() => {
        displayRoundGadually(rounds, setDisplayRounds)
    }, [rounds])

    return (
        <Timeline>
            {displayRounds.map((round, i) => {
                return <Timeline.Item key={`round-${i}`}>{round}</Timeline.Item>
            })}
        </Timeline>
    );
}
export default RoundTimeLine