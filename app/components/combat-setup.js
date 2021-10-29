import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, message, Row, Col} from 'antd'
import { v4 as uuidv4 } from 'uuid';
import { useIntl, FormattedMessage } from 'react-intl';
import { InitFighter } from '../redux/actions/fighters-action'
import { SetIsFighting, SetRoundID, SetPlaySpeed } from '../redux/actions/combat-action';


const CombatSetup = ({ isFighting, playSpeed, InitFighter, SetRoundID, SetIsFighting, SetPlaySpeed }) => {
    const intl = useIntl()
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
                <Col span={2} />
                <Col span={20}>
                    <Form.Item
                        label={<FormattedMessage id="Option1" />}
                        name="fighterA"
                    >
                        <Input
                            placeholder={intl.formatMessage({id: 'Option1.Placeholder'})}
                            disabled={isFighting}
                        />
                    </Form.Item>
                </Col>
                <Col span={2} />
                <Col span={2} />
                <Col span={20}>
                    <Form.Item
                        label={<FormattedMessage id="Option2" />}
                        name="fighterB"
                    >
                        <Input placeholder={intl.formatMessage({id: 'Option2.Placeholder'})} disabled={isFighting} />
                    </Form.Item>
                </Col>
                <Col span={2} />
                <Col span={2} />
                <Col span={20}>
                    <Form.Item>
                        <Row justify='space-around'>
                            <Col>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={isFighting}
                                >
                                    {isFighting ? intl.formatMessage({id: 'OnFighting'}) : intl.formatMessage({id: 'Fight'})}
                                </Button>
                            </Col>
                            { isFighting && <Col>
                                <Button
                                    type="primary"
                                    onClick={()=>SetPlaySpeed(500)}
                                    loading={playSpeed < 2000}
                                    danger
                                >
                                    {playSpeed < 2000 ? intl.formatMessage({id: 'OnSpeedingUp'}) : intl.formatMessage({id: 'SpeedUp'})}
                                </Button>
                            </Col>}
                        </Row>
                    </Form.Item>
                </Col>
                <Col span={2} />
            </Row>
        </Form>
    )
}

const mapStateToProps = ({combatReducer}) => {
    return {
        isFighting: combatReducer.isFighting,
        playSpeed: combatReducer.playSpeed
    }
}

export default connect(mapStateToProps,
    { InitFighter, SetRoundID, SetIsFighting, SetPlaySpeed }
)(CombatSetup)