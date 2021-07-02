import 'antd/dist/antd.css';
import React, {Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
import Combat from './components/combat';
import CombatSetup from './components/combat-setup'

const App = () => {
    const [fighterNames, setFighterNames] = useState([])

    return (
        <Fragment>
            <CombatSetup fighters={fighterNames} fightersSetter={(names) => {setFighterNames(names)}} />
            <Combat fighterNames={fighterNames} />
        </Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));