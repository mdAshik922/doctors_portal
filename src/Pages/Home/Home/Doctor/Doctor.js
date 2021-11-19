import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {

    const {name, image} = doctor;
    return (
        <Grid item xs={12} md={8}  >
        <img style={{width: 200, height: 300}} src={`data:image/png;base64,${image}`} alt="" />
      <h2>{name}</h2>
        
        </Grid>
    );
};

export default Doctor;