import React, { useState, useEffect } from "react";
import { Row, Col } from 'antd';
import RoundTimeLine from './round-time-line';
import FighterProfile from './fighter-profile';
import { FetchCombat } from '../api/lets-fight'
import { FormatRoundResults } from '../formatter/formatter'

const Combat = ({ fighterNames, roundID, isFightingHandler, emitWinner }) => {
    const [isAReady, setIsAReady] = useState(false)
    const [isBReady, setIsBReady] = useState(false)
    const [hp, setHP] = useState([])
    const [rounds, setRounds] = useState([])
            
    const formatRoundResults = (roundResults) => {
        const sortedRoundResults = roundResults.sort((r,s) => r.roundNum > s.roundNum ? 1 : -1)
        const formattedRoundResults = []

        for (let i = 0; i < sortedRoundResults.length; i++){
            const roundResult = sortedRoundResults[i]
            const formattedMsg = FormatRoundResults(roundResult)
            let timeLineDotPosition = 'right'
            let updateFighterHP = () => {
                setHP([roundResult.attackerRestHP, roundResult.defenderRestHP])
            }

            if (roundResult.attacker === fighterNames[1]) {
                timeLineDotPosition = 'left'
                updateFighterHP = () => {
                    setHP([roundResult.defenderRestHP, roundResult.attackerRestHP])
                }
            }

            formattedRoundResults.push({
                msg: formattedMsg,
                timeLineDotPosition: timeLineDotPosition,
                updateFighterHP: updateFighterHP
            })
        }
        return formattedRoundResults
    }

    useEffect(async () => {
        setRounds([])
        setHP([100, 100])
    }, [roundID])

    useEffect(async () => {
        if (isAReady && isBReady) {
            const res = await FetchCombat(fighterNames)
            const formattedRoundResults = formatRoundResults(res.data.roundResults)
            setRounds(formattedRoundResults)
            emitWinner(res.data.winner)
        }
    }, [isAReady, isBReady, roundID])

    return (
        <Row justify="center">
            <Col span={8}>
                <FighterProfile
                    header="Fighter A"
                    emitIsReady={setIsAReady}
                    fighterName={fighterNames[0]}
                    hp={hp[0]}
                />
            </Col>
            <Col span={8}>
                <RoundTimeLine
                    roundResults={rounds}
                    emitFightingOver={() => isFightingHandler(false)}
                />
            </Col>
            <Col span={8}>
                <FighterProfile
                    header="Fighter B"
                    emitIsReady={setIsBReady}
                    fighterName={fighterNames[1]}
                    hp={hp[1]}
                />
            </Col>
        </Row>
    )
}

export default Combat