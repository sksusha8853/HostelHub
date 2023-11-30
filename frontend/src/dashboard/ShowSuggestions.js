import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

import { connect, useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getMainActions } from '../app/actions/mainActions';


const ShowSuggestions = ({ getAllSuggestions, deleteSuggestion }) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.userDetails);

    useEffect(() => {
        console.log('user', user)
        if (!user) {
            navigate("/login");
        }
    }, [])

    useEffect(() => {
         getAllSuggestions(setData, navigate);
    }, []);

    const handleDeleteSuggestion = async(suggestionId) => {
        console.log('suggestionId', suggestionId)
        const suggestion = {
          suggestionId,
        }
        await deleteSuggestion(suggestion)
        await getAllSuggestions(setData, navigate);
    }

    return (
        <div style={{ marginTop: '5vh'}}>
            <h1 style={{textAlign: 'center', marginBottom: '5vh'}}>My Suggestions</h1>
            <Grid container spacing={2} sx={{ width: '90vw', margin: 'auto' }}>
                {data.map((item) => (
                    <Grid item xs={12} md={6} key={item._id}>
                        <Card
                            variant="outlined"
                            sx={{
                                width: '100%',
                                overflow: 'auto',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >

                            </Box>
                            <CardContent>
                                <Typography level="title-lg">{item.subject}</Typography>
                                <Typography level="body-sm">{item.description}</Typography>
                            </CardContent>
                            <CardActions buttonFlex="0 1 120px">
                                <IconButton variant="outlined" color="blue" sx={{ mr: 'auto', color: 'blue', cursor: 'default !important' }} >
                                    <FavoriteBorder sx={{ cursor: 'default !important' }} />
                                </IconButton>
                                {/*  add this feature to view the complete information about a complaint
                                <Button variant="outlined" color="neutral">
                                    View
                                </Button> */}
                                <Button variant="solid" color="primary" sx={{ cursor: 'arrow' }} onClick={() => handleDeleteSuggestion(item._id)}>
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );

}

const mapActionsToProps = (dispatch) => {
    return {
        ...getMainActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(ShowSuggestions);



