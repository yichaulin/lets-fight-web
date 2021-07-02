import React from "react";
import { Card, Row, Col } from 'antd';

const FighterProfile = ({ fighterName, imageUrl }) => {

    return (
        <Row>
            <Col span={5} />
            <Col span={14}>
                <Card
                    // style={{ width: 240 }}
                    title={fighterName}
                    cover={<img alt={fighterName} src={imageUrl} />}
                    headStyle={{textAlign: 'center'}}
                >
                </Card>
            </Col>
            <Col span={5} />
        </Row>
    )
}

export default FighterProfile