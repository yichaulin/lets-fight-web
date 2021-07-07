import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, message, Row, Col} from 'antd'
import { v4 as uuidv4 } from 'uuid';
import { InitFighter } from '../redux/actions/fighters-action'

const CombatSetup = ({ isFighting, combatSetupHandler, InitFighter }) => {
    const [fighters, setFighters] = useState([])

    const setupHandler = ({ fighterA, fighterB }) => {
        if (fighterA && fighterB && fighterA !== fighterB) {
            const newFighters = [fighterA, fighterB]
            const newRoundID = uuidv4()
            setFighters(newFighters)
            combatSetupHandler(newFighters, newRoundID)
            InitFighter(newFighters)
        } else if (!fighterA && !fighterB) {
            message.warning("沒有猶豫的選擇嗎？")
        } else if (!fighterA || !fighterB) {
            message.warning("你只填了一個選擇...")
        } else {
            message.warning("既然只有一個選擇又何必猶豫？")
        }
    }
    const fields = [{
        name: ['fighterA'],
        value: fighters[0]
    }, {
        name: ['fighterB'],
        value: fighters[1]
    }]

    return (
        <Form fields={fields} onFinish={setupHandler}>
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

export default connect(null, { InitFighter })(CombatSetup)