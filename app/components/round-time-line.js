import React, { useEffect, useState } from "react";
import { Timeline } from 'antd';
import sleep from 'sleep-promise';
import { FormatRoundResults } from '../formatter/formatter'

const roundWaitingTime = 2000

const generateNewRounds = () => {
    const res = require('../../res.json')
    return res.roundResults
}

const displayRoundGadually = async ({rounds, setDisplayRounds, emitFightersHP, isLeftFighter}) => {
    let displayedRounds = []
    for (let i = 0; i < rounds.length; i++) {
        await sleep(roundWaitingTime)
        const latestRound = rounds[i]
        const formattedMsg = FormatRoundResults(latestRound)
        const position = isLeftFighter(latestRound.attacker) ? 'right' : 'left'
        const displayRound = {
            position: position,
            msg: formattedMsg,
        }

        displayedRounds = displayedRounds.concat([displayRound])
        setDisplayRounds(displayedRounds)
        emitFightersHP(latestRound.defender, latestRound.defenderRestHP)
    }
}

const RoundTimeLine = ({roundID, emitFightingOver, emitFightersHP, isLeftFighter, isReadyToFight}) => {
    const [displayRounds, setDisplayRounds] = useState([])
    const [rounds, setRounds] = useState([])

    useEffect(async() => {
        setRounds(generateNewRounds())
    }, [roundID])

    useEffect(async() => {
        if (isReadyToFight) {
            await displayRoundGadually({rounds, setDisplayRounds, emitFightersHP, isLeftFighter})
            emitFightingOver()
        }
    }, [isReadyToFight])

    return (
        <Timeline mode="alternate" reverse={true}>
            {displayRounds.map((round, i) => (
                <Timeline.Item
                    key={`round-${i}`}
                    position={round.position}>
                        {round.msg}
                </Timeline.Item>
            ))}
        </Timeline>
    );
}
export default RoundTimeLine