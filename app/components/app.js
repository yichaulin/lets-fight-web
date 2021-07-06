import React, {Fragment, useState} from 'react';
import { Divider } from 'antd'
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
            <CombatSetup
                isFighting={isFighting}
                combatSetupHandler={combatSetupHandler}
            />
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
            />
        </Fragment>
    );
}

export default App