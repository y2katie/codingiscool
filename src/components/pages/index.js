

import React, {Component} from "react";
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';


import Grid from '@mui/material/Unstable_Grid2';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default class Home extends Component {
    render(){
        return (
     <Grid container spacing={2}>
                <Grid xs={6} md={6}>
                    <Typography mt={20} ml={20} variant="h2" gutterBottom>
        Things & Thoughts
     
                        <TextField ml={20} mt={15} label="Outlined secondary" color="secondary" focused />
                        <Button ml={20} variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                        </Typography> 
                </Grid>
                <Grid xs={6} md={6}>
                    <Item>xs=6 md=6</Item>
                </Grid>
                </Grid>           
        )
    }
}