import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FacebookIcon from "@material-ui/icons/Facebook";
import {FcGoogle} from "react-icons/fc/index";
import {RiKakaoTalkFill} from "react-icons/ri/index";
import logo from '../images/logo.png';
import Appbar from './Appbar';
import {purple} from "@material-ui/core/colors";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Secret-hands
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.light,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    return (
        <div>
            <Appbar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar} alt="user_logo" src={logo} />
                    <Typography component="h1" variant="h5">
                        회원가입
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="ID"
                                    label="ID"
                                    name="ID"
                                    autoComplete="ID"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="Confirm password"
                                    label="Confirm password"
                                    type="Confirm password"
                                    id="Confirm password"
                                    autoComplete="Confirm password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={2}>
                                    </Grid>
                                    <Grid item xs>
                                        <FacebookIcon fontSize="large" color="primary"/>
                                    </Grid>
                                    <Grid item xs>
                                        <FcGoogle size={35} />
                                    </Grid>
                                    <Grid item xs>
                                        <RiKakaoTalkFill size={35} style={{fill: 'black'}}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                            style={{backgroundColor:purple[300],
                                color:"white"}}
                        >
                            회원가입
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="SignIn" variant="body2">
                                    이미 아이디가 있으신가요? 로그인하기
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
}