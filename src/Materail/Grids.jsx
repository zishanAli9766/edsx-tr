import React from 'react'
import Grid from '@mui/material/Grid';
import { Box, Button, Divider, Paper, Typography } from '@mui/material';

function Grids() {
        
    return (
        <>
            <div>Grids</div>
            <h1>Grid</h1>
            <Grid container spacing={2} >
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor='aqua' p={5} textAlign='center'>1</Box>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor='yellowgreen' p={5} textAlign='center'>2</Box>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor='chocolate' p={5} textAlign='center'>3</Box>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor='skyblue' p={5} textAlign='center'>4</Box>
                </Grid>
            </Grid>

            <Divider />

            <Grid container spacing={3} marginTop={2}>
                <Grid item lg={3} md={6} sm={6}>
                    <Paper>
                        <Box p={3}>

                            <Typography variant='h3'>Read This</Typography>
                            <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis quo maiores minima ea quasi impedit excepturi, amet, facere facilis at dolor. Velit, neque iste.</Typography>
                            <Button variant='none'>More</Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item lg={3} md={6} sm={6}>
                    <Paper>
                        <Box p={3}>

                            <Typography variant='h3'>Read This</Typography>
                            <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis quo maiores minima ea quasi impedit excepturi, amet, facere facilis at dolor. Velit, neque iste.</Typography>
                            <Button variant='none'>More</Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item lg={3} md={6} sm={6}>
                    <Paper>
                        <Box p={3}>

                            <Typography variant='h3'>Read This</Typography>
                            <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis quo maiores minima ea quasi impedit excepturi, amet, facere facilis at dolor. Velit, neque iste.</Typography>
                            <Button variant='none'>More</Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item lg={3} md={6} sm={6}>
                    <Paper>
                        <Box p={3}>

                            <Typography variant='h3'>Read This</Typography>
                            <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis quo maiores minima ea quasi impedit excepturi, amet, facere facilis at dolor. Velit, neque iste.</Typography>
                            <Button variant='none'>More</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction='row-reverse' marginTop={2}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor='brown' p={5} textAlign='center'>1</Box>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor='darkcyan' p={5} textAlign='center'>2</Box>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor='cadetblue' p={5} textAlign='center'>3</Box>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor='blue' p={5} textAlign='center'>4</Box>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction='row' justifyContent='center' marginTop={2}>
                <Grid item lg={4} md={3} sm={6} xs={12}>
                    <Box bgcolor='darkmagenta' p={5} textAlign='center'>1</Box>
                </Grid>
                <Grid item lg={4} md={3} sm={6} xs={12}>
                    <Box bgcolor='darkgreen' p={5} textAlign='center'>2</Box>
                </Grid>
                <Grid item lg={4} md={3} sm={6} xs={12}>
                    <Box bgcolor='khaki' p={5} textAlign='center' >3</Box>
                </Grid>
            </Grid>
                    <h2>Nested Grid</h2>
            <Grid container spacing={3} marginTop={3}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor='yellow' p={5} textAlign='center'>
                        <Grid container>
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <Box bgcolor='red' p={5} textAlign='center'>1-1</Box>
                            </Grid>
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <Box bgcolor='blue' p={5} textAlign='center'>1-2</Box>
                            </Grid>
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <Box bgcolor='green' p={5} textAlign='center'>1-3</Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor='green' p={5} textAlign='center'> <Grid container>
                            <Grid item xs={12}>
                                <Box bgcolor='yellowgreen' p={5} textAlign='center'>2-1</Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box bgcolor='skyblue' p={5} textAlign='center'>2-2</Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box bgcolor='red' p={5} textAlign='center'>2-3</Box>
                            </Grid>
                        </Grid></Box>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor='red' p={5} textAlign='center'><Grid container>
                            <Grid item xs={12}>
                                <Box bgcolor='aqua' p={5} textAlign='center'>3-1</Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box bgcolor='yellowgreen' p={5} textAlign='center'>3-2</Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box bgcolor='skyblue' p={5} textAlign='center'>3-3</Box>
                            </Grid>
                        </Grid></Box>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor='blue' p={5} textAlign='center'>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box bgcolor='red' p={5} textAlign='center'>4-1</Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box bgcolor='yellow' p={5} textAlign='center'>4-2</Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box bgcolor='green' p={5} textAlign='center'>4-3</Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Grids