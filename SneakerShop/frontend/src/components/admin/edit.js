import React, {useState, useEffect} from 'react';
import {makeStyles} from "@mui/styles";
import axiosInstance from '../../Axios';
import {
    Grid,
    Typography,
    Container,
    TextField,
    CssBaseline,
    Avatar,
    Button,
} from "@mui/material";
import {useNavigate, useParams} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Edit() {
    const navigate = useNavigate();
    const {id} = useParams();
    const initialFormData = Object.freeze({
        id: '',
        name: '',
        slug: '',
        description: '',
        price: '',
        quantity: '',
        category: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    useEffect(() => {
        axiosInstance.get('admin/edit/productdetail/' + id).then((res) => {
            updateFormData({
                ...formData,
                ['name']: res.data.name,
                ['description']: res.data.description,
                ['slug']: res.data.slug,
                ['price']: res.data.price,
                ['quantity']: res.data.quantity,
                ['category']: res.data.category,
            });
            console.log(res.data);
        });
    }, [updateFormData]);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance
            .put(`admin/edit/` + id + '/', {
                name: formData.name,
                slug: formData.slug,
                description: formData.description,
                price: formData.price,
                quantity: formData.quantity,
                category: formData.category,
            });

        navigate('/admin/');
        window.location.reload();
        // TODO: choosing category
        // TODO: catch exceptions
    };

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline/>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Edit Product
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Product Name"
                                name="name"
                                autoComplete="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="description"
                                label="Product description"
                                name="description"
                                autoComplete="description"
                                value={formData.description}
                                onChange={handleChange}
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="slug"
                                label="slug"
                                name="slug"
                                autoComplete="slug"
                                value={formData.slug}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="price"
                                label="price"
                                name="price"
                                autoComplete="price"
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="quantity"
                                label="quantity"
                                name="quantity"
                                autoComplete="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="category"
                                label="category"
                                name="category"
                                autoComplete="category"
                                value={formData.category}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Container style={{marginTop: "17.5px"}}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSubmit}
                        >
                            Update Product
                        </Button>
                    </Container>
                </form>
            </div>
        </Container>
    );
}