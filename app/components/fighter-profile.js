import React from "react";
import { Card, Row, Col } from 'antd';

const FighterProfile = ({ fighter, isReady, onLoadedHander }) => {
    const fighterName = fighter.name
    const imageUrl = fighter.imageUrl

    return (
        <Row>
            <Col span={5} />
            <Col span={14}>
                <Card
                    title={fighterName}
                    cover={
                        <img
                            alt={fighterName}
                            src={imageUrl}
                            onLoad={onLoadedHander}
                        />
                    }
                    headStyle={{textAlign: 'center'}}
                    loading={!isReady}
                >
                </Card>
            </Col>
            <Col span={5} />
        </Row>
    )
}

export default FighterProfile