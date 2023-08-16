import {
  Box,
  Grid,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CallRoundedIcon from "@mui/icons-material/CallRounded";

import { useState } from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import MainMenu from "../../components/Agent_Portal_Component/MainMenu";
import { YouTube } from "@mui/icons-material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";
import MinimizeOutlinedIcon from "@mui/icons-material/MinimizeOutlined";

import pic37 from "../../public/AgentPortal assets/assets/Study_Village_image_2.png";
import pic38 from "../../public/AgentPortal assets/assets/Study_Village_image_4.png";
import pic39 from "../../public/AgentPortal assets/assets/Study_Village_image_3.png";
import pic40 from "../../public/AgentPortal assets/assets/Study_Village_image_1.png";
import { useContext } from "react";
import { StateContex } from "../Context/StateProvider";
import Image from "next/image";

import sydney from "../../public/AgentPortal assets/learning-assets/AGENT SITE/sydney.png";
// import urlicon from "../assets/urlicon.PNG";

import MABECSlogo from "../../public/AgentPortal assets/assets/MABECSlogo.PNG";

const HomePage = () => {
  // const [open, setOpen] = useState(false);
  const { open, setOpen } = useContext(StateContex);
  const matches = useMediaQuery("(max-height:963px)");
  return (
    <Box sx={{ overflow: "hidden", bgcolor: "#121F28" }}>
      <Box
       
        sx={{
          // backgroundImage: `url(${sydney})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          '& .bg':{
            backgroundImage: `url(${sydney})`
          }
        }}
        height={matches === true ? "51svh" : "68svh"}
        // height={'50vh'}
      >
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
            <Link to={"/"}>
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
      <Box
        pb={9.5}
        sx={{ backgroundColor: "#121F28", borderTop: "1px solid yellow" }}
      >
        <Box
          textAlign={"center"}
          height={"40px"}
          width={"250px"}
          border={"1px solid skyblue"}
          borderRadius={2.5}
          color={"white"}
          justifyContent={"center"}
          margin={"0 auto"}
          mt={2}
          pt={1}
          pb={0.5}
        >
          <Typography fontStyle={"italic"}>
            {" "}
            <b> WHAT DO YOU WANT TO DO?</b>
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          width={"100%"}
          justifyContent={"space-evenly"}
          mt={4}
          // p={2}
        >
          <Box
            // width={"30%"}
            height="182px"
            sx={{
              backgroundColor: "#121F28",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "272px" },
              mb: 5,
              p: 0,
            }}
          >
            <Image
              src={pic37}
              alt="s1"
              fill
              objectFit="contain"
              className="homeImg"
            />

            <Typography
              textAlign={"center"}
              color={"white"}
              fontWeight={"50px"}
              fontSize={"large"}
              fontStyle={"italic"}
            >
              <b> APPLY FOR A STUDENT</b>
            </Typography>
          </Box>
          <Box
            // width={"30%"}
            height={"182px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "272px" },
              position: "relative",
              // height: { xs: "200px", sm: "200px", md: "220px", lg: "260px" },
              mb: 5,
              p: 0,
            }}
          >
            <Image
              src={pic38}
              alt="s1"
              fill
              objectFit="fill"
              className="homeImg"
              // height={180}
              // width={272}
            />

            <Typography
              textAlign={"center"}
              color={"white"}
              fontWeight={"50px"}
              fontSize={"large"}
              fontStyle={"italic"}
            >
              <b> LAUNCH A CAMPAIGN </b>
            </Typography>
          </Box>
          <Box
            // width={"30%"}
            height={"182px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "272px" },
              // height: { xs: "200px", sm: "200px", md: "180px", lg: "260px" },
              mb: 5,
              p: 0,
            }}
          >
            <Box width={"100%"} height={"180px"}>
              <Image
                src={pic39}
                alt="s1"
                objectFit="fill"
                className="homeImg"
              />
            </Box>
            <Typography
              textAlign={"center"}
              color={"white"}
              fontWeight={"50px"}
              fontSize={"large"}
              fontStyle={"italic"}
            >
              <b> CHECK STUDENT(S) PROGRESS</b>
            </Typography>
          </Box>

          <Box
            // width={"30%"}
            height={"182px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid yellow",
              width: { xs: "272px" },
              // height: { xs: "200px", sm: "200px", md: "180px", lg: "260px" },
              mb: 5,
              p: 0,
            }}
          >
            <Box width={"100%"} height={"180px"} position={"relative"}>
              <Image
                src={pic40}
                alt="s1"
                objectFit="fill"
                className="homeImg"
              />
            </Box>
            <Typography
              textAlign={"center"}
              color={"white"}
              fontWeight={"30px"}
              fontSize={"large"}
              fontStyle={"italic"}
            >
              <b> ACCESS TRAINING & SALES RESOURCES</b>
            </Typography>
          </Box>
          {/* </Box> */}
        </Box>
      </Box>
      <Box
        sx={{ backgroundColor: "yellow", display: "flex", flexWrap: "wrap" }}
        pb={3}
      >
        <Box
          pt={3}
          display={"flex"}
          flexWrap={"wrap"}
          sx={{ width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" } }}
          textAlign={{ xs: "center", md: "left" }}
          justifyContent={{ xs: "center" }}
        >
          <Box
            borderRadius={"50%"}
            sx={{ outline: "1px solid black" }}
            width={"50px"}
            height={"45px"}
            pt={"5px"}
            // ml={10}
            textAlign={"center"}
          >
            <CallRoundedIcon
              color="black"
              fontSize="large"
              sx={{ margin: "0 auto" }}
            />
          </Box>
          <Typography
            textAlign={{ md: "left", xs: "center" }}
            ml={3}
            mt={1.8}
            fontSize={"large"}
          >
            <b>(+613) 703 603 47</b>
          </Typography>
        </Box>
        <Box
          textAlign={{ xs: "center", md: "center" }}
          sx={{ width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" } }}
        >
          <Link>
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/very-thin-linear-icon/linkedin-103.png"
              alt=""
              height={35}
              width={35}
              style={{ marginLeft: 16, marginTop: 30 }}
            />
          </Link>
          <Link href="facebook.com">
            <FacebookRoundedIcon
              fontSize="large"
              sx={{ margin: "0 auto", mt: 3, color: "black", ml: 2 }}
            />
          </Link>
          <Link>
            <MailRoundedIcon
              fontSize="large"
              sx={{ mt: 3, color: "black", ml: 3 }}
            />
          </Link>
          <Link pt={2} height={40} width={45}>
            <img
              src="https://icon-library.com/images/web-link-icon/web-link-icon-16.jpg"
              alt=""
              height={40}
              width={45}
              style={{ marginLeft: 16, marginTop: 30 }}
            />
          </Link>
        </Box>
      </Box>
      {/* <Box
        sx={{ backgroundColor: "yellow", display: "flex", flexWrap: "wrap" }}
        pb={3}
      >
        <Box
          pt={3}
          display={"flex"}
          flexWrap={"wrap"}
          sx={{ width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" } }}
          textAlign={{ xs: "center", md: "left" }}
          justifyContent={{ xs: "center" }}
        >
          <Box
            borderRadius={"50%"}
            sx={{ outline: "1px solid black" }}
            width={"50px"}
            height={"45px"}
            pt={"5px"}
            // ml={10}
            textAlign={"center"}
          >
            <CallRoundedIcon
              color="black"
              fontSize="large"
              sx={{ margin: "0 auto" }}
            />
          </Box>
          <Typography
            textAlign={{ md: "left", xs: "center" }}
            ml={3}
            mt={1.8}
            fontSize={"large"}
          >
            <b>(+613) 703 603 47</b>
          </Typography>
        </Box>
        <Box
          textAlign={{ xs: "center", md: "center" }}
          sx={{ width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" } }}
        >
          <Link>
            <Image
              src="https://icons.veryicon.com/png/o/miscellaneous/very-thin-linear-icon/linkedin-103.png"
              alt=""
              height={35}
              width={35}
              style={{ marginLeft: 16, marginTop: 30 }}
            />
          </Link>
          <Link href="facebook.com">
            <FacebookRoundedIcon
              fontSize="large"
              sx={{ margin: "0 auto", mt: 3, color: "black", ml: 2 }}
            />
          </Link>
          <Link>
            <MailRoundedIcon
              fontSize="large"
              sx={{ mt: 3, color: "black", ml: 3 }}
            />
          </Link>
          <Link pt={5} height={40} width={45}>
            <Image
              src="https://icon-library.com/images/web-link-icon/web-link-icon-16.jpg"
              alt=""
              height={40}
              width={45}
              style={{ marginLeft: 16, marginTop: 30 }}
            />
          </Link>
        </Box>
      </Box> */}
    </Box>
  );
};

export default HomePage;
