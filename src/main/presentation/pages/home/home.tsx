'use client'

import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'
import finance from '../../assets/img/dados-financeiros.jpg'
import React from "react"

const HomePage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      sx={{
        display: "flex",
        flexDirection: isMobile ? 'column' : 'row', // Coluna em telas pequenas
        alignItems: isMobile ? 'center' : 'flex-start',
        justifyContent: "space-around",
        padding: isMobile ? "70px" : "100px", // Ajuste de padding
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Handjet',
            color: '#2bdefd', 
            fontSize: isMobile ? '60px' : '100px'
          }}
        >
          Immerse yourself 
          <br/> 
          in Investments!
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Roboto',
            fontSize: isMobile ? '16px' : '20px',
            color: 'text.secondary'
          }}
        >
          Become a successful investor with HB.
          <br/> 
          Sign up to access powerful tools and educational resources.
        </Typography>

        <Button 
          variant="contained" 
          color="success" 
          href="/checkout" 
          sx={{
            fontFamily: 'Roboto',
            marginTop: '20px'
          }}
        >
          Open your account
        </Button>
      </Box>
      
      <Box sx={{ marginTop: isMobile ? '20px' : '0', display: isMobile ? 'none' : 'block', borderRadius: '18px', overflow: 'hidden'}}>
        <Image
          src={finance}
          alt="finance dada image"
          width={700} 
          height={500}
        />
      </Box>
    </Box>
  )
}

export default HomePage;
