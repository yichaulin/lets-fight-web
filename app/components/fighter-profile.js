import React, { useEffect, useState } from "react";
import { Card, Row, Col } from 'antd';
import { AvatarGenerator } from 'random-avatar-generator';
import sleep from 'sleep-promise';

const generator = new AvatarGenerator();

const FighterProfile = ({header, fighterName, setIsReady }) => {
    const [loading, setLoading] = useState(true)
    const [imageUrl, setImageUrl] = useState("")

    const onLoadedHandler = () => {
        setLoading(false)
        setIsReady(true)
    }

    useEffect(async () => {
        setImageUrl("")
        setLoading(true)
        setIsReady(false)

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
            </Col>
            <Col span={5} />
        </Row>
    )
}

export default FighterProfile