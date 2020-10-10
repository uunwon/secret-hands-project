import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "./Card"
import logo from "../image/user_logo.png";
import {purple} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        backgroundColor: theme.palette.background.paper,
        textAlign: 'center',
        fontSize: 18,

    },
    paper2: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.light,
    },

}));

export default function MySupport() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" >
                <AppBar className={classes.paper} position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        variant="fullWidth"
                        aria-label="full width tabs"
                    >
                        <Tab
                            style={{color:"black"}}
                            label="예약한 봉사" {...a11yProps(0)} />
                        <Tab
                            label="봉사내역" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Grid container spacing={10}>
                            <Grid item xs={4}>
                                <Card/>
                            </Grid>
                            <Grid item xs={4}>
                                <Card/>
                            </Grid>
                            <Grid item xs={4}>
                                <Card/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={10}>
                            <Grid item xs={4}>
                                <Card/>
                            </Grid>
                            <Grid item xs={4}>
                                <Card/>
                            </Grid>
                            <Grid item xs={4}>
                                <Card/>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Grid container spacing={10}>
                            <Grid item xs={4}>
                                <Card/>
                            </Grid>
                            <Grid item xs={4}>
                                <Card/>
                            </Grid>
                            <Grid item xs={4}>
                                <Card/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={10}>
                            <Grid item xs={4}>
                                <Card/>
                            </Grid>
                            <Grid item xs={4}>
                                <Card/>
                            </Grid>
                            <Grid item xs={4}>
                                <Card/>
                            </Grid>
                        </Grid>
                    </TabPanel>
                </SwipeableViews>
            </Container>
        </React.Fragment>
    );
}