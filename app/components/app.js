import React, {Fragment, useState} from 'react';
import { Divider, Row, Col } from 'antd'
import Combat from './combat';
import CombatSetup from './combat-setup'

const App = () => {
    const [fighterNames, setFighterNames] = useState([])
    const [isFighting, setIsFighting] = useState(false)
    const [roundID, setRoundID] = useState("")

    const combatSetupHandler = (names, roundID) => {
        setFighterNames(names)
        setIsFighting(true)
        setRoundID(roundID)
    }

    return (
        <Fragment>
            <Row>
                <Col span={1} />
                <Col span={7}>
                    <CombatSetup
                        isFighting={isFighting}
                        combatSetupHandler={combatSetupHandler}
                    />
                </Col>
            </Row>
            <Divider>
                <h2>Rounds</h2>
            </Divider>
            <Combat
                roundID={roundID}
                fighterNames={fighterNames}
                isFighting={isFighting}
                isFightingHandler={setIsFighting}
            />
        </Fragment>
    );
}

export default App