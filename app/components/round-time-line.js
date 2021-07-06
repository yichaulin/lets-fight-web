import React, { useEffect, useState } from "react";
import { Timeline } from 'antd';
import sleep from 'sleep-promise';

const roundWaitingTime = 3000


const RoundTimeLine = ({roundResults, emitFightingOver }) => {
    const [displayRounds, setDisplayRounds] = useState([])

    useEffect(async() => {
        if (roundResults.length === 0) {
            setDisplayRounds([])
        } else {
            await displayRoundGadually(roundResults)
        }
    }, [roundResults])

    const displayRoundGadually = async (rounds) => {
        let displayedRounds = []
        for (let i = 0; i < rounds.length; i++) {
            const latestRound = rounds[i]
            await sleep(roundWaitingTime)
            displayedRounds = displayedRounds.concat([latestRound])
            setDisplayRounds(displayedRounds)
            latestRound.updateFighterHP()
        }
        emitFightingOver()
    }

    return (
        <Timeline mode="alternate" reverse={true}>
            {displayRounds.map((round, i) => (
                <Timeline.Item
                    key={`round-${i}`}
                    position={round.timeLineDotPosition}>
                        {round.msg}
                </Timeline.Item>
            ))}
        </Timeline>
    );
}
export default RoundTimeLine