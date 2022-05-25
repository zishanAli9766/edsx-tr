import { Box, Button, Card, CardContent, CardHeader, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import CardActions from '@mui/material/CardActions';

function Papers() {
  return (
      <>
    <div>Papers</div>
      <h3>Paper</h3>
    <Grid container spacing={4} marginBottom={2}>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Paper elevation={9}>
          <Box p={5} textAlign="center">1</Box>
        </Paper>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Paper variant="outlined">
          <Box p={5} textAlign="center">2</Box>
        </Paper>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Paper variant='string'>
        <Box bgcolor="yellowgreen" p={5} textAlign="center">3</Box>
        </Paper>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Paper elevation={5}>
        <Box bgcolor="skyblue" p={5} textAlign="center">4</Box>
        </Paper>
      </Grid>
    </Grid> 

  
      </>
  )
}

export default Papers