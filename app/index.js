import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl'
import App from './components/app'
import zh from './i18n/zh'

ReactDOM.render(
    <IntlProvider messages={zh.messages} locale={zh.lang} defaultLocale="zh">
        <App />
    </IntlProvider>,
    document.getElementById('app')
);