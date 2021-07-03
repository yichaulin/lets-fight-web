import React, { useState, useEffect } from "react";
import { Row, Col } from 'antd';
import RoundTimeLine from './round-time-line';
import FighterProfile from './fighter-profile';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum()

const generateNewRounds = (n) => {
    const rounds = []
    for (let i = 0; i < n; i++) {
        rounds.push(lorem.generateSentences(1))
    }
    return rounds
}

var newRounds = []
const Combat = ({ fighterNames, roundID, isFighting, isFightingHandler }) => {
    const [rounds, setRounds] = useState([])
    const [isAReady, setIsAReady] = useState(false)
    const [isBReady, setIsBReady] = useState(false)

    useEffect(() => {
        if (isAReady && isBReady) {
            setRounds(newRounds)
        }
    }, [isAReady, isBReady])

    useEffect(() => {
        newRounds = generateNewRounds(4)
        if (isAReady && isBReady) {
            setRounds(newRounds)
        }
    }, [roundID])


    return (
        <Row justify="center">
            <Col span={8}>
                <FighterProfile
                    header="Fighter A"
                    fighterName={fighterNames[0]}
                    setIsReady={setIsAReady}
                />
            </Col>
            <Col span={8}>
                <RoundTimeLine
                    rounds={rounds}
                    isFightingHandler={isFightingHandler}
                />
            </Col>
            <Col span={8}>
                <FighterProfile
                    header="Fighter B"
                    fighterName={fighterNames[1]}
                    setIsReady={setIsBReady}
                />
            </Col>
        </Row>
    )
}

export default Combat