import React from "react";
import { AvatarGenerator } from 'random-avatar-generator';
import { Card, Row, Col } from 'antd';

const FighterProfile = ({ fighterName }) => {
    const generator = new AvatarGenerator();
    const imageUrl = generator.generateRandomAvatar();

    return (
        <Row>
            <Col span={5} />
            <Col span={14}>
                <Card
                    // style={{ width: 240 }}
                    title={fighterName}
                    cover={<img alt={fighterName} src={imageUrl} />}
                    headStyle={{'text-align': 'center'}}
                >
                </Card>
            </Col>
            <Col span={5} />
        </Row>
    )
}

export default FighterProfile