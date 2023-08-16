import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import pic31 from "../../public/AgentPortal assets/assets/Screenshot_31.png";
import pic38 from "../../public/AgentPortal assets/assets/Screenshot_38.png";
import pic35 from "../../public/AgentPortal assets/assets/Screenshot_35.png";
import pic36 from "../../public/AgentPortal assets/assets/Screenshot_36.png";
import pic25 from "../../public/AgentPortal assets/assets/Screenshot_25.png";
import pic30 from "../../public/AgentPortal assets/assets/Screenshot_30.png";
import { YouTube } from "@mui/icons-material";
import ImportantDevicesRoundedIcon from "@mui/icons-material/ImportantDevicesRounded";
import httpagentpage from "../../public/AgentPortal assets/assets/httpagentpage.PNG";
import counselsessionicon from "../../public/AgentPortal assets/assets/counselsessionicon.PNG";
import Sv_campaign_resource from "../../components/Agent_Portal_Component/marketing-Resource/Sv_campaign_resource";
import { useState } from "react";
import Student_leads from "../../components/Agent_Portal_Component/marketing-Resource/Student_leads";
const MarketingResource = () => {
  const [campaignResource,setCampaignResource] = useState(true)
  const [studentLeads,setStudentLeads]= useState(false)
  return (
    <Box
      sx={{
        backgroundColor: "#121F28",
        pb: 10,
        color: "white",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#121F28",
          pb: 12,
          color: "white",
          maxWidth: "1050px",
          width: "100%",
          p: "12px",
          pl: { lg: 6, xs: 1 },
          mt: 3,
        }}
      >
        <Grid
          container
          columns={12}
          columnSpacing={1}
          rowSpacing={1}
          p={1}
          pr={{ xs: 3, md: 3, sm: 3 }}
        >
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            maxWidth={"521px"}
            width={"100%"}
          >
            <Box
              // width={{lg:"90%",md:'90%',xs:'98%'}}
              onClick={()=>{{setStudentLeads(false);setCampaignResource(true)}}}
              sx={{
                width: "cover",
                p: 1,
                pl: 2,
                pb:1,
                display: "flex",
                height: { lg: "65px", md: "72px", sm: "65px", xs: "80px" },
                cursor: "pointer",
                border: `${campaignResource===false?"1px solid white":"1px solid skyblue"}`,
                '& .addHover':{
                  color: `${campaignResource===false?"white":"skyblue"}`,
                },
                '& .addIconHover':{
                  border:`${campaignResource===false?"1px solid white":"1px solid skyblue"}`,
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
                  mt:0.5,
                }}
              />
              <Link
                href="#"
                className="addHover"
                sx={{
                  color: "white",
                  ml: 2,
                  mb:3,
                }}
              >
                <b>StudyVillage Campaign Resources</b>
                <br />
                Assisting you convert students to SV students
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            maxWidth={"521px"}
            width={"100%"}
          >
            <Box
              //  width={{lg:"90%",md:'90%',xs:'98%'}}
              onClick={()=>{{setStudentLeads(true);setCampaignResource(false)}}}
              sx={{

                p: 1,
                pl: 2,
                display: "flex",
                height: { lg: "65px", md: "72px", sm: "65px", xs: "80px" },
                border: `${studentLeads===false?"1px solid white":"1px solid skyblue"}`,
                '& .addHover':{
                  color: `${studentLeads===false?"white":"skyblue"}`,
                },
                '& .addIconHover':{
                  border:`${studentLeads===false?"1px solid white":"1px solid skyblue"}`,
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
                className="addHover"
                href="#"
                sx={{
                  color: "white",
                  ml: 2,
                }}
              >
                <b>Let us do the work for you</b>
                <br />
                Enter individual or bulk lead StudyVillage will Convert
              </Link>
            </Box>
          </Grid>

        </Grid>
      </Box>
      {campaignResource && <Sv_campaign_resource />}
      {studentLeads && <Student_leads />}
    </Box>
  );
};

export default MarketingResource;
