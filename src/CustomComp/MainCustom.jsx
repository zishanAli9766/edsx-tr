import { Button } from '@mui/material';
import React from 'react'

function MainCustom({type,color,height,title}) {
      if(type === 'b'){
          return <Button style={{color: color,height:height}}>{title} </Button>
      }
    return <h2 style={{color: color, height:height}}>{title} </h2>
}

export default MainCustom;