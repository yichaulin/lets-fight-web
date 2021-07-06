import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { v4 as uuidv4 } from 'uuid';

const CombatSetup = ({ isFighting, combatSetupHandler }) => {
    const [fighters, setFighters] = useState([])

    const setupHandler = ({ fighterA, fighterB }) => {
        const newFighters = [fighterA, fighterB]
        const newRoundID = uuidv4()
        setFighters(newFighters)
        combatSetupHandler(newFighters, newRoundID)
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
            <Form.Item label="選擇 1" name="fighterA">
                <Input disabled={isFighting} />
            </Form.Item>
            <Form.Item label="選擇 2" name="fighterB">
                <Input disabled={isFighting} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isFighting}>
                    決鬥！！！
                </Button>
            </Form.Item>
        </Form>
    )
}

export default CombatSetup