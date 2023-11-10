import React, { useEffect } from "react";
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
import { getMainActions } from "../app/actions/mainActions";
import { connect, useSelector } from "react-redux";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const defaultTheme = createTheme();

const Complaint = ({ postComplaint }) => {
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
        const complaintDetails = {
            email: data.get("email"),
            subject: data.get("subject"),
            description: data.get("description"),
        };
        postComplaint(complaintDetails, navigate);
    }

    return (
        <>
            <div><Navbar /></div>
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
                            Complaint
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 3 }}
                        >

                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        value={user.email}
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="subject"
                                        label="Subject"
                                        id="subject"
                                        autoComplete="subject"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        multiline
                                        rows={4}
                                        fullWidth
                                        id="description"
                                        label="Description"
                                        name="description"
                                        autoComplete="description"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Send
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            <div><Footer /></div>
        </>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getMainActions(dispatch),
    };
};
export default connect(null, mapActionsToProps)(Complaint);
