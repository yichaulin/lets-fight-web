import 'antd/dist/antd.css';
import React, {Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
import Combat from './components/combat';
import CombatSetup from './components/combat-setup'
import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

const App = () => {
    const [fighters, setFighters] = useState([])
    const imageUrls = fighters.length < 2 ? [] : [
        generator.generateRandomAvatar(fighters[0]),
        generator.generateRandomAvatar(fighters[1])
    ]

    return (
        <Fragment>
            <CombatSetup fighters={fighters} fightersSetter={(fighters) => {setFighters(fighters)}} />
            <Combat fighters={fighters} imageUrls={imageUrls}/>
        </Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));