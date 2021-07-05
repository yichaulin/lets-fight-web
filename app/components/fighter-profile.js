import React, { useEffect, useState } from "react";
import { Card, Row, Col, Progress } from 'antd';
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

const FighterProfile = ({header, fighterName, hp, emitIsReady }) => {
    const [loading, setLoading] = useState(true)
    const [imageUrl, setImageUrl] = useState("")

    const onLoadedHandler = () => {
        setLoading(false)
        emitIsReady(true)
    }

    useEffect(async () => {
        setImageUrl("")
        setLoading(true)
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
                <h3 style={{textAlign: 'center'}}>{header}</h3>
                <Card
                    title={fighterName || "TBD"}
                    cover={
                        imageUrl && (<img
                            alt={fighterName}
                            src={imageUrl}
                            onLoad={onLoadedHandler}
                        />)
                    }
                    headStyle={{textAlign: 'center'}}
                    loading={loading}
                >
                </Card>
                <Progress
                    percent={hp}
                    strokeColor={getColorByHP(hp)}
                    format={p => p}
                />
            </Col>
            <Col span={5} />
        </Row>
    )
}

export default FighterProfile