import 'antd/dist/antd.css';
import React, {Fragment, useState} from 'react';
import { Divider, Row, Col } from 'antd'
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl'
import Combat from './components/combat';
import CombatSetup from './components/combat-setup'
import App from './components/app'
import zh from './i18n/zh'

ReactDOM.render(
    <IntlProvider messages={zh.messages} locale={zh.lang} defaultLocale="zh">
        <App />
    </IntlProvider>,
    document.getElementById('app')
);