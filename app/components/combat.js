import React, { useState, useEffect } from "react";
import { Row, Col } from 'antd';
import RoundTimeLine from './round-time-line';
import FighterProfile from './fighter-profile';

const initFighter = (fighterName, isReady) => {
    return {
        name: fighterName,
        hp: 100,
        isReady: isReady == true ? true : false,
    }
}

const Combat = ({ fighterNames, roundID, isFightingHandler }) => {
    const [fighterA, setFighterA] = useState({})
    const [fighterB, setFighterB] = useState({})

    const setFightersHP = (fighterName, hp) => {
        if (fighterName == fighterA.name) {
            setFighterA({...fighterA, hp: hp})
        } else {
            setFighterB({...fighterB, hp: hp})
        }
    }

    const isLeftFighter = (fighterName) => {
        return fighterA.name == fighterName
    }

    // useEffect(() => {
    //     if (fighterA.isReady && fighterB.isReady) {
    //     }
    // }, [fighterA, fighterB])

    useEffect(() => {
        setFighterA(initFighter(fighterNames[0]))
        setFighterB(initFighter(fighterNames[1]))
    }, [roundID])


    return (
        <Row justify="center">
            <Col span={8}>
                <FighterProfile
                    header="Fighter A"
                    emitIsReady={(isReady) => setFighterA({...fighterA, isReady: isReady})}
                    fighterName={fighterA.name}
                    hp={fighterA.hp}
                />
            </Col>
            <Col span={8}>
                <RoundTimeLine
                    roundID={roundID}
                    emitFightingOver={() => isFightingHandler(false)}
                    emitFightersHP={setFightersHP}
                    isLeftFighter={isLeftFighter}
                    isReadyToFight={fighterA.isReady && fighterB.isReady}
                />
            </Col>
            <Col span={8}>
                <FighterProfile
                    header="Fighter B"
                    emitIsReady={(isReady) => setFighterB({...fighterB, isReady: isReady})}
                    fighterName={fighterB.name}
                    hp={fighterB.hp}
                />
            </Col>
        </Row>
    )
}

export default Combat