import React, { useState, useEffect } from "react";
import { Row, Col } from 'antd';
import RoundTimeLine from './round-time-line';
import FighterProfile from './fighter-profile';
import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

const sleep = async (times) => {
    return new Promise(resolve => {
        setTimeout(resolve, times)
    })
}

const displayRoundGadually = async (allRounds, setRounds) => {
    for (let i = 0; i < allRounds.length; i++) {
        setRounds(allRounds.slice(0, i+1))
        await sleep(2000)
    }
}

const newFighter = (fighterName) => {
    return {
        name: fighterName,
        imageUrl: generator.generateRandomAvatar(fighterName),
        isReady: false
    }
}

const Combat = ({ fighterNames }) => {
    const [rounds, setRounds] = useState([])
    const [isAReady, setIsAReady] = useState(false)
    const [isBReady, setIsBReady] = useState(false)

    const fighterA = newFighter(fighterNames[0])
    const fighterB = newFighter(fighterNames[1])

    const allRounds = [
        '1. Create a services site 2015-09-01',
        '2. Solve initial network problems 2015-09-01',
        '3. Technical testing 2015-09-01',
        '4. Network problems being solved 2015-09-01',
    ]

    useEffect(async () => {
        if (isAReady && isBReady) {
            displayRoundGadually(allRounds, setRounds)
        }
    }, [isAReady, isBReady])

    return (
        <Row justify="center">
            <Col span={8}>
                {fighterA.name && (
                    <FighterProfile
                        fighter={fighterA}
                        isLoaded={() => setIsAReady(true)}
                    />
                )}
            </Col>
            <Col span={8}>
                <RoundTimeLine rounds={rounds} />
            </Col>
            <Col span={8}>
                {fighterB.name && (
                    <FighterProfile
                        fighter={fighterB}
                        isLoaded={() => setIsBReady(true)}
                    />
                )}
            </Col>
        </Row>
    )
}

export default Combat