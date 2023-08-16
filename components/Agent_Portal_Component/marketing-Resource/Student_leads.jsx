import React from 'react'
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "@mui/material";
import Image from 'next/image'

const Student_leads = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121F28",
        pb:12,
        color: "white",
        maxWidth:'1050px',
        width:'100%',
        p:'12px',
        pl:{lg:6,xs:1},mt:0,pt:0
      }}
    >
   
        <Grid container columns={12} columnSpacing={1} rowSpacing={1} p={1} pr={{xs:3,md:3,sm:3}}>
          <Grid item lg={7} md={7} sm={12} xs={12} p={{lg:2,md:2,xs:0}} display={"flex"} textAlign={{lg:'left',md:'left',sm:'justify',xs:'justify'}}>
            <Box width={{xs:'100%'}} p={0}>
            <Typography fontSize={"small"} width={'100%'} >
              StudyVillage is an amazing way to make serious commission on top
              of your university commission.
              <br />
              <br /> (And do right by your students!). But all agents are busy,
              following up applications, bringing students in the door and
              keeping across complex university and visa requirements.
              <br />
              <br /> But there's a simple to work with us - let us do the work
              for you. You enter student and parent details into our form and we
              commence a non-intrusive campaign designed to inform prospects
              about StudyVillage and position your agency as a concerned
              full-service agency provider of choice. When recommend you check
              the box to see ALL correspondence that comes to and from your
              student. When we convert, the student into a paying StudyVillage
              program, we immediately pay you commission.
              <br />
              <br /> The campaign itself is not sales heavy - it's centred on
              providing a FREE resource that prepares them for living, studying
              and working in their destination country. We call it
              DestinationPREP. Our partners and agents (and for that matter,
              parents) are free to undertake the course itself.
              <br />
              <br />
              <span style={{ color: "yellow" }}>
                An EVEN EASIER way to work this (i.e. not even requiring you to
                enter their details is simply send them on our Destination Prep
                email, CC us in (at hr@studyvillage.org), and we’ll follow up,
                check in on progress, congratulate them on when they finish.
              </span>
            </Typography>
            </Box>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}  p={2} pl={{md:2,xs:3}} pt={4} pr={{md:6,sm:4,xs:1}} textAlign={{md:'right',xs:'center'}}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "10px",
                border: "1px solid white",
                height: 45,
                backgroundColor: "#FF914D",
                color: "white",
                width: {lg:319,xs:'100%'},
                mt:2,
                fontSize:'small'
                // ml:{md:'0 auto',xs:'0 auto'}
              }}
            >
             <b> SUBMIT AN INDIVIDUAL STUDENT LEAD</b>
            </Button>
            <br />
            <br />
            <Button
              variant="contained"
              sx={{
                borderRadius: "10px",
                border: "1px solid white",
                height: 45,
                p:1,
                backgroundColor: "#FF66C4",
                width: {lg:319,xs:'100%'},
                color: "white",
                fontSize:'small'
              }}
            >
             <b> SUBMIT BULK LEADS-CURRENT STUDENTS</b>
            </Button>
            <br />
            <br />
            <Button
              variant="contained"
              sx={{
                borderRadius: "10px",
                border: "1px solid white",
                height: 50,
                backgroundColor: "#38B6FF",
                color: "white",
                width: {lg:319,xs:'100%'},
                fontSize: "small",
                p: 0.2,
              }}
            >
             <b> SUBMIT BULK LEADS-LOST CONTACT STUDENTS</b>
            </Button>
            <br />
            <br />
            <br />
            <Box
              display={"flex"}
              width={{lg:"80%",xs:'100%'}}
              ml={{lg:6.5,xs:0}}
              mr={{lg:0,xs:0}}
              textAlign={"left"}
            >
              <Image
                src="https://cdn.icon-icons.com/icons2/3053/PNG/512/microsoft_excel_alt_macos_bigsur_icon_189978.png"
                alt=""
                height={50}
                width={60}
                // style={{ marginLeft: 15 }}
              />
              <Link href="#" sx={{ color: "yellow",fontSize:{md:'small',xs:'medium'},alignSelf:'center' }}>
                DownLoad simple StudyVillage <br /> upload templete
              </Link>
            </Box>
          </Grid>
        </Grid>
     
    </Box>
  )
}

export default Student_leads