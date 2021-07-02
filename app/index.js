import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import RoundTimeLine from './components/round-time-line';
import FighterProfile from './components/fighter-profile';

const App = () => {
    const rounds = [
        'Create a services site 2015-09-01',
        'Solve initial network problems 2015-09-01',
        'Technical testing 2015-09-01',
        'Network problems being solved 2015-09-01',
    ]
    const fighters = ['Saber', 'Archer']
    return (
        <Row justify="center" align="middle">
            <Col span={24}>
                <h1>Header</h1>
            </Col>
            <Col span={8}>
                <FighterProfile fighterName={fighters[0]} />
            </Col>
            <Col span={8}>
                <RoundTimeLine rounds={rounds} />
            </Col>
            <Col span={8}>
                <FighterProfile fighterName={fighters[1]} />
            </Col>
        </Row>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));