import * as React from 'react';
import {makeStyles} from '@mui/styles';
import { AppBar, Box, Typography, Container } from '@mui/material';

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
}))

function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar
                position="static"
                sx={{color: "white"}}
                elevation={0}
                className={classes.appBar}
            >
                <Container maxWidth="lg">
                    <Box sx={{p: "20px 0"}}>
                        <Typography variant="h6" noWrap>
                            SneakerShop
                        </Typography>
                    </Box>
                </Container>
            </AppBar>
        </React.Fragment>
    );
}
export default Header;