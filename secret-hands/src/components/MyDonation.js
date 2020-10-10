import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import logo from "../image/user_logo.png";

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

    },
    paper1: {
        backgroundColor: theme.palette.background.default,
        marginTop: theme.spacing(8),
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

export default function MyDonation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                        <Tab label="" disabled />
                        <Tab label="후원목록" {...a11yProps(1)}
                             style={{color:"black"}}/>
                        <Tab label="" disabled />
                    </Tabs>
                </AppBar>
                <Grid container spacing={3}>
                    <Grid item xs></Grid>
                    <Grid item xs>
                        <Paper className={classes.paper1} elevation={0} text>
                            총 후원금액 10,000 원
                        </Paper>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper2}>
                        <img src={logo} width={40}/>
                        <p>2020년9월 5일 희망 보호소 10,000원 후원</p>
                    </Paper>
                    <Paper className={classes.paper2}>
                        <img src={logo} width={40}/>
                        <p>2020년9월 5일 희망 보호소 10,000원 후원</p>
                    </Paper>
                    <Paper className={classes.paper2}>
                        <img src={logo} width={40}/>
                        <p>2020년9월 5일 희망 보호소 10,000원 후원</p>
                    </Paper>
                </Grid>

            </Container>
        </React.Fragment>
    );
}