import {
  Box,
  Button,
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
import Image from "next/image";
import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SocialMediaLinksStudent from "../SocialMediaLinks/SocialMediaLinksStudent";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Image1 from "../../assets/Student/image 2.png";
import Image2 from "../../assets/Student/image 3.png";
import Image3 from "../../assets/Student/image 4.png";

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

export default function Events({ studentsResp, svTasksResp, allAssets }) {
  let assetsMap = new Map();
  allAssets?.map((item) => assetsMap.set(item.Name, item));

  const [nextEvent, setNextEvent] = useState();

  useEffect(() => {
    const totalDate = svTasksResp?.map((item) => item?.Task_Due_Date);

    const filterDate = totalDate?.filter((item) => {
      if (new Date(item) >= new Date()) {
        return item;
      }
    });

    let count = 0;
    if (filterDate.length) {
      while (!nextEvent) {
        var new_date = moment(moment(), "YYYY-MM-DD").add(count, "days");
        if (filterDate.includes(moment(new_date).format("YYYY-MM-DD"))) {
          setNextEvent(moment(new_date).format("DD-MM-YYYY"));
          break;
        }
        count = count + 1;
      }
    }
  }, []);

  return (
    <Box sx={{ m: "160px 115px", pb: 5 }}>
      <h2 style={{ fontSize: "35px", fontWeight: "normal" }}>
        Hello,{" "}
        <span style={{ fontWeight: "bold", color: "#A1AB23" }}>
          {studentsResp.Full_Name}
        </span>
      </h2>
      <h6 style={{ fontWeight: "normal", color: "#616161" }}>
        Your next mentoring events:{" "}
        <span style={{ fontWeight: "bold" }}>{nextEvent}</span>
      </h6>

      <TableContainer
        sx={{
          borderRadius: "10px",
          bgcolor: "white",
          boxShadow: "0px 10px 22px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size="medium"
        >
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">Next Event</StyledTableCell>
              <StyledTableCell align="center">Info</StyledTableCell>
              <StyledTableCell align="center">
                Next event action
              </StyledTableCell>
              <StyledTableCell align="center">
                Approx. completion date*
              </StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {svTasksResp?.[0]?.Task_Status !== "Completed" ? (
              <StyledTableRow>
                <StyledTableCell align="center">
                  It's time to complete your Self-survey here
                </StyledTableCell>
                <StyledTableCell align="center">
                  <a
                    href={assetsMap.get("Self-Survey")?.Video_URL}
                    target="_blank"
                  >
                    <PlayCircleIcon
                      sx={{
                        color: "#A1AB23",
                        "&:hover": { color: "#A1AB23" },
                      }}
                    />
                  </a>
                  <a
                    href={assetsMap.get("Self-Survey")?.PDF_URL}
                    target="_blank"
                  >
                    <PictureAsPdfIcon
                      sx={{ color: "#ff4a3d", "&:hover": { color: "#fa3123" } }}
                    />
                  </a>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    sx={{
                      bgcolor: "#2E7D32",
                      borderRadius: "15px",
                      "&:hover": { bgcolor: "#2E7D32" },
                    }}
                    variant="contained"
                  >
                    Complete Task
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {svTasksResp?.[0]?.Task_Due_Date &&
                    moment(svTasksResp?.[0]?.Task_Due_Date).format(
                      "DD-MM-YYYY"
                    )}
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              <Typography sx={{ p: 2 }}>No Task Avaiable</Typography>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h4 style={{ fontSize: "23px", fontWeight: "normal" }}>
          Open Hours Balance :{" "}
          <span style={{ fontWeight: "bold", color: "#A1AB23" }}>
            2:00 hrs{" "}
          </span>
        </h4>
        <SocialMediaLinksStudent />
      </div>
      <Box sx={{ mt: 3, display: "flex" }}>
        <Box sx={{ mr: 3 }}>
          <Image src={Image1} />
        </Box>
        <Box sx={{ mr: 3 }}>
          <Image src={Image2} />
        </Box>
        <Box>
          <a
            href="https://workdrive.zohoexternal.com/external/f6f2d91a85ed0194e544e0adfbd8f28f548c6201e6e45be96bbfc2342a3fa301"
            target="_blank"
          >
            <Image src={Image3} />
          </a>
        </Box>
      </Box>
      <Box sx={{display: 'flex', width: '50.2%', my: 2, background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #0288D1', p: 2}}>
        <ErrorOutlineIcon sx={{mt: 1.3, mr: 1}} />
        
          <Typography>
            *This date is indicative only. Your arrangements with your student
            supporter will determine when these events take place.
          </Typography>
        
      </Box>
    </Box>
  );
}
