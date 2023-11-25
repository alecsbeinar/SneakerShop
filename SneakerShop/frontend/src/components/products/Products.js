import React from "react";
import {makeStyles} from "@mui/styles";
import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Container,
    Link
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    CardMedia: {
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
    productTitle: {
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


const Products = (props) => {
    const {products} = props;
    const classes = useStyles();
    if (!products || products.length === 0) return <p>Can not find any products...</p>;
    return (
        <React.Fragment>
            <Container maxWidth={"md"} component={"main"}>
                <Grid container spacing={5} alignItems={"flex-end"}>
                    {products.map((product) => {
                        return (
                            <Grid item key={product.id} xs={12} md={4}>
                                <Card className={classes.card}>
                                    <Link
                                        color="textPrimary"
                                        href={'product/' + product.slug}
                                        className={classes.link}
                                    >
                                        <CardMedia
                                            className={classes.cardMedia}
                                            style={{height: 0, paddingTop: '56.25%'}}
                                            image={product.image}
                                            title={"Image title"}
                                        />
                                    </Link>
                                    <CardContent className={classes.cardContent}>
                                        <Typography
                                            gutterBottom
                                            variant={"h6"}
                                            component={"h2"}
                                            className={"classes.productTitle"}
                                        >
                                            {product.name.substr(0, 50)}
                                        </Typography>
                                        <div className={classes.productText}>
                                            <Typography
                                                component={"p"}
                                                color={"textPrimary"}
                                            ></Typography>
                                            <Typography variant={"p"} color={"textSecondary"}>
                                                {product.description.substr(0, 60)}...
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Products;
