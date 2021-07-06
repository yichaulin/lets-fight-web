import React, {Fragment, useState} from 'react';
import { Divider, Col, Row, Typography } from 'antd'
import Combat from './combat';
import CombatSetup from './combat-setup'
import CombatResult from './combat-result'

const { Title } = Typography;

const App = () => {
    const [fighterNames, setFighterNames] = useState([])
    const [isFighting, setIsFighting] = useState(false)
    const [roundID, setRoundID] = useState("")
    const [winner, setWinner] = useState('')

    const combatSetupHandler = (names, roundID) => {
        setFighterNames(names)
        setIsFighting(true)
        setRoundID(roundID)
    }

    return (
        <Fragment>
            <Title><div style={{textAlign: 'center'}}>決策工具</div></Title>
            <Row justify="center">
                <Col xs={{span: 20}} sm={{span: 20}} md={{span: 8}}>
                    <CombatSetup
                        isFighting={isFighting}
                        combatSetupHandler={combatSetupHandler}
                    />
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={{span: 20}} sm={{span: 20}} md={{span: 8}}>
                    <CombatResult winner={winner} isShow={!isFighting} />
                </Col>
            </Row>
            { fighterNames[0] && fighterNames[1] && (
                <Divider>
                    <h2>決鬥結果</h2>
                </Divider>
            )}
            <Combat
                roundID={roundID}
                fighterNames={fighterNames}
                isFighting={isFighting}
                isFightingHandler={setIsFighting}
                emitWinner={setWinner}
            />
        </Fragment>
    );
}

export default App