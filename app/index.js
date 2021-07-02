import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Combat from './components/combat';
import { AvatarGenerator } from 'random-avatar-generator';

const App = () => {
    const fighters = ['Saber', 'Archer']
    const generator = new AvatarGenerator();
    const imageUrls = [
        generator.generateRandomAvatar(fighters[0]),
        generator.generateRandomAvatar(fighters[1])
    ];

    return (
        <Combat fighters={fighters} imageUrls={imageUrls}/>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));