import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { Row, Col, Progress, Typography } from 'antd';
import { AvatarGenerator } from 'random-avatar-generator';
import sleep from 'sleep-promise';
import RIPImage from '../img/rip.jpeg';
import { SetFighterIsReady } from '../redux/actions/fighters-action';

const { Text } = Typography
const generator = new AvatarGenerator();
const getColorByHP = (hp) => {
    if (hp <= 25) {
        return '#f5222d'
    } else if (hp <= 60) {
        return '#ffa940'
    } else {
        return '#52c41a'
    }
}

const FighterProfile = ({fighterName, hp, SetFighterIsReady}) => {
    const [avatarImgUrl, setAvatarImgUrl] = useState("")

    const isDead = () => {
        return hp <= 0
    }

    useEffect(() => {
        setAvatarImgUrl("")

        if (fighterName) {
            (async () => {
                await sleep(1000)
            })()
            const imgUrl = generator.generateRandomAvatar(fighterName)
            setAvatarImgUrl(imgUrl)
        }
    }, [fighterName])

    return (
        <Row>
            <Col span={5} />
            <Col span={14}>
                {fighterName && (
                    <div style={{textAlign: 'center'}}>
                        <Text><div>{fighterName}</div></Text>
                        <Text>
                            <span style={{color: getColorByHP(hp)}}>{hp}</span>
                            <span>/100</span>
                        </Text> 

                    </div>
                )}
                {fighterName && (<Progress
                    percent={hp}
                    strokeColor={getColorByHP(hp)}
                    format={p => p}
                    showInfo={false}
                />)}
                {avatarImgUrl && (
                    <img alt={fighterName}
                        src={avatarImgUrl}
                        onLoad={() => SetFighterIsReady(fighterName)}
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

export default connect(null, { SetFighterIsReady })(FighterProfile)