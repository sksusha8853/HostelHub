import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { getAuthActions } from "../app/actions/authActions";
import { connect } from "react-redux";

const defaultTheme = createTheme();

const SignupStudent = ({ registerStudent }) => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userDetails = {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
            gender: data.get("gender"),
            address: data.get("address"),
            contactNumber: data.get("contactNumber"),
            hostel: data.get("hostel"),
            flatNumber: data.get("flatNumber"),
            roomNumber: data.get("roomNumber"),
        };
        registerStudent(userDetails, navigate);
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >

                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="gender"
                                    label="Gender"
                                    id="gender"
                                    autoComplete="gender"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="address"
                                    label="Address"
                                    id="address"
                                    autoComplete="address"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="contactNumber"
                                    label="Contact Number"
                                    id="contactNumber"
                                    autoComplete="contactNumber"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="hostel"
                                    label="Hostel"
                                    id="hostel"
                                    autoComplete="hostel"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="flatNumber"
                                    label="Flat Number"
                                    id="flatNumber"
                                    autoComplete="flatNumber"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="roomNumber"
                                    label="Room Number"
                                    id="roomNumber"
                                    autoComplete="roomNumber"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already a user? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getAuthActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(SignupStudent);