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
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import Checkbox from '@mui/material/Checkbox';
import InfoIcon from '@mui/icons-material/Info';
import Link from "next/link";

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
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export default function Tasks({studentSupportersResp, svTasksResp, handleComplete}) {
const filterSvTask= svTasksResp.length ? svTasksResp.filter(item=> item.Task_Status === 'Not Completed') : [];
    return (
        <Box sx={{ m: "160px 115px", p: 5 }}>
            <h2 style={{ fontSize: "35px", fontWeight: "normal" }}>
                Hello  
                <span style={{marginLeft: '6px', fontWeight: "bold", color: "#A1AB23" }}>
                    {studentSupportersResp.Vendor_Name}
                </span>
            </h2>
            <h6 style={{ fontWeight: "normal", color: "#616161" }}>
            Your next tasks for all your supported students are listed below. Please confirm you have completed the task by the due date..
            </h6>
    
            <TableContainer sx={{my: 4, borderRadius: '10px', bgcolor: 'white', boxShadow: '0px 10px 22px rgba(0, 0, 0, 0.1)'}}>
                <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby='tableTitle'
                    size='medium'>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell >
                                Student
                            </StyledTableCell>
                            <StyledTableCell >
                            Task  
                            </StyledTableCell>
                            <StyledTableCell >
                            Complete task by
                            </StyledTableCell>
                            <StyledTableCell >
                            Info
                            </StyledTableCell>
                            <StyledTableCell>
                               Action
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {
                            filterSvTask.length
                            ?
                            filterSvTask.map(item=> (
                                <StyledTableRow>
                                    
                                    <StyledTableCell >
                                    <Link href={`mentors/Student/${item["Student.id"]}`}>
                                    <a target="_blank">
                                    {item.Student_Name}
                                    </a>
                                    </Link>
                                    </StyledTableCell>
                                    
                                    <StyledTableCell >
                                        {item.Task}
                                    </StyledTableCell>
                                    <StyledTableCell >
                                        {item.Task_Due_Date && moment(item.Task_Due_Date).format('DD-MM-YYYY')}
                                    </StyledTableCell>
                                    <StyledTableCell >
                                    <InfoIcon fontSize='large' sx={{color: '#aec1d1'}} />
                                    </StyledTableCell>
                                    <StyledTableCell >
                                    {/* <Checkbox onChange={()=>handleComplete(item.id)} color="success" /> */}
                                    {
                                        item.Task_Status === 'Not Completed' && <button onClick={()=> handleComplete(item.id)} style={{width: '180px', textAlign: 'center'}} className="supporterStudentBtn">Confirm Task Completed</button>
                                    }
                                    {
                                        item.Task_Status === 'Completed' && <button onClick={()=> handleUndoComplete(item.id)} style={{width: '180px', textAlign: 'center', backgroundColor: '#b30000'}} className="supporterStudentBtn">Undo Task Completion</button>
                                    }
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))
                            :
                            <Typography sx={{ fontSize: "16px", my: 2, textAlign: 'center', fontWeight: "bold" }}>
                            No Task Available
                            </Typography>
                        }
                        
                    </TableBody>
                </Table>
            </TableContainer>
            <SocialMediaLinks />
        </Box>
    );
}
