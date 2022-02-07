import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './components/App.less';
import { setDarkTheme } from './components/helper/changeLayoutAppearance';

setDarkTheme();

ReactDOM.render(
    <StrictMode>
        <ConfigProvider locale={ptBR}>
            <App />
        </ConfigProvider>
    </StrictMode>,
    document.getElementById('root'),
);
