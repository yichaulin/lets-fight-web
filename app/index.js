import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Row, Col } from 'antd';
import RoundTimeLine from './components/round-time-line';
import 'antd/dist/antd.css';

const { Header, Content} = Layout;

const App = () => {
    return (
        <Layout>
            <Content>
                <Row>
                    <Col span={24}>
                        <h1>Header</h1>
                    </Col>
                    <Col span={8}>Fighter 1</Col>
                    <Col span={8}>
                        <RoundTimeLine />
                    </Col>
                    <Col span={8}>Fighter 2</Col>
                </Row>
            </Content>
        </Layout>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));