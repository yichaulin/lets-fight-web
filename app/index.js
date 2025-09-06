import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import App from './components/app';
import store from './redux/store';
import zh from './i18n/zh'
import en from './i18n/en'

const i18n = () => {
    const lang = navigator.language || navigator.userLanguage
    if (lang.split("-")[0] === 'zh') {
        return zh
    }
    return en
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider messages={i18n().messages} locale={i18n().lang}>
        <App />
      </IntlProvider>
    </Provider>
  </React.StrictMode>
);