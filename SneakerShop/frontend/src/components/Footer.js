import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {Box, Typography, Container, Link, Grid} from '@mui/material';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid black`,
    },
}))

function Copyright() {
    return (
        <Typography variant={"body2"} color={"textSecondary"} align={"center"}>
            {'Copyright © '}
            <Link color={"inherit"} href={"https://mui.com/"}>
                SneakerShop
            </Link> {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: [
            'Cool stuff',
            'Random feature',
            'Team feature',
            'Developer stuff',
            'Another one',
        ],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];


function Footer() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth={"md"} component={"footer"} className={classes.footer}>
                <Grid container spacing={4} justify={"space-evenly"}>
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant={"h6"} color={"textPrimary"} gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href={"#"} variant={"subtitle1"} color={"textSecondary"}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Footer;