import React from 'react'
import { Form, Input, Button } from 'antd'

const CombatSetup = ({ fighters, fightersSetter }) => {
    const setupHandler = ({fighterA, fighterB}) => {
        const newFighters = [fighterA, fighterB]
        fightersSetter(newFighters)
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
            <Form.Item label="Fighter A" name="fighterA">
                <Input />
            </Form.Item>
            <Form.Item label="Fighter B" name="fighterB">
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Fight !!!!
                </Button>
            </Form.Item>
        </Form>
    )
}

export default CombatSetup