import React, {useState, useEffect} from 'react';
import axiosInstance from '../../Axios';

import {makeStyles} from "@mui/styles";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Container,
    Link
} from '@mui/material';
import Header from "../Header";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
    },
    productName: {
        fontSize: '16px',
        textAlign: 'left',
    },
    productText: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'baseline',
        fontSize: '12px',
        textAlign: 'left',
        marginBottom: theme.spacing(2),
    },
}));

const Search = () => {
    const classes = useStyles();
    const search = 'search';
    const [appState, setAppState] = useState({
        search: '',
        products: [],
    });

    useEffect(() => {
        axiosInstance.get(search + '/' + window.location.search).then((res) => {
            const allProducts = res.data;
            setAppState({products: allProducts});
            console.log(res.data);
        });
    }, [setAppState]);

    return (
        <React.Fragment>
            <Header/>

            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {appState.products.map((product) => {
                        return (
                            // Enterprise card is full width at sm breakpoint
                            <Grid item key={product.id} xs={12} md={4}>
                                <Card className={classes.card}>
                                    <Link
                                        color="textPrimary"
                                        href={product.slug}
                                        className={classes.link}
                                    >
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Image title"
                                        />
                                    </Link>
                                    <CardContent className={classes.cardContent}>
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="h2"
                                            className={classes.productName}
                                        >
                                            {product.name.substr(0, 50)}...
                                        </Typography>
                                        <div className={classes.productText}>
                                            <Typography color="textSecondary">
                                                {product.description.substr(0, 40)}...
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>

            <Footer/>
        </React.Fragment>
    );
};
export default Search;