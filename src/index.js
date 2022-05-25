import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import App from './Component/Pages/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import TaskProvider from './Contexts/TaskProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from './Media/Stylers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskProvider>
<ThemeProvider theme={theme}>
    <BrowserRouter>
    <App />
    {/* <App /> */}
    </BrowserRouter>
    </ThemeProvider>
    </TaskProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
