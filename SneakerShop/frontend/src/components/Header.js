import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {
    AppBar,
    Typography,
    Link,
    Toolbar,
    CssBaseline,
    Button,
} from '@mui/material';
import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    link: {
        my: 1,
        mx: 1.5,
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
            <CssBaseline/>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar sx={{flexWrap: 'wrap'}} className={classes.toolbar}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{flexGrow: 1}}
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
                            variant="button"
                            color="text.primary"
                            href="#"
                            className={classes.link}
                            sx={{ my: 1, mx: 1.5 }}
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
                        sx={{ my: 1, mx: 1.5 }}
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
                        sx={{ my: 1, mx: 1.5 }}
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