import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MainMenu from "../../components/Agent_Portal_Component/MainMenu";
import { useState } from "react";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { SignalCellularAlt, YouTube } from "@mui/icons-material";
import { StateContex } from "../Context/StateProvider";
import MarketingResource from "../../components/Agent_Portal_Component/MarketingResource";
import LearningResource from "../../components/Agent_Portal_Component/LearningResource";
import DestinationPrep from "../../components/Agent_Portal_Component/DestinationPrep";
import Link from "next/link";

import MABECSlogo from "../../public/AgentPortal assets/assets/MABECSlogo.PNG";

const StudyVillageResources = () => {
  const {
    open,
    setOpen,
    marketingResource,
    setMarketingResource,
    learningResource,
    setLearningResource,
    destinationPrep,
    setDestinationPrep,
  } = useContext(StateContex);
  return (
    <Box
      minWidth={"420px"}
      width={"100%"}
      overflow={"hidden"}
      sx={{ backgroundColor: "#121F28" }}
    >
      <Box sx={{ backgroundColor: "#121F28" }} height={"30vh"}>
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
            <Link href={"/HomePage"}>
              <img
                src="https://i.postimg.cc/tgNXTJck/svLogo.png"
                alt=""
                width={200}
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
              <img src={MABECSlogo} alt="" width={"100%"} height={"100%"} />
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

      {/* -------------------- */}

      <Box
        width={"100%"}
        // height={"65vh"}
        minWidth={"420px"}
        sx={{ backgroundColor: "#121F28" }}
        // pr={{xs:4,sm:0}}
        m={0}
      >
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
          <i>Study Village Resources</i>
        </h2>
        <Box
          sx={{
            height: { lg: "65px", md: "65px", sm: "80px", xs: "150px" },
            // width: {lg:"85%",md:'85%',sm:'80%',xs:'75%'},
            width: "85%",
            mt: 3,
            ml: { md: 4, sm: 3, xs: 3 },
            borderRadius: "15px",
            backgroundImage: "linear-gradient(to right, black, #3432C9)",
            p: { md: 2,sm:2, xs: 1 },
            pt: {md:2,sm:2,xs:1.5},
            pb:{md:2,sm:2,xs:1},
            pl: { sm: 2, xs: 2 },
          }}
        >
          <Grid
            container
            lg={12}
            rowSpacing={1}
            columnSpacing={1}
            maxWidth={"1400px"}
            width={"100%"}
          >
            <Grid
              item
              lg={3}
              md={4}
              sm={4}
              xs={12}
              height={{ lg: "45px", md: "45px", sm: "60px", xs: "45px" }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: `${
                    marketingResource === true ? "#2FAFD4" : "#CCCCCC"
                  }`,
                  width: "100%",
                  height: "100%",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#2FAFD4",
                  },
                }}
                onClick={() => {
                  setMarketingResource(true);
                  setDestinationPrep(false);
                  setLearningResource(false);
                }}
              >
                <TaskAltOutlinedIcon sx={{ color: "black", mr: 2 }} />
                <b>Marketing Resources</b>
              </Button>
            </Grid>
            <Grid
              item
              lg={3}
              md={4}
              sm={4}
              xs={12}
              height={{ lg: "45px", md: "45px", sm: "60px", xs: "45px" }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: `${
                    learningResource === true ? "#2FAFD4" : "#CCCCCC"
                  }`,
                  width: "100%",
                  height: "100%",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#2FAFD4",
                  },
                }}
                onClick={() => {
                  setMarketingResource(false);
                  setDestinationPrep(false);
                  setLearningResource(true);
                }}
              >
                <TaskAltOutlinedIcon sx={{ color: "black", mr: 2 }} />
                <b>Learning Resources</b>
              </Button>
            </Grid>
            <Grid
              item
              lg={3}
              md={4}
              sm={4}
              xs={12}
              height={{ lg: "45px", md: "45px", sm: "60px", xs: "45px" }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: `${
                    destinationPrep === true ? "#2FAFD4" : "#CCCCCC"
                  }`,
                  width: "100%",
                  height: "100%",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#2FAFD4",
                  },
                }}
                onClick={() => {
                  setMarketingResource(false);
                  setDestinationPrep(true);
                  setLearningResource(false);
                }}
              >
                <TaskAltOutlinedIcon sx={{ color: "black", mr: 2 }} />
                <b>Destination Prep</b>
              </Button>
            </Grid>
            <Grid item lg={3} md={0} sm={0} xs={0}></Grid>
          </Grid>
        </Box>
        {marketingResource ? <MarketingResource /> : <></>}
        {learningResource && <LearningResource />}
          {destinationPrep && <DestinationPrep />}
      </Box>
    </Box>
  );
};

export default StudyVillageResources;
