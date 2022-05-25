import React from 'react'
import { ThemeProvider } from "styled-components";
import { styled } from '@mui/material/styles';
import { red, green, blue, purple } from '@mui/material/colors';
import { theme } from "./Stylers";
import {  Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),

    [theme.breakpoints.down('md')]: {
      backgroundColor: red[500],
      color: purple[500]
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: blue[500],
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
      color :  blue[500]
    },
  }));

  const Responsive = styled("p")(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
      color: 'aqua',
      backgroundColor: green[200]
    },
    [theme.breakpoints.up("sm")]: {
      color: purple[500]
    },
    [theme.breakpoints.up("md")]: {
      color: green[500]
    }
  }));

function Index() {
    const showText = useMediaQuery(theme.breakpoints.between('sm','md'));
   
  return (
<>
<ThemeProvider theme={theme}>

  <Root>
      <Typography>down(md): red</Typography>
      <Typography>up(md): blue</Typography>
      <Typography>up(lg): green</Typography>
    </Root>
    <Box
        sx={{
          color: "white",
          backgroundColor: {
            xxs: "red", // theme.breakpoints.up('xxs')
            xs: "orange", // theme.breakpoints.up('xs')
            sm: "yellow", // theme.breakpoints.up('sm')
            md: "green", // theme.breakpoints.up('md')
            lg: "blue", // theme.breakpoints.up('lg')
            xl: "purple" // theme.breakpoints.up('xl')
          },textAlign:{sm:'center'}
        }}
      >
        width
      </Box>

      <Responsive>
      <Typography >down(md): red</Typography>
      <Typography>up(md):d blue</Typography>
      <Typography>up(lg): green</Typography>
    </Responsive>

    {showText && <Typography variant="h1">Appear when 600px and above</Typography>}
    <Box
        sx={{
color:"red",
textAlign:"center",
          backgroundColor: [
            "aqua", // theme.breakpoints.up('xxs')
            "green", // theme.breakpoints.up('xs')
            "null", // theme.breakpoints.up('sm')
            "purple", // theme.breakpoints.up('md')
            "blue", // theme.breakpoints.up('lg')
            "purple" // theme.breakpoints.up('xl')
          ]
        }}
      >
      Material
      </Box>
</ThemeProvider>

    </>
  )
}

export default Index