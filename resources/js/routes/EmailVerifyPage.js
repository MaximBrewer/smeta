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
import {default as LinkMUI} from '@material-ui/core/Link';
import {Link} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Copyright from "../components/Copyright";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh"
    },
    image: {
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "dark"
                ? theme.palette.grey[900]
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

export default function EmailVerifyPage() {
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
        console.log(auth.remember, event.target.name, event.target.checked)
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(auth);
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
          console.log(auth);
            axios
                .post(`/login`, {
                    email: auth.email.value,
                    password: auth.password.value,
                    remember: auth.remember.checked
                })
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
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
                
            </Grid>
        </Grid>
    );
}
