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
import { default as LinkMUI } from "@material-ui/core/Link";
import { Link } from "react-router-dom";
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

export default function RegisterPage() {
    const classes = useStyles();

    const [register, setRegisterState] = useState({
        name: {
            value: null,
            errors: null
        },
        last_name: {
            value: null,
            errors: null
        },
        email: {
            value: null,
            errors: null
        },
        password_confirmation: {
            value: null,
            errors: null
        },
        password: {
            value: null,
            errors: null
        },
        errors: null
    });

    function handleChange(event) {
        setRegisterState({
            name:
                event.target.name != "name"
                    ? {
                          value: register.name.value,
                          errors: register.name.errors
                      }
                    : {
                          value: event.target.value,
                          errors: !event.target.value
                              ? ["Field is required!"]
                              : null
                      },
            last_name:
                event.target.name != "last_name"
                    ? {
                          value: register.last_name.value,
                          errors: register.last_name.errors
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
                          value: register.email.value,
                          errors: register.email.errors
                      }
                    : {
                          value: event.target.value,
                          errors: !event.target.value
                              ? ["Field is required!"]
                              : null
                      },
            password:
                event.target.name != "password"
                    ? {
                          value: register.password.value,
                          errors: register.password.errors
                      }
                    : {
                          value: event.target.value,
                          errors: !event.target.value
                              ? ["Field is required!"]
                              : null
                      },
            password_confirmation:
                event.target.name != "password_confirmation"
                    ? {
                          value: register.password_confirmation.value,
                          errors: register.password_confirmation.errors
                      }
                    : {
                          value: event.target.value,
                          errors: !event.target.value
                              ? ["Field is required!"]
                              : null
                      },
            errors: null
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setRegisterState({
            name: {
                value: register.name.value,
                errors: !register.name.value
                    ? ["Field is required!"]
                    : register.name.errors
            },
            last_name: {
                value: register.last_name.value,
                errors: !register.last_name.value
                    ? ["Field is required!"]
                    : register.last_name.errors
            },
            email: {
                value: register.email.value,
                errors: !register.email.value
                    ? ["Field is required!"]
                    : register.email.errors
            },
            password: {
                value: register.password.value,
                errors: !register.password.value
                    ? ["Field is required!"]
                    : register.password.errors
            },
            password_confirmation: {
                value: register.password_confirmation.value,
                errors: !register.password_confirmation.value
                    ? ["Field is required!"]
                    : register.password_confirmation.errors
            },
            errors: register.errors
        });
        if (
            register.name.value &&
            register.email.value &&
            register.password.value &&
            register.password_confirmation.value
        ) {
            console.log(register);
            axios
                .post(`/register`, {
                    name: register.name.value,
                    last_name: register.last_name.value,
                    email: register.email.value,
                    password: register.password.value,
                    password_confirmation: register.password_confirmation.value
                })
                .then(res => {
                    if (res.data && res.data.redirectTo)
                        location.href = res.data.redirectTo;
                })
                .catch(err => {
                    if (err.response && err.response.data && err.response.data.errors)
                        setRegisterState({
                            name: {
                                value: register.name.value,
                                errors: err.response.data.errors.name
                            },
                            last_name: {
                                value: register.last_name.value,
                                errors: err.response.data.errors.last_name
                            },
                            email: {
                                value: register.email.value,
                                errors: err.response.data.errors.email
                            },
                            password: {
                                value: register.password.value,
                                errors: err.response.data.errors.password
                            },
                            password_confirmation: {
                                value: register.password_confirmation.value,
                                errors:
                                    err.response.data.errors
                                        .password_confirmation
                            },
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
                        Sign up
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    error={
                                        !!register.name.errors &&
                                        !!register.name.errors.length
                                    }
                                    helperText={
                                        !!register.name.errors &&
                                        !!register.name.errors.length
                                            ? register.name.errors.join(", ")
                                            : ""
                                    }
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    error={
                                        !!register.last_name.errors &&
                                        !!register.last_name.errors.length
                                    }
                                    helperText={
                                        !!register.last_name.errors &&
                                        !!register.last_name.errors.length
                                            ? register.last_name.errors.join(
                                                  ", "
                                              )
                                            : ""
                                    }
                                    label="Last Name"
                                    name="last_name"
                                    autoComplete="lname"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    error={
                                        !!register.email.errors &&
                                        !!register.email.errors.length
                                    }
                                    helperText={
                                        !!register.email.errors &&
                                        !!register.email.errors.length
                                            ? register.email.errors.join(", ")
                                            : ""
                                    }
                                    autoComplete="email"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    error={
                                        !!register.password.errors &&
                                        !!register.password.errors.length
                                    }
                                    helperText={
                                        !!register.password.errors &&
                                        !!register.password.errors.length
                                            ? register.password.errors.join(
                                                  ", "
                                              )
                                            : ""
                                    }
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    error={
                                        !!register.password_confirmation
                                            .errors &&
                                        !!register.password_confirmation.errors
                                            .length
                                    }
                                    helperText={
                                        !!register.password_confirmation
                                            .errors &&
                                        !!register.password_confirmation.errors
                                            .length
                                            ? register.password_confirmation.errors.join(
                                                  ", "
                                              )
                                            : ""
                                    }
                                    name="password_confirmation"
                                    label="Confirm password"
                                    type="password"
                                    id="passwordConfirm"
                                    autoComplete="new-password"
                                    onChange={handleChange}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="allowExtraEmails"
                                            color="primary"
                                        />
                                    }
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid> */}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <LinkMUI
                                    component={Link}
                                    to="/login"
                                    href="javascript:void(0)"
                                    variant="body2"
                                >
                                    Already have an account? Sign in
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
