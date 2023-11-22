import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import SignUp from './components/Registration';
import SignIn from "./components/Login";
import Logout from "./components/Logout";
import Product from './components/SingleProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ThemeProvider} from "@mui/material"
import {theme} from "./styles/theme"
import Search from "./components/Search";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Fragment>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path={"/register"} element={<SignUp/>}/>
                    <Route path={"/login"} element={<SignIn/>}/>
                    <Route path={"/logout"} element={<Logout/>}/>
                    <Route path={"/product/:slug"} element={<Product/>}/>
                    <Route path="/search" element={<Search/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </Fragment>
);
