import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { Timeline } from 'antd';
import sleep from 'sleep-promise';
import { FormatRoundResults } from '../formatter/formatter'
import { SetIsFighting } from "../redux/actions/combat-action";
import { UpdateHP } from "../redux/actions/fighters-action";

const roundWaitingTime = 2000

const RoundTimeLine = ({ rounds, fighterNames, SetIsFighting, UpdateHP }) => {
    const [displayRounds, setDisplayRounds] = useState([])

    useEffect(async () => {
        if (!rounds || rounds.length === 0) {
            setDisplayRounds([])
        } else {
            await displayRoundGadually(rounds)
        }
    }, [rounds])

    const displayRoundGadually = async (rounds) => {
        let displayedRounds = []
        for (let i = 0; i < rounds.length; i++) {
            const latestRound = rounds[i]
            displayedRounds = displayedRounds.concat([{
                msg: FormatRoundResults(latestRound),
                timeLineDotPosition: latestRound.attacker === fighterNames[1] ? 'left' : 'right'
            }])

            await sleep(roundWaitingTime)
            setDisplayRounds(displayedRounds)
            UpdateHP(latestRound.defender, latestRound.defenderRestHP)
        }
        SetIsFighting(false)
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

const mapStateToProps = ({ fightersReducer, combatReducer }) => {
    return {
        rounds: combatReducer.rounds,
        fighterNames: fightersReducer.fighterNames
    }
}
export default connect(mapStateToProps,
    { SetIsFighting, UpdateHP }
)(RoundTimeLine)