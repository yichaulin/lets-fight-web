import React, { useEffect, useState } from "react";
import { Timeline } from 'antd';
import sleep from 'sleep-promise';

const displayRoundGadually = async (allRounds, setDisplayRounds) => {
    for (let i = 0; i < allRounds.length; i++) {
        setDisplayRounds(allRounds.slice(0, i+1))
        await sleep(2000)
    }
}

const RoundTimeLine = ({rounds, isFightingHandler}) => {
    const [displayRounds, setDisplayRounds] = useState([])

    useEffect(async () => {
        await displayRoundGadually(rounds, setDisplayRounds)
        isFightingHandler(false)
    }, [rounds])

    return (
        <Timeline mode="alternate">
            {displayRounds.map((round, i) => {
                const position = i % 2 == 1 ? 'right' : 'left'
                return <Timeline.Item key={`round-${i}`} position={position}>{round}</Timeline.Item>
            })}
        </Timeline>
    );
}
export default RoundTimeLine