import * as React from 'react';
import axiosInstance from '../../axios/login';
import {useNavigate} from 'react-router-dom';
import FbLogin from 'react-facebook-login';
import FacebookLogin from '../../axios/facebookLogin';


// MaterialUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {makeStyles} from "@mui/styles";
import {useState} from "react";

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignIn() {
    const navigate = useNavigate();
    const initialFormData = Object.freeze({
        email: '',
        password: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        // TODO: get client_id and client_secret from api
        axiosInstance
            .post(`auth/token/`, {
                grant_type: 'password',
                username: formData.email,
                password: formData.password,
                client_id: 'VAfL1wKZ3WVdfJzrzdmLaYGiqBanzsTVkG9NhaFn',
                client_secret:
                    'EiT080xhH4hY8rg9yHfFXqcDRmTLqjizkAa2YYvZAq3CRrbrTYf0XbYC6vWHRcHE3cROBGvA2b2DyQ2htzWKJRykbmk68uZWYnNws1dmPq2aKcwJI4Mq3uRZt2hPILLZ',
            })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access_token);
                localStorage.setItem('refresh_token', res.data.refresh_token);
                navigate('/');
                console.log(res);
                console.log(res.data);
            });
    };

    const responseFacebook = async (response) => {
        console.log(response);
        FacebookLogin(response.accessToken);
        navigate('/');
    };

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}></Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Sign In
                    </Button>

                    <Container style={{marginTop: "17.5px", paddingLeft: "0", paddingBottom: "10px"}}>
                        <FbLogin
                            appId="693303766092114"
                            fields="name,email,picture"
                            callback={responseFacebook}
                        />
                    </Container>

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default SignIn;