import {
    Box,
    styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
import moment from "moment";
import Link from "next/link";
import SocialMediaLinksStudent from "../SocialMediaLinks/SocialMediaLinksStudent";
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: '#E0E0E0',
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  
  export default function YourStudents({studentRecords}) {
    
    return (
      <Box sx={{ m: 20 }}>
       <h2 style={{ fontSize: "35px", fontWeight: "normal", color: "#A1AB23" }}>
        Students you’re supporting: 
        </h2>
        <TableContainer sx={{my: 4, borderRadius: '10px', bgcolor: 'white', boxShadow: '0px 10px 22px rgba(0, 0, 0, 0.1)'}}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <TableHead>
              <StyledTableRow>
                <StyledTableCell >
                Student Name 
                </StyledTableCell>
                <StyledTableCell >
                University College
                </StyledTableCell>
                <StyledTableCell >
                Program type
                </StyledTableCell>
                <StyledTableCell >
                1st semester start date
                </StyledTableCell>
                <StyledTableCell >
                Final semester start date 
                </StyledTableCell>
                <StyledTableCell >
                Open hours balance 
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {
                studentRecords.length
                ?
                studentRecords.map(student =>(
                <StyledTableRow>
                   <StyledTableCell >
                      <Link href={`/mentors/Student/${student.id}`}>
                      <a target="_blank">
                      {student.Full_Name}
                      </a>
                      </Link>
                      </StyledTableCell>
                  
                  <StyledTableCell >{student.Institution}</StyledTableCell>
                  <StyledTableCell >{student.ELICOS_Product} {student.Product_Details}</StyledTableCell>
                  <StyledTableCell >{student.Institution_Semester_start_date && moment(student.Institution_Semester_start_date).format('DD-MM-YYYY')}</StyledTableCell>
                  <StyledTableCell ></StyledTableCell>
                  <StyledTableCell ></StyledTableCell>
                  <StyledTableCell >
                  </StyledTableCell>
                </StyledTableRow>
                ))
                :
                <Typography sx={{ fontSize: "16px", my: 2, textAlign: 'center', fontWeight: "bold" }}>
                   There are no students available
                </Typography>
              }
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{display: 'flex'}}>
        <SocialMediaLinksStudent />
        <Box sx={{display: 'flex', flexDirection: 'column', ml: 6}}>
          <button className="supporterStudentBtn">Supporter's Guide (PDF)</button>
          <button className="supporterStudentBtn">Video guides</button>
          <a href="https://desk.zoho.com/portal/teepeestudentservices/en/home" target="_blank" rel="noreferrer noopener"><button className="supporterStudentBtn">Report an issue</button></a>
        </Box>

        </Box>

        

      </Box>
    );
  }
  