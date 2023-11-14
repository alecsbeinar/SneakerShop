import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ThemeProvider} from "@mui/material"
import {theme} from "./styles/theme"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Fragment>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </Fragment>
);
