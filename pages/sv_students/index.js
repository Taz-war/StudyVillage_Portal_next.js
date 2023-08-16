import {
    Box,
    Grid,
    IconButton,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
    tableCellClasses,
  } from "@mui/material";
  import React from "react";
  import MenuIcon from "@mui/icons-material/Menu";
  import SearchIcon from "@mui/icons-material/Search";
import MainMenu from "../../components/Agent_Portal_Component/MainMenu";
import { useState } from "react";
import { StateContex } from "../Context/StateProvider";
import { useContext } from "react";
// import { Link } from "react-router-dom";
import Link from 'next/link'
import MABECSlogo from "../../public/AgentPortal assets/assets/MABECSlogo.PNG";
const datas = [
  {
    Student_Name: "James Anderson",
    SVId: 9238627185621753,
    country: "United Kingdom",
    email: "janderson@hack.com",
  },
  {
    Student_Name: "Shezan",
    SVId: 9238627185621753,
    country: "United Kingdom",
    email: "janderson@hack.com",
  },
  {
    Student_Name: "Mahbub",
    SVId: 9238627185621753,
    country: "United Kingdom",
    email: "janderson@hack.com",
  },
  {
    Student_Name: "James Anderson",
    SVId: 9238627185621753,
    country: "United Kingdom",
    email: "janderson@hack.com",
  },
  {
    Student_Name: "James Anderson",
    SVId: 9238627185621753,
    country: "United Kingdom",
    email: "janderson@hack.com",
  },
];
  
  const keys = Object.keys(datas);
  const StudyVillageStudents = () => {
    const {open,setOpen}=useContext(StateContex)
    const [search, setSearch] = useState("");
    return (
      <Box
      sx={{
        height: "100%",
        overflowY: "hidden",
        backgroundColor:'#121F28'
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
        <Box sx={{ p: { xs: 2, sm: 6, md: 6, lg: 6 },backgroundColor:'#121F28',height:'80vh' }}>
         
          <Grid container borderBottom={'1px solid yellow'} pb={4} mb={6}>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <Box sx={{ width: "60%", xs: { width: "20%" } }}>
                <h2>
                  <i style={{ color: "white" }}>Your StudyVillage students</i>
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
          {/* <hr style={{ border: "1px solid #C5D512", marginBottom: "30px" }} /> */}
          <TableContainer sx={{ maxWidth: "850px" }}>
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
                  Student Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  StudyVillage ID
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Destination country
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Email address
                </TableCell>
              </TableRow>
            </TableHead>

            {datas
              .filter((value) =>
                value.Student_Name.toLowerCase().includes(search)
              )
              .map((data, index) => {
                return (
                  <TableRow className="cellColor">
                    <TableCell>{data.Student_Name}</TableCell>
                    <TableCell>{data.SVId}</TableCell>
                    <TableCell>{data.country}</TableCell>
                    <TableCell>{data.email}</TableCell>
                  </TableRow>
                );
              })}
          </Table>
        </TableContainer>
        </Box>
      </Box>
    );
  };
  
  export default StudyVillageStudents;