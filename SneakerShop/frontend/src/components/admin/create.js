import React, {useState} from 'react';
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
import {useNavigate} from 'react-router-dom';

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
        marginTop: theme.spacing(8),
        // margin: theme.spacing(3, 0, 2),
    },
}));

export default function Create() {
    function slugify(string) {
        const a =
            'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
        const b =
            'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
        const p = new RegExp(a.split('').join('|'), 'g');

        return string
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
            .replace(/&/g, '-and-') // Replace & with 'and'
            .replace(/[^\w\-]+/g, '') // Remove all non-word characters
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    }

    const navigate = useNavigate();
    const initialFormData = Object.freeze({
        name: '',
        slug: '',
        description: '',
        price: '',
        quantity: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        if ([e.target.name] == 'name') {
            updateFormData({
                ...formData,
                // Trimming any whitespace
                [e.target.name]: e.target.value.trim(),
                ['slug']: slugify(e.target.value.trim()),
            });
        } else {
            updateFormData({
                ...formData,
                // Trimming any whitespace
                [e.target.name]: e.target.value.trim(),
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance
            .post(`admin/create/`, {
                name: formData.name,
                slug: formData.slug,
                description: formData.description,
                price: formData.price,
                quantity: formData.quantity,
                category: 1,
            })
            .then((res) => {
                navigate('/admin/');
            });
        // TODO: choosing category
        // TODO: catch exceptions
    };

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}></Avatar>
                <Typography component="h1" variant="h5">
                    Create New Product
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
                            Create Product
                        </Button>
                    </Container>
                </form>
            </div>
        </Container>
    );
}