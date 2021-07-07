import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl'
import App from './components/app'
import zh from './i18n/zh'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider messages={zh.messages} locale={zh.lang} defaultLocale="zh">
            <App />
        </IntlProvider>
    </Provider>,
    document.getElementById('app')
);