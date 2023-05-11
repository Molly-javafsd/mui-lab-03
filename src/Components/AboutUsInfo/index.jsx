import React from 'react'
import { useState } from 'react'
import {Grid,Typography, SpeedDial, SpeedDialAction} from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import { Email } from '@mui/icons-material';

export default function AboutUSInfo() {
  const[value, setValue]=useState(0);

  
    return (
    <>
      <Grid container>
        <div style={{marginLeft: '5%' ,marginRight: '5%'}}>
            <Typography variant='h3'>About ABC University</Typography>
            <br /><br /><br/>
            <Typography variant='body1' component='p'>
                ABC is a place where people of different ages gain an education, including preschools, childcare, primary-elementary schools, secondary-high schools, and universities. They provide a large variety of learning environments and learning spaces
            </Typography>
            <Typography variant='body1' component='p'>
                ABC is a place where people of different ages gain an education, including preschools, childcare, primary-elementary schools, secondary-high schools, and universities. They provide a large variety of learning environments and learning spaces
            </Typography>
            <Typography variant='body1' component='p'>
                ABC is a place where people of different ages gain an education, including preschools, childcare, primary-elementary schools, secondary-high schools, and universities. They provide a large variety of learning environments and learning spaces
            </Typography>
            <Typography variant='body1' component='p'>
                ABC is a place where people of different ages gain an education, including preschools, childcare, primary-elementary schools, secondary-high schools, and universities. They provide a large variety of learning environments and learning spaces
            </Typography>
        </div>
        <SpeedDial
        ariaLabel='SpeedDial example'
        sx={{position: 'fixed', bottom: 16, right: 16}}
     
        >
            <SpeedDialAction icon={<PhoneIcon/>} tooltipTitle="Call us"/>
            <SpeedDialAction icon={<ChatIcon />} tooltipTitle="Chat with us"/>
            <SpeedDialAction icon={<Email/>} tooltipTitle="Email us"/>

        </SpeedDial>
      </Grid>
    </>
  )
}
