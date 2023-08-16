import {
    Box,
    styled,
    Table,
    Button,
    TableBody,
    TableRow,
    Typography,
    TableContainer,
  } from "@mui/material";
  import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import axios from "axios";
  import { useState } from "react";
  import { useForm } from "react-hook-form";
  
  const StyledTableCell = styled(TableCell)(() => ({
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
  
  export default function StudentProfile({studentRecords}) {

   
    return (
      <Box sx={{ m: 20, pb: 6 }}>

          <Typography sx={{ fontSize: "27px", fontWeight: "bold" }}>
            Student Profile
          </Typography>

          <Box>
            <TableContainer sx={{mt: 3, borderRadius: '10px', bgcolor: 'white', boxShadow: '0px 10px 22px rgba(0, 0, 0, 0.1)'}} >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Name:</StyledTableCell>
                  <StyledTableCell>
                    {studentRecords.Full_Name}
                  </StyledTableCell>
                </StyledTableRow>
  
                <StyledTableRow>
                  <StyledTableCell>Institution (University/College):</StyledTableCell>
                  <StyledTableCell>{studentRecords.Institution}</StyledTableCell>
                </StyledTableRow>
  
                <StyledTableRow>
                  <StyledTableCell>Email address:</StyledTableCell>
                  <StyledTableCell>{studentRecords.Email}</StyledTableCell>
                </StyledTableRow>
  
                <StyledTableRow>
                  <StyledTableCell>Address in host country:</StyledTableCell>
                  <StyledTableCell>{studentRecords.Address_In_Host_Country}</StyledTableCell>
                </StyledTableRow>
  
                <StyledTableRow>
                  <StyledTableCell>City/Town/Region :</StyledTableCell>
                  <StyledTableCell>{studentRecords.Country_Region}</StyledTableCell>
                </StyledTableRow>
  
                <StyledTableRow>
                  <StyledTableCell>Contact Phone number:</StyledTableCell>
                  <StyledTableCell>
                    {studentRecords.Phone}
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell>Whatsapp:</StyledTableCell>
                  <StyledTableCell>
                    {studentRecords.WhatsApp}
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell>Education Agent (if applicable):</StyledTableCell>
                  <StyledTableCell>
                   
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell>Emergency Contact :</StyledTableCell>
                  <StyledTableCell>
                    
                  </StyledTableCell>
                </StyledTableRow>

               
              </TableBody>
            </Table>
            </TableContainer>
          </Box>
      </Box>
    );
  }
  