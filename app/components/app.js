import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Divider, Col, Row, Typography } from 'antd'
import Combat from './combat';
import CombatSetup from './combat-setup'
import CombatResult from './combat-result'

const { Title } = Typography;

const App = ({fighterNames}) => {
    return (
        <Fragment>
            <Title><div style={{textAlign: 'center'}}>決策工具</div></Title>
            <Row justify="center">
                <Col xs={{span: 20}} sm={{span: 20}} md={{span: 8}}>
                    <CombatSetup />
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={{span: 20}} sm={{span: 20}} md={{span: 8}}>
                    <CombatResult />
                </Col>
            </Row>
            { fighterNames[0] && fighterNames[1] && (
                <Divider>
                    <h2>決鬥結果</h2>
                </Divider>
            )}
            <Combat />
        </Fragment>
    );
}

const mapStateToProps = ({fightersReducer}) => {
    return {
        fighterNames: fightersReducer.fighterNames
    }
}
export default connect(mapStateToProps, null)(App)