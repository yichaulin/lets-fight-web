import 'antd/dist/antd.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import RoundTimeLine from './components/round-time-line';
import FighterProfile from './components/fighter-profile';
import { AvatarGenerator } from 'random-avatar-generator';

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

const generator = new AvatarGenerator();
const fighters = ['Saber', 'Archer']
const imageUrls = [
    generator.generateRandomAvatar(fighters[0]),
    generator.generateRandomAvatar(fighters[1])
];

const App = () => {
    const allRounds = [
        '1. Create a services site 2015-09-01',
        '2. Solve initial network problems 2015-09-01',
        '3. Technical testing 2015-09-01',
        '4. Network problems being solved 2015-09-01',
    ]
    const [rounds, setRounds] = useState([])

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
    );
}

ReactDOM.render(<App />, document.getElementById('app'));