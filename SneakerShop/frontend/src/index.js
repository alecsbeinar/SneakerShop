import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from './components/auth/Registration';
import SignIn from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Product from './components/products/SingleProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ThemeProvider} from "@mui/material"
import {theme} from "./styles/theme"
import Search from "./components/products/Search";
import Admin from "./components/Admin";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Fragment>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path={"/register"} element={<SignUp/>}/>
                    <Route path={"/login"} element={<SignIn/>}/>
                    <Route path={"/logout"} element={<Logout/>}/>
                    <Route path={"/product/:slug"} element={<Product/>}/>
                    <Route path="/search" element={<Search/>}/>

                    <Route path="/admin" element={<Admin/>}/>

                </Routes>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    </Fragment>
);
