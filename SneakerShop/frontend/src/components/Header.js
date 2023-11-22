import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {AppBar, Box, Typography, Container, Link, Toolbar} from '@mui/material';
import Button from "@mui/material/Button";
import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    toolbarTitle: {
        flexGrow: 1,
    },
}))

function Header() {
    const classes = useStyles();
    let navigate = useNavigate();
    const [data, setData] = useState({search: ''});
    const goSearch = (e) => {
        navigate({
            pathname: '/search/',
            search: '?search=' + data.search,
        });
        window.location.reload();
    };

    return (
        <React.Fragment>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        <Link
                            component={NavLink}
                            to="/"
                            underline="none"
                            color="textPrimary"
                        >
                            SneakerShop
                        </Link>
                    </Typography>

                    <SearchBar
                        value={data.search}
                        onChange={(newValue) => setData({search: newValue})}
                        onRequestSearch={() => goSearch(data.search)}
                    />

                    <nav>
                        <Link
                            color="textPrimary"
                            href="#"
                            className={classes.link}
                            component={NavLink}
                            to="/register"
                        >
                            Register
                        </Link>
                    </nav>
                    <Button
                        href="#"
                        color="primary"
                        variant="outlined"
                        className={classes.link}
                        component={NavLink}
                        to="/login"
                    >
                        Login
                    </Button>
                    <Button
                        href="#"
                        color="primary"
                        variant="outlined"
                        className={classes.link}
                        component={NavLink}
                        to="/logout"
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;