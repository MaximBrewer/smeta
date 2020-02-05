import axios from "axios";
import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import { Link, Redirect } from "react-router-dom";
import { default as LinkMUI } from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Copyright from "./Layouts/Copyright";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh"
    },
    image: {
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[500]
                : theme.palette.grey[50],
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

export default function LoginPage() {
    const classes = useStyles();

    const [auth, setAuthState] = useState({
        password: {
            value: null,
            errors: null
        },
        email: {
            value: null,
            errors: null
        },
        remember: {
            checked: false
        },
        errors: null
    });

    function handleChange(event) {
        setAuthState({
            password:
                event.target.name != "password"
                    ? {
                          value: auth.password.value,
                          errors: auth.password.errors
                      }
                    : {
                          value: event.target.value,
                          errors: !event.target.value
                              ? ["Field is required!"]
                              : null
                      },
            email:
                event.target.name != "email"
                    ? {
                          value: auth.email.value,
                          errors: auth.email.errors
                      }
                    : {
                          value: event.target.value,
                          errors: !event.target.value
                              ? ["Field is required!"]
                              : null
                      },
            remember: {
                checked:
                    event.target.name != "remember"
                        ? auth.remember.checked
                        : event.target.checked
            },
            errors: null
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setAuthState({
            password: {
                value: auth.password.value,
                errors: !auth.password.value
                    ? ["Field is required!"]
                    : auth.password.errors
            },
            email: {
                value: auth.email.value,
                errors: !auth.email.value
                    ? ["Field is required!"]
                    : auth.email.errors
            },
            remember: {
                checked: auth.remember.checked
            },
            errors: auth.errors
        });
        if (auth.password.value && auth.password.value) {
            axios
                .post(`/login`, {
                    email: auth.email.value,
                    password: auth.password.value,
                    remember: auth.remember.checked
                })
                .then(res => {
                    if (res.data && res.data.redirectTo)
                        location.href = res.data.redirectTo;
                })
                .catch(err => {
                    if (err.response && err.response.data && err.response.data.errors)
                        setAuthState({
                            password: {
                                value: auth.password.value,
                                errors: err.response.data.errors.password
                            },
                            email: {
                                value: auth.email.value,
                                errors: err.response.data.errors.email
                            },
                            remember: auth.remember,
                            errors: [err.response.data.message]
                        });
                });
        }
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            error={
                                !!auth.email.errors &&
                                !!auth.email.errors.length
                            }
                            helperText={
                                !!auth.email.errors &&
                                !!auth.email.errors.length
                                    ? auth.email.errors.join(", ")
                                    : ""
                            }
                            label="E-mail"
                            name="email"
                            type="text"
                            autoFocus
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            error={
                                !!auth.password.errors &&
                                !!auth.password.errors.length
                            }
                            helperText={
                                !!auth.password.errors &&
                                !!auth.password.errors.length
                                    ? auth.password.errors.join(", ")
                                    : ""
                            }
                            label="password"
                            name="password"
                            type="password"
                            autoFocus
                            onChange={handleChange}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="remember"
                                    value="Y"
                                    color="primary"
                                    defaultChecked={auth.remember.cheked}
                                    onChange={handleChange}
                                />
                            }
                            label="Remember me"
                        />
                        <Collapse in={!!auth.errors && !!auth.errors.length}>
                            <Alert severity="error">
                                {!!auth.errors && !!auth.errors.length
                                    ? auth.errors.join(", ")
                                    : ""}
                            </Alert>
                        </Collapse>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <LinkMUI
                                    component={Link}
                                    to="/password/reset"
                                    href="#"
                                    variant="body2"
                                >
                                    Forgot password?
                                </LinkMUI>
                            </Grid>
                            <Grid item>
                                <LinkMUI
                                    component={Link}
                                    to="/register"
                                    href="#"
                                    variant="body2"
                                >
                                    {"Don't have an account? Sign Up"}
                                </LinkMUI>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
