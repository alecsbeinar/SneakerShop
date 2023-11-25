import React from 'react';
import {makeStyles} from "@mui/styles";
import {
    Container,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

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
    productDescription: {
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
    if (!products || products.length === 0) return <p>Can not find any products, sorry</p>;
    return (
        <React.Fragment>
            <Container maxWidth="md" component="main">
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="left">Category</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Price</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((product) => {
                                    return (
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {product.id}
                                            </TableCell>
                                            <TableCell align="left">{product.category}</TableCell>

                                            <TableCell align="left">
                                                <Link
                                                    color="textPrimary"
                                                    href={'/product/' + product.slug}
                                                    className={classes.link}
                                                >
                                                    {product.name}
                                                </Link>
                                            </TableCell>

                                            <TableCell align="left">{product.price}</TableCell>

                                            <TableCell align="left">
                                                <Link
                                                    color="textPrimary"
                                                    href={'/admin/edit/' + product.id}
                                                    className={classes.link}
                                                >
                                                    <EditIcon></EditIcon>
                                                </Link>
                                                <Link
                                                    color="textPrimary"
                                                    href={'/admin/delete/' + product.id}
                                                    className={classes.link}
                                                >
                                                    <DeleteForeverIcon></DeleteForeverIcon>
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                                <TableRow>
                                    <TableCell colSpan={5} align="right">
                                        <Button
                                            href={'/admin/create'}
                                            variant="contained"
                                            color="primary"
                                        >
                                            New Product
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>
        </React.Fragment>
    );
};
export default Products;