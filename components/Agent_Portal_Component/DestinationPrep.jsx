import { Box,Container, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import pic41 from '../../public/AgentPortal assets/assets/Screenshot_41.png'
import wevemissedyou from '../../public/AgentPortal assets/assets/wevemissedyou.PNG'
import Image from 'next/image'

const DestinationPrep = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121F28",
        pb:12,
        color: "white",
        maxWidth:'1050px',
        width:'100%',
        p:'12px',
        pl:{lg:6,xs:1},mt:3
        
      }}
    >
      
        <Grid container columns={12} columnSpacing={1} rowSpacing={1} p={1} pr={{xs:3,md:3,sm:3}} pb={20}>
          <Grid item lg={6} md={6} sm={12} xs={12} p={{sm:2,xs:0}} maxWidth={"529px"} width={'100%'} textAlign={'center'}>
            <Typography fontSize={"small"} textAlign={'justify'}>
              Developed by teachers, academics and expert instructional
              designers, DestinationPREP is a free resource providing students
              an interactive insight into key study destinations. It's
              purpose-built for students thinking about Canada, the UK and
              Australia for higher education, whether that's pre-degree,
              undergraduate or postgraduate study. A self-contained
              pre-departure program, it's an ideal leadup to study, and a way
              for your agency to demonstrate real value for your prospective
              students. <br />
              <br /> Depending on your pace, level of understanding and
              enthusiasm for exploring further resources, this course will take
              you between 30 minutes to 2 hours to complete
            </Typography><br />
            <Button
              variant="contained"
              sx={{
                borderRadius: "10px",
                border: "1px solid white",
                height: {lg:40,md:40,sm:45,xs:46},
                backgroundColor: "#FF66C4",
                color: "white",
                width:'80%',
                fontSize:'small'
                
              }}
            >
             <b> RUN YOUR OWN DESTINATION PREP CAMPAIGN</b>
            </Button>
            <br /><br />
            <Button
              variant="contained"
              sx={{
                borderRadius: "10px",
                border: "1px solid white",
                height: {lg:40,md:40,sm:45,xs:46},
                backgroundColor: "#FF914D",
                color: "white",
                
                width:'80%',
                
              }}
            >
             <b> TRY DESTINATIONPREP FOR YOURSELF</b>
            </Button>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}  maxWidth={"529px"} width={'100%'} textAlign={'center'} justifyContent={'space-around'}>
              <Box p={1} pr={{md:1,xs:2}} width={{xs:'70%'}} mt={2} margin={'0px auto'} justifyContent={'space-around'} >
                <Image src={wevemissedyou} alt="" />
              </Box>
          </Grid>
        </Grid>
      
    </Box>
  );
};

export default DestinationPrep;
