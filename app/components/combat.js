import React, { useState, useEffect } from "react";
import { Row, Col } from 'antd';
import RoundTimeLine from './round-time-line';
import FighterProfile from './fighter-profile';
import { FetchCombat } from '../api/lets-fight'
import { FormatRoundResults } from '../formatter/formatter'

const Combat = ({ fighterNames, roundID, isFightingHandler }) => {
    const [isReady, setIsReady] = useState([false, false])
    const [hp, setHP] = useState([])
    const [rounds, setRounds] = useState([])
            
    const formatRoundResults = (roundResults) => {
        const formattedRoundResults = []

        for (let i = 0; i < roundResults.length; i++){
            const roundResult = roundResults[i]
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
        if (isReady[0] && isReady[1]) {
            const res = await FetchCombat(fighterNames)
            const formattedRoundResults = formatRoundResults(res.data.roundResults)
            setRounds(formattedRoundResults)
        }
    }, [isReady, roundID])

    return (
        <Row justify="center">
            <Col span={8}>
                <FighterProfile
                    header="Fighter A"
                    emitIsReady={(val) => setIsReady([val, isReady[1]])}
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
                    emitIsReady={(val) => setIsReady([isReady[0], val])}
                    fighterName={fighterNames[1]}
                    hp={hp[1]}
                />
            </Col>
        </Row>
    )
}

export default Combat