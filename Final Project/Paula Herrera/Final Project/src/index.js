import React from 'react';
import ReactDOM from 'react-dom';
//-------
import { BrowserRouter } from 'react-router-dom';
//-------
import './index.css';
import getRoutes from './routes/Routes';

ReactDOM.render(
    <BrowserRouter>
        {getRoutes()}
    </BrowserRouter>,
    document.getElementById('root')
);
