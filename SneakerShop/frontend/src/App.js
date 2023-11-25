import React, {Fragment, useState, useEffect} from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import {
//     Accordion,
//     AccordionDetails,
//     AccordionSummary,
//     Container,
//     Button,
//     Alert,
//     Box
// } from "@mui/material";
import Footer from "./components/Footer";
import Header from './components/Header';
import Products from './components/products/Products'
import ProductLoadingComponent from './components/products/ProductLoading'


export function App() {
    // const [isAlertVisible, setISAlertVisible] = useState(false)

    const ProductLoading = ProductLoadingComponent(Products)
    const [appState, setAppState] = useState({
        loading: false,
        products: null,
    });
    useEffect(() => {
        setAppState({loading: true});
        const apiUrl = 'http://127.0.0.1:8000/api/';
        fetch(apiUrl)
            .then((data) => data.json())
            .then((products) => {
                setAppState({loading: false, products: products});
            });
    }, [setAppState]);

    return (
        <Fragment>
            <CssBaseline/>
            <Header/>
            <div className={"App"}>
                <h1>Products</h1>
                <ProductLoading isLoading={appState.loading} products={appState.products}/>
            </div>
            {/*<Container maxWidth="lg">*/}
            {/*    <Accordion sx={{m: "20px 0"}}>*/}
            {/*        <AccordionSummary>dfgfdh</AccordionSummary>*/}
            {/*        <AccordionDetails>dfhdfhdfh</AccordionDetails>*/}
            {/*    </Accordion>*/}
            {/*    <Button onClick={() => setISAlertVisible(prev => !prev)} variant="contained">Hello world</Button>*/}
            {/*</Container>*/}

            {/*{isAlertVisible && <Alert sx={{position: "fixed", bottom: "20px", left: "20px", width: "calc(100% - 40px)"}}*/}
            {/*                          color={"error"}>Close this site</Alert>}*/}
            <Footer/>
        </Fragment>
    );
}