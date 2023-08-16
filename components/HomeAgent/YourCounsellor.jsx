import {
    Box,
    Checkbox,
    styled,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Typography
  } from "@mui/material";
  import TableCell, { tableCellClasses } from "@mui/material/TableCell";
  import { useState } from "react";
  import { useForm } from "react-hook-form";
  import axios from "axios";
  
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontWeight: "bold",
      width: 300,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#FAFAFA",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#E0E0E0",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  
  export default function YourCounsellor({ counsellorList, handlePortalAccess, createNewCounsellor }) {
    const [edit, setEdit] = useState(false);
  
    const { register, handleSubmit } = useForm();
    const onSubmit = async(data) => {
      createNewCounsellor(data);
    };
  
    return (
      <Box sx={{ m: 20, pb: 6 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
         {
           !edit && 
           <button className="counsellorCreateBtn" onClick={() => setEdit(true)} >
           Create Counsellor
         </button>
         }
        </Box>

        {edit && (
          <Box sx={{ my: 4 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{float: 'right'}}>
              <button className="cancelbtn"  onClick={()=> setEdit(false)}>Cancel</button>
              <input className="formSubmitBtn" type="submit" value="Create" />
              </Box>
              <Table sx={{ minWidth: 700, my: 3 }} aria-label="customized table">
                <TableBody>
                  <TableRow >
                    <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>First Name:</TableCell>
                    <TableCell sx={{border: 'none'}}>
                    <input className="agentFormInput" type='text'
                        {...register("First_Name")} />
                    </TableCell>
                  </TableRow>
  
                  <TableRow>
                    <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Last Name:</TableCell>
                    <TableCell sx={{border: 'none'}}>
                    <input className="agentFormInput" type='text'
                        {...register("Name")}
                      />
                    </TableCell>
                  </TableRow>
  
                  <TableRow>
                    <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Email:</TableCell>
                    <TableCell sx={{border: 'none'}}>
                    <input className="agentFormInput" type='text'
                        {...register("Email")}
                      />
                    </TableCell>
                  </TableRow>
  
                  <TableRow>
                    <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Mobile:</TableCell>
                    <TableCell sx={{border: 'none'}}>
                    <input className="agentFormInput" type='text'
                        {...register("Mobile")}
                      />
                    </TableCell>
                  </TableRow>    
                  <TableRow>
                    <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Phone:</TableCell>
                    <TableCell sx={{border: 'none'}}>
                    <input className="agentFormInput" type='text'
                        {...register("Phone")}
                      />
                    </TableCell>
                  </TableRow>
                  {/* <TableRow>
                    <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}> Portal Access:</TableCell>
                    <TableCell sx={{border: 'none'}}>
                    <Checkbox {...register("Portal_Access")} color="success" />              
                    </TableCell>
                  </TableRow> */}
                </TableBody>
              </Table>
            </form>
          </Box>
        )}

       <Typography sx={{ fontSize: "27px", fontWeight: "bold" }}>
       Your company’s counsellors
       </Typography>

       <Typography sx={{ fontSize: "18px", mt: 0.5 }}>
       Use this page to grant your education counsellors access to your Company’s StudyVillage portal. 
       To grant access to your staff members, tick the ‘portal access’ box and a notification with a temporary password will be sent.
       </Typography>

       <Typography sx={{ fontSize: "18px", mt: 0.5 }}>
       Please encourage any new counsellors to access our free counsellor training available from the Resources page. 
       </Typography>

        <Box>
        <TableContainer sx={{borderRadius: '12px', bgcolor: 'white', boxShadow: '0px 10px 22px rgba(0, 0, 0, 0.1)'}}>
            <Table sx={{minWidth: 700, my: 2 }} aria-label="customized table">
            <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">
               First Name
              </StyledTableCell>
              <StyledTableCell align="center">
               Last Name 
              </StyledTableCell>
              <StyledTableCell align="center">
               Email
              </StyledTableCell>
              <StyledTableCell align="center">
               Mobile
              </StyledTableCell>
              <StyledTableCell align="center">
               Phone
              </StyledTableCell>
              <StyledTableCell align="center">
               Portal Access
              </StyledTableCell>
            </StyledTableRow>
           </TableHead>
              <TableBody>
                {
                    counsellorList.length ?
                    counsellorList.map(counsellor => (
                        <StyledTableRow>
                            <StyledTableCell align="center">{counsellor.First_Name}</StyledTableCell>
                            <StyledTableCell align="center">{counsellor.Name}</StyledTableCell>
                            <StyledTableCell align="center">{counsellor.Email}</StyledTableCell>
                            <StyledTableCell align="center">{counsellor.Mobile}</StyledTableCell>
                            <StyledTableCell align="center">{counsellor.Phone}</StyledTableCell>
                            <StyledTableCell align="center"><Checkbox defaultChecked={counsellor.Portal_Access} onChange={(e)=> handlePortalAccess(counsellor.id, e.target.checked)} color="success" /></StyledTableCell>
                        </StyledTableRow>
                    ))
                    :
                    <Typography sx={{ml: 10, py:3, fontSize: "16px" }}>
                       No Counsellor Available
                    </Typography>
                }
               
              </TableBody>
            </Table>
            </TableContainer>
          </Box>

      </Box>
    );
  }
  