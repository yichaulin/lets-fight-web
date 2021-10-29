import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl'
import App from './components/app'
import zh from './i18n/zh'
import en from './i18n/en'
import { Provider } from 'react-redux'
import store from './redux/store'

const i18n = () => {
    const lang = navigator.language || navigator.userLanguage
    if (lang.split("-")[0] === 'zh') {
        return zh
    }
    return en
}

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider messages={i18n().messages} locale={i18n().lang}>
            <App />
        </IntlProvider>
    </Provider>,
    document.getElementById('app')
);