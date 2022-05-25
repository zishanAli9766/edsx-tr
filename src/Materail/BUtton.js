import React from 'react'
import Button from '@mui/material/Button';
import { AppBar, Avatar, AvatarGroup, Box, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/Menu';

function BUtton() {
  return (
      <>
    <div>BUtton</div>
    <h1>Text Button</h1>
    <Button>Click Me</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="primary" href="https://google.com">Link</Button>
    <Button disabled>Disabled</Button>

    <h1>Contained Button</h1>
    <Button variant='contained'>Click Me</Button>
    <Button color="secondary">Click Me</Button>
    <Button variant='contained' color="primary" href="https://google.com">Link</Button>
    <Button variant='contained' disabled>Disabled</Button>

    <h1>Outlined Button</h1>
    <Button variant="outlined">Click Me</Button>
    <Button variant="outlined" color="secondary">Secondary</Button>
    <Button variant="outlined" href="https://google.com" color="primary">Link</Button>
    <Button variant="outlined" disabled>Disabled</Button>

    <h1>Button Size</h1>
    <Button variant="contained" color="secondary" size="small">Small</Button>
    <Button variant="contained" color="secondary" size="medium">Medium</Button>
    <Button variant="contained" color="secondary" size="large">Large</Button>  

    <h1>Icon Button</h1>
    <IconButton color='secondary'>
      <DeleteIcon />
    </IconButton>

    <h1>Custom Button</h1>
    <Button variant='contained' style={{backgroundColor:'green'}}>Custom1</Button>
    <Button variant='contained' sx={{backgroundColor:'pink'}}>Custom2</Button>

    <h1>Button with Click Event</h1>
    <Button variant='contained'onClick={()=>console.log('Button Clicked')}>Click Me</Button>

    <h1>Text Field</h1>
    <TextField />
    <TextField label='Name' />
    <TextField label='Standard' variant='standard'/>
    <TextField label='Outlined' variant='outlined'/>
    <TextField label='Filled' variant='filled'/>

    <h1>Font Style</h1>
    <Box fontStyle="italic">Hello</Box> 

    <h1>Color</h1>
    <Box color="primary.main">primary</Box>
    <Box color="secondary.main">secondary</Box>
    <Box color="error.main">error</Box>
    <Box color="warning.main">warning</Box>
    <Box color="info.main">info</Box>
    <Box color="success.main">success</Box>

    <h1>Background Color</h1>
    <Box bgcolor="primary.main">primary</Box>
    <Box bgcolor="secondary.main">secondary</Box>
    <Box bgcolor="error.main">error</Box>
    <Box bgcolor="warning.main">warning</Box>
    <Box bgcolor="info.main">info</Box>
    <Box bgcolor="success.main">success</Box>

    <h1>Avatar</h1>
    <Avatar>H</Avatar>
    <Avatar src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg" />
    <Avatar> <DeleteIcon /> </Avatar>
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg" />
      <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg" />
      <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg" />
      <Avatar alt="Agnes Walker" src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg" />
      <Avatar alt="Trevor Henderson" src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg" />
    </AvatarGroup>

    <h1>App Bar</h1>
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
      </>
  )
}

export default BUtton