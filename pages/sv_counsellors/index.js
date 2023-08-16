import {
    Box,
    Button,
    Grid,
    IconButton,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    tableCellClasses,
  } from "@mui/material";
  import React from "react";
  import MenuIcon from "@mui/icons-material/Menu";

  import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import MainMenu from "../../components/Agent_Portal_Component/MainMenu";
import { StateContex } from "../Context/StateProvider";
import { useContext } from "react";
// import { Link } from "react-router-dom";
import Link from 'next/link';
import MABECSlogo from "../../public/AgentPortal assets/assets/MABECSlogo.PNG";

const datas = [
  {
    First_name: "Katy",
    Last_name: "Holmes",
    email: "katy@dreamagent.com",
    mobile: "+92 4567 8943",
    Telephone: "+92 123 45556",
    Portal_access: "Granted",
    status: "Complete",
  },
  {
    First_name: "Shezan",
    Last_name: "Holmes",
    email: "katy@dreamagent.com",
    mobile: "+92 4567 8943",
    Telephone: "+92 123 45556",
    Portal_access: "Granted",
    status: "Complete",
  },
  {
    First_name: "Katy",
    Last_name: "Holmes",
    email: "katy@dreamagent.com",
    mobile: "+92 4567 8943",
    Telephone: "+92 123 45556",
    Portal_access: "Granted",
    status: "Complete",
  },
  {
    First_name: "Katy",
    Last_name: "Holmes",
    email: "katy@dreamagent.com",
    mobile: "+92 4567 8943",
    Telephone: "+92 123 45556",
    Portal_access: "Granted",
    status: "Complete",
  },
];
  
  const keys = Object.keys(datas);
  const Counsellors = () => {
    const {open,setOpen}=useContext(StateContex)
    const [search, setSearch] = useState("");
    return (
      <Box
      sx={{
        height: "100%",
        overflowY: "hidden",
        backgroundColor:'#121F28',
        pb:5
      }}
      >
        <Box sx={{ backgroundColor: "#121F28" }} height={"20vh"}>
        <Grid container columns={12}>
          <Grid item lg={9} md={9} sm={9} xs={8} textAlign={"left"} p={5} pt={{lg:5,md:3,xs:1}}>
            <Link href={"/HomePage"}>
              <img
                src="https://i.postimg.cc/tgNXTJck/svLogo.png"
                alt=""
                width={200}
              />
            </Link>
          </Grid>
          <Grid item  xs={1}  pt={6}  mt={1} textAlign={'center'}>
            <Box maxWidth={'100px'} maxHeight={'95px'} width={'100%'} height={{md:'auto',xs:'auto'}} textAlign={'center'}>

            <img src={MABECSlogo} alt="" width={'100%' } height={'100%'}/>
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
            sx={{ p: { xs: 2, sm: 3, md: 4, lg: 5 }}}
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
        <Box sx={{ p: { xs: 2, sm: 6, md: 6, lg: 6 } }}>
          
          
          <Grid container>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <Box sx={{ width: "60%", xs: { width: "20%" } }}>
                <h2>
                  <i style={{ color: "white" }}>Your Counsellors</i>
                </h2>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Box
                sx={{
                  width: "95%",
                  paddingRight: "5px",
                  height: "40px",
                  border: "1px solid #2FAFD4",
                  paddingTop: "2px",
                  borderRadius: "10px",
                  display: "flex",
                }}
              >
                <SearchIcon
                  sx={{
                    color: "#2FAFD4",
                    width: "40px",
                    height: "40px",
                    paddingLeft: "8px",
                  }}
                />
                <b
                  style={{
                    color: "#2FAFD4",
                    paddingTop: "5px",
                    fontSize: "15px",
                  }}
                >
                  SEARCH
                </b>
                <input
                onChange={(e) => setSearch(e.target.value)}
                  style={{
                    backgroundColor: "white",
                    maxHeight: "60%",
                    width: "74%",
  
                    marginTop: "6px",
                    border: "0px solid white",
                    marginLeft: "6px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <hr style={{ border: "1px solid #C5D512", marginBottom: "30px" }} />
          <Box sx={{ width:{md:'60%',xs:'100%'} }}>
            <p style={{ color: "#C5D512", fontSize: "15px" }}>
              Use this page to grant your education counsellors access to your
              Company’s StudyVillage portal. To grant access to your staff
              members, tick the ‘portal access’ box and a notification with a
              temporary password will be sent. Please encourage any new
              counsellors to access our free counsellor training available from
              the Resources page.
            </p>
          </Box>
          <TableContainer sx={{ maxWidth: "950px", paddingBottom: "40px" }}>
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none",
              },
              borderCollapse: "separate",
              borderSpacing: "0px 10px",
            }}
          >
            <TableHead sx={{ bgcolor: "white" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  First Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Last Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Email address
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px",whiteSpace:'nowrap' }}>
                  Mobile/Cell number <br /> (optional)
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px",whiteSpace:'nowrap'  }}>
                  Telephone number
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Portal access
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  StudyVillage training status
                </TableCell>
              </TableRow>
            </TableHead>

            {datas
              .filter((value) =>
                value.First_name.toLowerCase().includes(search)
              )
              .map((data, index) => {
                return (
                  <TableRow className="cellColor">
                    <TableCell>{data.First_name}</TableCell>
                    <TableCell>{data.Last_name}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.mobile}</TableCell>
                    <TableCell>{data.Telephone}</TableCell>
                    <TableCell>{data.Portal_access}</TableCell>
                    <TableCell>{data.status}</TableCell>
                  </TableRow>
                );
              })}
          </Table>
        </TableContainer>
        <Box style={{ paddingBottom: "22px" }}>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#FF914D",
              border: "1px solid #2FAFD4",
              fontWeight: "bold",
              borderRadius: "15px",
              fontStyle: "italic",
              paddingLeft: "50px",
              paddingRight: "50px",
              marginRight: "20px",
              marginBottom: { xs: "15px", sm: "0px" },
            }}
          >
            ADD A COUNSELLOR
          </Button>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#FF66C4",
              border: "1px solid #2FAFD4",
              fontWeight: "bold",
              borderRadius: "15px",
              paddingLeft: "50px",
              paddingRight: "50px",
              fontStyle: "italic",
            }}
          >
            DELETE A COUNSELLOR
          </Button>
        </Box>
        </Box>
      </Box>
    );
  };
  
  export default Counsellors;