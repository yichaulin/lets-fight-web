import React, { useState, useEffect } from "react";
import { Row, Col } from 'antd';
import RoundTimeLine from './round-time-line';
import FighterProfile from './fighter-profile';

const sleep = async (times) => {
    return new Promise(resolve => {
        setTimeout(resolve, times)
    })
}

const displayRoundGadually = async (allRounds, setRounds) => {
    for (let i = 0; i < allRounds.length; i++) {
        await sleep(2000)
        setRounds(allRounds.slice(0, i+1))
    }
}

const Combat = ({ fighters, imageUrls }) => {
    const [rounds, setRounds] = useState([])
    const allRounds = [
        '1. Create a services site 2015-09-01',
        '2. Solve initial network problems 2015-09-01',
        '3. Technical testing 2015-09-01',
        '4. Network problems being solved 2015-09-01',
    ]

    useEffect(async () => {
        displayRoundGadually(allRounds, setRounds)
    }, [])

    return (
        <Row justify="center">
            <Col span={24}>
                <h1>Header</h1>
            </Col>
            <Col span={8}>
                <FighterProfile fighterName={fighters[0]} imageUrl={imageUrls[0]} />
            </Col>
            <Col span={8}>
                <RoundTimeLine rounds={rounds} />
            </Col>
            <Col span={8}>
                <FighterProfile fighterName={fighters[1]} imageUrl={imageUrls[1]} />
            </Col>
        </Row>
    )
}

export default Combat