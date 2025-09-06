import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { Timeline } from 'antd';
import sleep from 'sleep-promise';
import { FormatRoundResults } from '../formatter/formatter'
import { SetIsFighting, ResetPlaySpeed } from "../redux/actions/combat-action";
import { UpdateHP } from "../redux/actions/fighters-action";

let globalPlaySpeed

const RoundTimeLine = ({ rounds, fighterNames, playSpeed, SetIsFighting, UpdateHP, ResetPlaySpeed }) => {
    const [displayRounds, setDisplayRounds] = useState([])

    useEffect(() => {
        if (!rounds || rounds.length === 0) {
            setDisplayRounds([])
        } else {
            (async () => {
                await displayRoundGadually(rounds)
            })()
        }
    }, [rounds])

    useEffect(() => {
        globalPlaySpeed = playSpeed
    }, [playSpeed])

    const displayRoundGadually = async (rounds) => {
        let displayedRounds = []
        for (let i = 0; i < rounds.length; i++) {
            const latestRound = rounds[i]
            displayedRounds = displayedRounds.concat([{
                msg: FormatRoundResults(latestRound),
                timeLineDotPosition: latestRound.attacker === fighterNames[1] ? 'left' : 'right'
            }])

            await sleep(globalPlaySpeed)
            setDisplayRounds(displayedRounds)
            UpdateHP(latestRound.defender, latestRound.defenderRestHP)
        }
        SetIsFighting(false)
        ResetPlaySpeed()
    }

    return (
        <Timeline
            mode="alternate"
            reverse
            items={displayRounds.map((round, i) => ({
                key: `round-${i}`,
                position: round.timeLineDotPosition,
                children: round.msg,
            }))}
        />
    );
}

const mapStateToProps = ({ fightersReducer, combatReducer }) => {
    return {
        rounds: combatReducer.rounds,
        fighterNames: fightersReducer.fighterNames,
        playSpeed: combatReducer.playSpeed,
    }
}
export default connect(mapStateToProps,
    { SetIsFighting, UpdateHP, ResetPlaySpeed }
)(RoundTimeLine)