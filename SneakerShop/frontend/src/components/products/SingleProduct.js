import React, {useState, useEffect, Fragment} from 'react';
import axiosInstance from '../../Axios';
import {useParams} from 'react-router-dom';
//MaterialUI
import CssBaseline from '@mui/material/CssBaseline';
import {makeStyles} from "@mui/styles";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Header from "../Header";
import Footer from "../Footer";
import MyModal from "../UI/MyModal/MyModal";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export default function Product() {
    const {slug} = useParams();
    const classes = useStyles();

    const [data, setData] = useState({products: []});
    const [modal, setModal] = useState(false);

    useEffect(() => {
        axiosInstance.get(slug).then((res) => {
            setData({products: res.data});
            console.log(res.data);
        });
    }, [setData]);

    return (
        <Fragment>
            <Container component="main" maxWidth="md">
                <CssBaseline/>

                <button onClick={() => setModal(true)}>
                    Написать отзыв
                </button>

                <MyModal visible={modal} setVisible={setModal}>
                    <button onClick={() => setModal(false)}>
                        Отправить
                    </button>
                </MyModal>

                <div className={classes.paper}></div>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            {data.products.name}
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            {data.products.description}
                        </Typography>
                    </Container>
                </div>
            </Container>
        </Fragment>
    );
}