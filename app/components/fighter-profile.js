import React, { useEffect, useState } from "react";
import { Row, Col, Progress } from 'antd';
import { AvatarGenerator } from 'random-avatar-generator';
import sleep from 'sleep-promise';

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
    const [imageUrl, setImageUrl] = useState("")

    const onLoadedHandler = () => {
        emitIsReady(true)
    }

    useEffect(async () => {
        setImageUrl("")
        emitIsReady(false)

        if (fighterName) {
            await sleep(1000)
            const imageUrl = generator.generateRandomAvatar(fighterName)
            setImageUrl(imageUrl)
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
                {imageUrl && (<img
                    alt={fighterName}
                    src={imageUrl}
                    onLoad={onLoadedHandler}
                />)}
            </Col>
            <Col span={5} />
        </Row>
    )
}

export default FighterProfile