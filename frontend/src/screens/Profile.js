import React, {useEffect} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { connect, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const defaultTheme = createTheme();

const Profile = ({ }) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.userDetails);
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // const userDetails = {
        //     name: data.get("name"),
        //     email: data.get("email"),
        //     oldassword: data.get("password"),
        //     gender: data.get("gender"),
        //     address: data.get("address"),
        //     contactNumber: data.get("contactNumber"),
        //     hostel: data.get("hostel"),
        //     flatNumber: data.get("flatNumber"),
        //     roomNumber: data.get("roomNumber"),
        // };
        // registerStudent(userDetails, navigate);
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 15,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
                    <Typography component="h1" variant="h5">
                        Profile
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
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    value={user.name}
                                    name="name"
                                    autoComplete="name"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    value={user.email}
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    fullWidth
                                    name="gender"
                                    label="Gender"
                                    value={user.gender}
                                    id="gender"
                                    autoComplete="gender"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    fullWidth
                                    name="oldPassword"
                                    label="Old Password"
                                    type="password"
                                    id="oldPassword"
                                    autoComplete="old-password"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    fullWidth
                                    name="newPassword"
                                    label="New Password"
                                    type="password"
                                    id="newPassword"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    fullWidth
                                    name="confirmNewPassword"
                                    label="Confirm New Password"
                                    type="password"
                                    id="confirmNewPassword"
                                    autoComplete="confirm-new-password"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    fullWidth
                                    name="address"
                                    label="Address"
                                    value={user.address}
                                    id="address"
                                    autoComplete="address"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    fullWidth
                                    name="contactNumber"
                                    label="Contact Number"
                                    value={user.contactNumber}
                                    id="contactNumber"
                                    autoComplete="contactNumber"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update Changes
                        </Button>
                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Link fullWidth onClick={() => navigate('/')}>Back to Home</Link>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
    };
};

export default connect(null, mapActionsToProps)(Profile);