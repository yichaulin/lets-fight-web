import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, message, Row, Col} from 'antd'
import { v4 as uuidv4 } from 'uuid';
import { InitFighter } from '../redux/actions/fighters-action'
import { SetIsFighting, SetRoundID } from '../redux/actions/combat-action';

const CombatSetup = ({ isFighting, InitFighter, SetRoundID, SetIsFighting }) => {

    const setupHandler = ({ fighterA, fighterB }) => {
        if (fighterA && fighterB && fighterA !== fighterB) {
            InitFighter([fighterA, fighterB])
            SetIsFighting(true)
            SetRoundID(uuidv4())
        } else if (!fighterA && !fighterB) {
            message.warning("沒有猶豫的選擇嗎？")
        } else if (!fighterA || !fighterB) {
            message.warning("你只填了一個選擇...")
        } else {
            message.warning("既然只有一個選擇又何必猶豫？")
        }
    }

    return (
        <Form onFinish={setupHandler}>
            <Row justify='center'>
                <Col span={20}>
                    <Form.Item
                        label="選擇 1"
                        name="fighterA"
                    >
                        <Input
                            placeholder='Ex: 麥當勞'
                            disabled={isFighting}
                        />
                    </Form.Item>
                </Col>
                <Col span={20}>
                    <Form.Item
                        label="選擇 2"
                        name="fighterB"
                    >
                        <Input placeholder='Ex: 肯德基' disabled={isFighting} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isFighting}
                            block
                        >
                            決鬥！！！
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}

const mapStateToProps = ({combatReducer}) => {
    return {
        isFighting: combatReducer.isFighting
    }
}

export default connect(mapStateToProps,
    { InitFighter, SetRoundID, SetIsFighting }
)(CombatSetup)