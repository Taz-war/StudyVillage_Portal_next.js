import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from 'next/link'

import React from "react";
import { useContext } from "react";
import Image from "next/image";

// import { StateContex } from "../Context/StateProvider";
import agent_portal_august_23 from "../../public/AgentPortal assets/assets/AGENT PORTAL August 23.png";
import MABECSlogo from "../../public/AgentPortal assets/assets/MABECSlogo.PNG";

import MainMenu from "../../components/Agent_Portal_Component/MainMenu";
import { StateContex } from "../Context/StateProvider";

const Counsellor_training = () => {
  const { open, setOpen } = useContext(StateContex);

  return (
    <Box height={"100%"} minWidth={"420px"} overflow={"hidden"} position={"relative"} sx={{backgroundColor:'#121F28',pb:5}}>
      <Box sx={{ backgroundColor: "#121F28" }} height={"35vh"}>
        <Grid container columns={12}>
          <Grid
            item
            lg={9}
            md={9}
            sm={9}
            xs={8}
            textAlign={"left"}
            p={5}
            pt={{ lg: 5, md: 3, xs: 1 }}
          >
            <Link href={'/HomePage'} >
            <Image
              src="https://i.postimg.cc/tgNXTJck/svLogo.png"
              alt=""
              width={200}
              height={150}
            />
            </Link>
          </Grid>
          <Grid item xs={1} pt={6} mt={1} textAlign={"center"}>
            <Box
              maxWidth={"100px"}
              maxHeight={"95px"}
              width={"100%"}
              height={{ md: "auto", xs: "auto" }}
              textAlign={"center"}
            >
              <Image src={MABECSlogo} alt="" width={"100%"} height={"100%"} />
            </Box>
          </Grid>
          <Grid
            item
            lg={1}
            md={1}
            sm={1}
            xs={1}
            textAlign={"right"}
            p={5}
            sx={{ p: { xs: 2, sm: 3, md: 4, lg: 5 } }}
          >
            <IconButton
              onClick={() => setOpen(true)}
              //   sx={{ alignSelf: "flex-end" }}
              disableRipple
            >
              <MenuIcon
                // sx={{
                // //   width: { lg: 180, md: 100, sm: 80, xs: 50 },
                // width:500,
                //   color: "yellow",
                //   height: { lg: 70, md: 60, sm: 50, xs: 40 },
                // }}
                sx={{
                  color: "yellow",
                  height: "100px",
                  width: { xs: "55px", sm: "70px", md: "100px" },
                }}
              />
            </IconButton>
            <MainMenu open={open} setOpen={setOpen} />
          </Grid>
        </Grid>
      </Box>
      <Box width={"100%"} sx={{ backgroundColor: "#121F28" }} m={0} pb={9}>
        <h2
          style={{
            color: "white",
            margin: 0,
            textAlign: "left",
            marginLeft: 30,
            borderBottom: "1px solid yellow",
            paddingBottom: 15,
            marginRight: 30,
          }}
        >
          <i>Counsellor training for Agency staff</i>
        </h2>
        <Grid container columns={12}>
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            mt={7}
            ml={{ md: 5, xs: 2 }}
            pr={{ md: 0, xs: 2 }}
            textAlign={"center"}
          >
            <Typography
              color={"white"}
              fontSize={"large"}
              textAlign={"justify"}
            >
              <b>
                {" "}
                id you know you can undertake a free training on the
                StudyVillage program and get officially certified as a
                StudyVillage counsellor?
              </b>
              <br />
              <br />
              This online program is designed to get you up to speed on
              StudyVillage and enable you to confidently counsel students and
              parents. Taking between 30-45 minutes to complete it explains each
              module, and what a program entails, who benefits and why. <br />
              <br /> It's an ideal tool to allow you to understand StudyVillage
              quickly and easily and get the program working for your business.{" "}
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "yellow",
                color: "black",
                mt: 5,
                borderRadius: "10px",
              }}
            >
              {" "}
              <b>ENROLL IN STUDY VILLAGE COUNSELLOR TRAINING</b>
            </Button>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12} textAlign={"center"} mt={3} >
            <Image
              src={agent_portal_august_23}
              alt=""
              style={{ maxWidth: 597, width: "90%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Counsellor_training;
