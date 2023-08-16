import { Box,Grid,Typography } from '@mui/material'
import React from 'react'
import { Link } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import pic31 from "../../../public/AgentPortal assets/assets/Screenshot_31.png";
import pic38 from "../../../public/AgentPortal assets/assets/Screenshot_38.png";
import pic35 from "../../../public/AgentPortal assets/assets/Screenshot_35.png";
import pic36 from "../../../public/AgentPortal assets/assets/Screenshot_36.png";
import pic25 from "../../../public/AgentPortal assets/assets/Screenshot_25.png";
import pic30 from "../../../public/AgentPortal assets/assets/Screenshot_30.png";
import { YouTube } from "@mui/icons-material";
import ImportantDevicesRoundedIcon from "@mui/icons-material/ImportantDevicesRounded";
import httpagentpage from "../../../public/AgentPortal assets/assets/httpagentpage.PNG";
import counselsessionicon from "../../../public/AgentPortal assets/assets/counselsessionicon.PNG";
import Image from 'next/image'

const Sv_campaign_resource = () => {
  return (
    <>
    <Box
        sx={{
          backgroundColor: "#121F28",
          pb: 12,
          color: "white",
          maxWidth: "1050px",
          width: "100%",
          p: "12px",
          pl: { lg: 6, xs: 1 },
          pt:0,
          mt: 0,
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
            lg={12}
            p={2}
            textAlign={"justify"}
            pr={{ md: 2, sm: 1, xs: 0 }}
          >
            <Typography fontSize={"medium"} color={'yellow'}>
              Here's some amazing partner resources that are yours to use. The
              order below suggest a typical StudyVillage campaign lifecycle,
              though you're free to use as you wish. We're always adding to this
              list, and call your StudyVillage Rep if you have further campaign
              ideas or media requirements. Of course, we're happy to do the
              promo for you - just email us students leads, individually or in
              bulk and we'll roll out a campaign on your behalf. (Use the submit
              student leads link above).
            </Typography>
          </Grid>
        </Grid>
        </Box>
    <Box
        sx={{
          ml: { md: 6, sm: 3, xs: 0.5 },
          mt: 3,
          maxWidth: "1321px",
          width: "100%",
        }}
      >
        <Grid
          container
          columns={12}
          borderBottom={"1px solid yellow"}
          pb={2}
          pr={1}
        >
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box m={0} p={0} display={"flex"}>
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                1
              </Typography>
              <h5 style={{color:'white',paddingTop:4}}>
                <span style={{ fontSize: "25px" }}> Easy SV Promo</span> <br /><br /> 
                <i>
                  {" "}
                  20 Page Student and Parent Brochure <br /> including FAQs
                </i>
              </h5>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%", mt: { sm: 2, xs: 1 } }}>
                <Image
                  src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                  alt=""
                  height={50}
                  width={50}
                />
              </Box>
              <Box
                sx={{
                  width: "35%",
                  mt: { sm: 2, xs: 1 },
                  ml: { sm: 1, xs: 2 },
                }}
              >
                <Link href="#" sx={{ color: "yellow",fontSize:'small' }}>
                  Download the StudyVillage <br /> Brochure for Students and
                  Parents
                </Link>
              </Box>
              <Box sx={{ width: "55%", ml: { md: 11, sm: 5, xs: 3 } }}>
                <Image src={pic31} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          columns={12}
          borderBottom={"1px solid yellow"}
          mt={4}
          pb={2}
          pr={1}
        >
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box m={0} p={0} display={"flex"}>
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                2
              </Typography>
              <h5 style={{color:'white',paddingTop:4}}>
                <span style={{ fontSize: "25px" }}>Parent Promo email</span>{" "}
                <br /> <br/>
                <i>
                  {" "}
                  Letter to Email to parents introducing <br /> SV including
                  complimentary DestinationPrep
                </i>
              </h5>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%", mt: { sm: 2, xs: 1 } }}>
                <Image
                  src="https://icon-library.com/images/doc-icon-png/doc-icon-png-4.jpg"
                  alt=""
                  height={50}
                  width={50}
                />
              </Box>
              <Box
                sx={{
                  width: "35%",
                  mt: { sm: 2, xs: 1 },
                  ml: { sm: 1, xs: 2 },
                }}
              >
                <Link href="#" sx={{ color: "yellow" ,fontSize:'small'}}>
                  Download the StudyVillage <br /> Parents promo email
                </Link>
              </Box>
              <Box sx={{ width: "55%", ml: { md: 11, sm: 5, xs: 3 } }}>
                <Image src={pic38} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          columns={12}
          borderBottom={"1px solid yellow"}
          mt={4}
          pb={2}
          pr={1}
        >
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box m={0} p={0} display={"flex"}>
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                3
              </Typography>
              <h5 style={{color:'white',paddingTop:4}}>
                <span style={{ fontSize: "25px" }}>Student Promo email</span>{" "}
                <br /> <br/>
                <i>
                  {" "}
                  Letter to Email to parents introducing <br /> SV including
                  complimentary DestinationPrep
                </i>
              </h5>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%", mt: { sm: 2, xs: 1 } }}>
                <Image
                  src="https://icon-library.com/images/doc-icon-png/doc-icon-png-4.jpg"
                  alt=""
                  height={50}
                  width={50}
                />
              </Box>
              <Box
                sx={{
                  width: "35%",
                  mt: { sm: 2, xs: 1 },
                  ml: { sm: 1, xs: 2 },
                }}
              >
                <Link href="#" sx={{ color: "yellow" ,fontSize:'small'}}>
                  Download the StudyVillage <br /> Parents promo email
                </Link>
              </Box>
              <Box sx={{ width: "55%", ml: { md: 11, sm: 5, xs: 3 } }}>
                <Image src={pic38} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          columns={12}
          borderBottom={"1px solid yellow"}
          mt={4}
          pb={2}
          pr={1}
        >
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box m={0} p={0} display={"flex"}>
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                4
              </Typography>
              <h5 style={{color:'white',paddingTop:4}}>
                <span style={{ fontSize: "25px" }}>Explainers Video</span>{" "}
                <br /> <br/>
                <i>
                  {" "}
                  5 minute video outlining the <br /> Happy, Healthy and Wise
                  Program
                </i>
              </h5>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%", mt: { sm: 2, xs: 1 } }}>
                <YouTube
                  fontSize="large"
                  sx={{
                    color: "yellow",
                    border: "1px solid yellow",
                    borderRadius: "50%",
                    p: 1,
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "35%",
                  mt: { sm: 2, xs: 1 },
                  ml: { sm: 1, xs: 2 },
                }}
              >
                <Link href="#" sx={{ color: "yellow" ,fontSize:'small'}}>
                  Download the StudyVillage <br /> Explainer Video
                </Link>
              </Box>
              <Box sx={{ width: "55%", ml: { md: 11, sm: 5, xs: 3 } }}>
                <Image src={pic25} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          columns={12}
          borderBottom={"1px solid yellow"}
          mt={4}
          pb={2}
          pr={1}
        >
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box m={0} p={0} display={"flex"}>
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                5
              </Typography>
              <h5 style={{color:'white',paddingTop:4}}>
                <span style={{ fontSize: "25px" }}>Parent's FAQs</span> <br /> <br/>
                <i>
                  {" "}
                  Document outlining <br /> Frequently Asked Questions
                </i>
              </h5>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%", mt: { sm: 2, xs: 1 } }}>
                <Image
                  src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                  alt=""
                  height={50}
                  width={50}
                />
              </Box>
              <Box
                sx={{
                  width: "35%",
                  mt: { sm: 2, xs: 1 },
                  ml: { sm: 1, xs: 2 },
                }}
              >
                <Link href="#" sx={{ color: "yellow" ,fontSize:'small'}}>
                  Download the file addressing <br /> FAQs for students and
                  parents
                </Link>
              </Box>
              <Box sx={{ width: "55%", ml: { md: 11, sm: 5, xs: 3 } }}>
                <Image src={pic31} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          columns={12}
          borderBottom={"1px solid yellow"}
          mt={4}
          pb={2}
          pr={1}
        >
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box m={0} p={0} display={"flex"}>
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                6
              </Typography>
              <h5 style={{color:'white',paddingTop:4}}>
                <span style={{ fontSize: "25px" }}>Book an info session</span>{" "}
                <br /> <br/>
                <i>
                  {" "}
                  For a limited time, all students are eligible <br /> for a
                  one-on-one counselling session
                </i>
              </h5>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%", mt: { sm: 2, xs: 1 } }}>
                {/* <ImportantDevicesRoundedIcon
                  fontSize="large"
                  sx={{
                    color: "yellow",
                    border: "1px solid yellow",
                    borderRadius: "50%",
                    p: 1,
                  }}
                /> */}

                <Image
                  src={counselsessionicon}
                  alt=""
                  height={45}
                  width={40}
                  style={{ textDecorationColor: "yellow" }}
                />
              </Box>
              <Box
                sx={{
                  width: "35%",
                  mt: { sm: 2, xs: 1 },
                  ml: { sm: 1, xs: 2 },
                }}
              >
                <Link href="#" sx={{ color: "yellow" ,fontSize:'small'}}>
                  Book an individual counselling session <br />
                  with a StudyVillage team-member
                </Link>
              </Box>
              <Box sx={{ width: "55%", ml: { md: 11, sm: 5, xs: 3 } }}>
                <Image src={pic30} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          columns={12}
          borderBottom={"1px solid yellow"}
          mt={4}
          pb={2}
          pr={1}
        >
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box m={0} p={0} display={"flex"}>
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                7
              </Typography>
              <h5 style={{color:'white',paddingTop:4}}>
                <span style={{ fontSize: "25px" }}>The Why File</span> <br /> <br/>
                <i>
                  {" "}
                  Why StudyVillage exists for
                  <br /> unfamiliar parents
                </i>
              </h5>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%", mt: { sm: 2, xs: 1 } }}>
                <Image
                  src={httpagentpage}
                  alt=""
                  height={40}
                  width={50}
                  style={{ textDecorationColor: "yellow" }}
                />
              </Box>
              <Box
                sx={{
                  width: "35%",
                  mt: { sm: 2, xs: 1 },
                  ml: { sm: 1, xs: 2 },
                }}
              >
                <Link href="#" sx={{ color: "yellow" ,fontSize:'small'}}>
                  Read the 'Why File' explaining how <br />
                  ndividual student support makes all the differnce
                </Link>
              </Box>
              <Box sx={{ width: "55%", ml: { md: 11, sm: 5, xs: 3 } }}>
                <Image src={pic35} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container columns={12} mt={4} pr={1}>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box m={0} p={0} display={"flex"}>
              <Typography
                sx={{ fontSize: "80px", color: "yellow", mr: 10, ml: 2 }}
              >
                8
              </Typography>
              <h5 style={{color:'white',paddingTop:4}}>
                <span style={{ fontSize: "25px" }}>Resolve Magazine</span>{" "}
                <br /> <br/>
                <i>
                  {" "}
                  A Magazine talking about the life of an
                  <br /> international student to send on - can be Co-branded
                  with your agency
                </i>
              </h5>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} m={0} p={1}>
            <Box display={"flex"} width={"100%"}>
              <Box sx={{ width: "10%", mt: { sm: 2, xs: 1 } }}>
                <Image
                  src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                  alt=""
                  height={50}
                  width={50}
                />
              </Box>
              <Box
                sx={{
                  width: "35%",
                  mt: { sm: 2, xs: 1 },
                  ml: { sm: 1, xs: 2 },
                }}
              >
                <Link href="#" sx={{ color: "yellow" ,fontSize:'small'}}>
                  Download latest Resolve Magazine <br /> for students parents
                </Link>
              </Box>
              <Box sx={{ width: "55%", ml: { md: 11, sm: 5, xs: 3 } }}>
                <Image src={pic36} alt="" height={100} width={200} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      </>
  )
}

export default Sv_campaign_resource