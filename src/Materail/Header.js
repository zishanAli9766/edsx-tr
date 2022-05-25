import { AppBar, Toolbar, Typography, withStyles } from '@mui/material'
import { makeStyles, } from "@mui/material";

import { Box } from '@mui/system'
import React from 'react'

const useStyle = makeStyles({
    header: {
        background: '#2874f0',
        height: 55
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none'
    },
    container: {
        display: 'flex',
    },
    logo: {
        width: 75,
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4,
    },
    subHeading :{
        fontSize: 10,
        fontStyle:"italic"
    }
})
const ToolBar = withStyles({
    root: {
      minHeight: 55
    },
})(Toolbar);

function Header() {
    const classes = useStyle();

  return (<>
    <div>Header</div>
    <AppBar className={classes.header}>
                <ToolBar>
                 
                        <Box className={classes.container}>
                            <Typography className={classes.subHeading}>Explore Plus</Typography>
                        </Box>
            
                  
                </ToolBar>
            </AppBar>
  </>
  )
}

export default Header