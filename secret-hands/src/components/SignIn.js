import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import {FcGoogle} from "react-icons/fc";
import {RiKakaoTalkFill} from "react-icons/ri";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Appbar from "./Appbar";
import App from "../App";


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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {/*<LockOutlinedIcon />*/}
                </Avatar>
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="ID"
                        label="ID"
                        name="ID"
                        autoComplete="ID"
                        autoFocus
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
                    />
                    <div style={{ padding: 10 }}>
                        <Grid container spacing={5}>
                        </Grid>
                    </div>
                    <Grid container>
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

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                    >
                        로그인
                    </Button>

                    <Grid container>
                        <Grid item>
                            <Link href="#" variant="body2">
                            아이디/비밀번호 찾기
                            </Link>
                        </Grid>
                        <Grid item xs={6}></Grid>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                {" 회원가입"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}