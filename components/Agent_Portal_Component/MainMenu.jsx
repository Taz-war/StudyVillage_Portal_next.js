import { Box, Drawer, Grid, IconButton, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Link from "next/link";

const MainMenu = ({ open, setOpen }) => {
  // const {open,setOpen} = useContext(State)
  let anchor = "";
  const matches = useMediaQuery("(min-width:600px)");
  if (matches === true) {
    anchor = "top";
  } else {
    anchor = "left";
  }
  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        height: { xs: "100%", sm: "100%", md: "30%", lg: "30%" },
        backgroundColor: "red",
        position: "relative",
        zIndex: 222222,
      }}
    >
      <Box
        sx={{ width: { xs: 250, sm: 300, md: "100%", lg: "100%" } }}
        display={"flex"}
      >
        <Grid
          container
          columns={12}
          mt={2}
          sx={{ width: { lg: "95%", md: "95%", sm: "90%", xs: "89%" } }}
        >
          <Grid item lg={6} xs={0} md={0} sm={0}></Grid>
          <Grid item lg={3} xs={12} sm={12} md={6} pl={2}>
            <h4 style={{ fontStyle: "italic" }}>ACTIONS</h4>
            <Link
              href={"/student_application"}
              
            >
             <span
             onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "grey",
                  lineHeight: 1.8,
                  cursor: "pointer",
                }}
              > Student Applications</span>
            </Link>
            <br></br>
            <Link
              href=""
              
            >
              <span
              onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "grey",
                  lineHeight: 1.8,
                  cursor: "pointer",
                }}
              >Start a SV campaign</span>
            </Link>
            <br></br>
            <Link
              href=""
              
            >
             <span
             onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "grey",
                  lineHeight: 1.8,
                  cursor: "pointer",
                }}
              > Submit Student lead</span>
            </Link>
            <br></br>
            <Link
              href=""

            >
             <span
             onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "grey",
                  lineHeight: 1.8,
                  cursor: "pointer",
                }}
              > Enrol a student in Destination Prep</span>
            </Link>
            <br></br>
            <Link
              href=""
              
            >
              <span
              onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "grey",
                  lineHeight: 1.8,
                  cursor: "pointer",
                }}
              >Book a individual counselling session</span>
            </Link>
            <br></br>
            <Link
              href={""}
              
            >
               <span
               onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "grey",
                  lineHeight: 1.8,
                  cursor: "pointer",
                }}
              >Contact us</span>
            </Link>
            <br />
            <br />
          </Grid>
          <Grid item lg={3} xs={12} sm={12} md={6} pl={2}>
            <h4 style={{ fontStyle: "italic" }}>RESOURCES</h4>
            <Link
              href={"/sv_resources"}
              
            >
               <span
               onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "grey",
                  lineHeight: 1.8,
                  cursor: "pointer",
                }}>
              Marketing & learning resources</span>
            </Link>
            <br></br>
            <Link
            
              href={"/counsellor_training"}
              
            >
             <span
             onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "grey",
                  lineHeight: 1.8,
                  cursor: "pointer",
                }}
              >Counsellor training</span> 
            </Link>
            <br></br>
            <Link href={"/sv_students"} >
              <span
              onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "grey",
                  lineHeight: 1.8,
                  cursor: "pointer",
                }}
              >
                Your SV students
              </span>
            </Link>
            <br></br>

            <Link
              href={"/sv_counsellors"}
            >
             <span
             onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "grey",
                  lineHeight: 1.8,
                  cursor: "pointer",
                }}
              > Your SV counsellors</span>
            </Link>
            <br></br>
            <Link
              href={"/CompanyProfile"}
              onClick={() => setOpen(false)}
              
            >
              <span
              onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "grey",
                  lineHeight: 1.8,
                  cursor: "pointer",
                }}
              >Your company profile</span>
            </Link>
            <br></br>

            {/* <Link
              href={"/partnership_manager"}
              onClick={()=>setOpen(false)}
              
            >
              Easy Guide to making money with StudyVillage
            </Link> */}
            <br></br>
          </Grid>
        </Grid>
        <Box
          textAlign={"right"}
          sx={{ width: { lg: "5%", md: "5%", sm: "10%", xs: "11%" } }}
          p={0}
        >
          <IconButton
            disableRipple
            onClick={() => {
              console.log("Close");
              setOpen(false);
            }}
            sx={{ pr: "3px", p: 0 }}
          >
            <ClearOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MainMenu;
