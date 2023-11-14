import React, {Fragment, useState} from "react";
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


class ConnectionExample extends React.Component {
    componentDidMount() {
        const apiUrl = 'http://127.0.0.1:8000/api/';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    render() {
        return <div>Example connection</div>;
    }
}


export function App() {
    // const [isAlertVisible, setISAlertVisible] = useState(false)
    return (
        <Fragment>
            <CssBaseline/>
            <Header/>
            <ConnectionExample/>
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