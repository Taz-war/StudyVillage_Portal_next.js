import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Image from 'next/image'
import { useState } from "react";
import Sv_modules from "../../components/Agent_Portal_Component/learning-resource/Sv_Modules";
import SvPrograms from "../../components/Agent_Portal_Component/learning-resource/Sv_Programs";
import overviewpc from '../../public/AgentPortal assets/assets/overviewpc.PNG'
const LearningResource = () => {
  const [svModules,setSvModules]= useState(true)
  const [svPrograms,setSvPrograms]=useState(false)
  return (
    <>
    <Box display={"flex"} flexWrap={'wrap'}>
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
   
        <Grid container columns={12} columnSpacing={1} rowSpacing={1} p={1} pr={{xs:3,md:3,sm:3}}>
        <Grid item lg={6} md={6} sm={12} xs={12} maxWidth={"521px"} width={'100%'}>
            <Box
              // width={{lg:"90%",md:'90%',xs:'98%'}}
              onClick={()=>{{setSvModules(true);setSvPrograms(false)}}}
              sx={{
                width:'cover',
                p: 1,
                pl: 2,
                display: "flex",
                height: {lg:"65px",md:'72px',sm:'65px',xs:'80px'},
                cursor: "pointer",
                border: `${svModules===false?"1px solid white":"1px solid skyblue"}`,
                '& .addHover':{
                  color: `${svModules===false?"white":"skyblue"}`,
                },
                '& .addIconHover':{
                  border:`${svModules===false?"1px solid white":"1px solid skyblue"}`,
                },
                "&:hover": {
                  border: "1px solid skyblue",
                  "& .addHover": {
                    color: "skyblue",
                  },
                  "& .addIconHover": {
                    border: "1px solid skyblue",
                  },
                },
              }}
            >
              <ArrowForwardIosRoundedIcon
                className="addHover addIconHover"
                sx={{
                  border: "1px solid white",
                  borderRadius: "50%",
                  color: "white",
                  height: "80%",
                  width: "40px",
                  mt:0.5
                }}
              />
              <Link
                href="#"
                className="addHover"
                sx={{
                  color: "white",
                  ml: 2,
                  
                }}
              >
                <b>StudyVillage Modules-</b>
                <br />
                together they make a Happy,Healthy & Wise program
              </Link>
            </Box>
          </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} maxWidth={"521px"} width={'100%'}>
            <Box
            //  width={{lg:"90%",md:'90%',xs:'98%'}}
            onClick={()=>{{setSvModules(false);setSvPrograms(true)}}}
              sx={{
                border: `${svPrograms===false?"1px solid white":"1px solid skyblue"}`,
                '& .addHover':{
                  color: `${svPrograms===false?"white":"skyblue"}`,
                },
                '& .addIconHover':{
                  border:`${svPrograms===false?"1px solid white":"1px solid skyblue"}`,
                },
                p: 1,
                pl: 2,
                display: "flex",
                height: {lg:"65px",md:'72px',sm:'65px',xs:'80px'},
                "&:hover": {
                  border: "1px solid skyblue",
                  "& .addHover": {
                    color: "skyblue",
                  },
                  "& .addIconHover": {
                    border: "1px solid skyblue",
                  },
                },
              }}
            >
              <ArrowForwardIosRoundedIcon
              className="addHover addIconHover"
                sx={{
                  border: "1px solid white",
                  borderRadius: "50%",
                  color: "white",
                  height: "80%",
                  width: "40px",
                  mt:0.5
                }}
              />
              <Link
              className="addHover"
                href="#"
                sx={{
                  color: "white",
                  ml: 2,
                 
                }}
              >
                <b>StudyVillage Program-</b>
                <br />
                module combinations to match study duration
              </Link>
            </Box>
          </Grid>
        </Grid>

    </Box>
    <Box display={"flex"} maxWidth={'350px'} width={'100%'} mt={4} ml={5}>
      <Box  width={'50%'}>
        <Typography variant="h5" color={'white'} > <b> OVERVIEW</b></Typography>
        <Box display={"flex"} mt={1.5}>

        <Image
              src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
              alt=""
              height={50}
              width={50}
            />
            <Link href="#" fontSize={{lg:"large",md:'medium'}} sx={{ color: "yellow", ml: 2 }}>
              Download <br /> QuickGuide
            </Link>
        </Box>
      </Box>
      <Box width={'50%'}>
        <Image src={overviewpc} alt=""/>
      </Box>
    </Box>
    </Box>
    {svModules && <Sv_modules />}
    {svPrograms && <SvPrograms />}
    </>
  );
};

export default LearningResource;
