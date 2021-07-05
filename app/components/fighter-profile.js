import React, { useEffect, useState } from "react";
import { Row, Col, Progress } from 'antd';
import { AvatarGenerator } from 'random-avatar-generator';
import sleep from 'sleep-promise';
import RIPImage from '../img/rip.jpeg';

const generator = new AvatarGenerator();
const getColorByHP = (hp) => {
    if (hp <= 25) {
        return '#f5222d'
    } else if (hp <= 60) {
        return '#fadb14'
    } else {
        return '#52c41a'
    }
}

const FighterProfile = ({fighterName, hp, emitIsReady}) => {
    const [avatarImgUrl, setAvatarImgUrl] = useState("")

    const isDead = () => {
        return hp <= 0
    }

    useEffect(async () => {
        setAvatarImgUrl("")
        emitIsReady(false)

        if (fighterName) {
            await sleep(1000)
            const imgUrl = generator.generateRandomAvatar(fighterName)
            setAvatarImgUrl(imgUrl)
        }
    }, [fighterName])

    return (
        <Row>
            <Col span={5} />
            <Col span={14}>
                <h3 style={{textAlign: 'center'}}>{fighterName}</h3>
                {fighterName && (<Progress
                    percent={hp}
                    strokeColor={getColorByHP(hp)}
                    format={p => p}
                    strokeWidth={15}
                />)}
                {avatarImgUrl && (
                    <img alt={fighterName}
                        src={avatarImgUrl}
                        onLoad={() => emitIsReady(true)}
                        style={{width: '100%', display: isDead() ? 'none' : 'block'}} />
                )}
                <img style={{width: '100%', display: isDead() ? 'block' : 'none'}}
                    src={RIPImage} 
                />
            </Col>
            <Col span={5} />
        </Row>
    )
}

export default FighterProfile