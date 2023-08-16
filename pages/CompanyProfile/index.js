import {
    Box,
    Button,
    Grid,
    IconButton,
    Table,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    tableCellClasses,
  } from "@mui/material";
  import React from "react";
  import MenuIcon from "@mui/icons-material/Menu";

  import MainMenu from "../../components/Agent_Portal_Component/MainMenu";
  import { useState } from "react";
  import { StateContex } from "../Context/StateProvider";
  import { useContext } from "react";
  // import { Link } from "react-router-dom";
  import Link from 'next/link'
  import MABECSlogo from "../../public/AgentPortal assets/assets/MABECSlogo.PNG";

  
  let datas = [
    { api_name: "Company Principal", field: "James Anderson" },
    { api_name: "Referral ID", field: 9238627185621753 },
    { api_name: "Key Contact email address", field: "svagent111@gmail.com" },
    { api_name: "Company address", field: "95 Collins St Melbourne" },
    { api_name: "Phone Number", field: "9781 5158" },
    { api_name: "Website", field: "www.google.com" },
  ];
  
  const keys = Object.keys(datas);
  const CompanyProfile = () => {
    const { open, setOpen } = useContext(StateContex);
    const [editDetails, setEditDetails] = useState(false);
    const [inputField, setInputFeild] = useState(datas);
  
    const handleUpdate = (e, i) => {
  
      const tempData = datas;
  
      tempData[i].field = e;
      setInputFeild(tempData);
    };
  
    return (
      <Box
        sx={{
          backgroundColor: "#121F28",
          height: "100%",
          overflowY: "hidden",
          pb:10
        }}
      >
        <Box sx={{ backgroundColor: "#121F28" }} height={"20vh"}>
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
              textAlign={"center"}
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
        <Box sx={{ p: { xs: 2, sm: 8, md: 8 }, pl: { md: 5, xs: 2 } }}>
          <h2>
            <i style={{ color: "white" }}>Your Company Profile</i>
          </h2>
          <hr style={{ border: "1px solid #C5D512", marginTop: "25px" }} />
          <Box
            sx={{
              color: "white",
              fontSize: "12px",
              paddingBottom: "40px",
              paddingTop: "35px",
            }}
          >
            <i
              style={{
                border: "1px solid #2FAFD4",
                padding: "10px 10px 10px 10px",
                borderRadius: "10px",
                fontWeight: "bold",
              }}
            >
              PLEASE KEEP YOUR DETAILS UP TO DATE
            </i>
          </Box>
  
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
              {inputField.length > 0 &&
                inputField.map((data, index) => {
                  return (
                    <TableRow
                      className="cellColor"
                      style={{
                        overflow: "hidden",
                        height: "10px",
                        whiteSpace: "nowrap ",
                      }}
                    >
                      <TableCell>
                        <b>{data.api_name}</b>
                      </TableCell>
                      <TableCell>
                        {!editDetails && data.field}
                        {editDetails && (
                          <TextField
                            defaultValue={data.field}
                            onChange={(e) => {
                              handleUpdate(e.target.value, index);
                            }}
                            sx={{
                              backgroundColor: "white",
                              m: 0,
                              p: 0,
                              "& .MuiOutlinedInput-root": { height: "30px" },
                            }}
                          />
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            onClick={() => {
              editDetails === false
                ? setEditDetails(true)
                : setEditDetails(false);
            }}
            sx={{
              mt: 3,
              backgroundColor: "#121F28",
              border: "1px solid #2FAFD4",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <i>{editDetails === false ? "Edit Details" : "Submit details"}</i>
          </Button>
        </Box>
      </Box>
    );
  };
  
  export default CompanyProfile;
  