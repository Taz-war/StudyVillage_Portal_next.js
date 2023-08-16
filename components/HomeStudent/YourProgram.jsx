import wheel from "../../assets/img/your-program.png";
import Image from "next/image";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
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
import { useState } from "react";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

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
    backgroundColor: "#E0E0E0",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function YourProgram({
  elicosImageDesc,
  awardImageDesc,
  elicosTable,
  productTable,
}) {
  const [stage, setStage] = useState("Award");
  // console.log(elicosImageDesc);
  // console.log(awardImageDesc);
  return (
    <Box sx={{ m: 20, pb: 6 }}>
      <Typography sx={{ fontSize: 22, fontWeight: "bold" }}>
        Your Happy and, Healthy and Wise Program
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <ButtonGroup
          variant="contained"
          // sx={{bgcolor: '#A1AB23'}}
          aria-label="outlined primary button group"
        >
          <Button sx={{bgcolor: '#A1AB23', borderColor: '#A1AB23', '&:hover': {bgcolor: '#7f871f'}}} onClick={() => setStage("Elicos")}>Elicos</Button>
          <Button sx={{bgcolor: '#A1AB23', borderColor: '#A1AB23', '&:hover': {bgcolor: '#7f871f'}}} onClick={() => setStage("Award")}>Award</Button>
        </ButtonGroup>
      </Box>
      {/* <Image width={350} height={300} src="" /> */}
      {stage === "Award" ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container sx={{ m: 0 }} maxWidth="lg" spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                width="460"
                height="360"
                src={awardImageDesc?.Image_URL_Portal}
                alt="award-logo"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                Program Description
              </Typography>
              <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
                {awardImageDesc?.Description}
              </Typography>
            </Grid>
          </Grid>

          <Box>
            <Typography sx={{ mt:4, mb: 2, fontWeight: "bold", fontSize: 22 }}>
              Modules:
            </Typography>
            <Grid container sx={{ m: 0 }} maxWidth="lg" spacing={2}>
              {productTable?.map((item) => (
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 2,
                      background: "#FFFFFF",
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                      borderRadius: "4px",
                      height: 300
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: "bold", fontSize: 20, mb: 1 }}
                    >
                      {item?.Name}
                    </Typography>
                    <Typography sx={{ mb: 1.5, color: "rgba(0, 0, 0, 0.6)" }}>
                      {item?.Description}
                    </Typography>
                    <a href={item?.PDF_URL} target="_blank">
                      <PictureAsPdfIcon
                        sx={{
                          mr: 2,
                          color: "#ff4a3d",
                          "&:hover": { color: "#fa3123" },
                        }}
                      />
                    </a>
                    <a href={item?.Video_URL} target="_blank">
                      <PlayCircleIcon
                        sx={{
                          color: "#A1AB23",
                          "&:hover": { color: "#A1AB23" },
                        }}
                      />
                    </a>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container sx={{ m: 0 }} maxWidth="lg" spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                width="460"
                height="360"
                src={elicosImageDesc?.Image_URL_Portal}
                alt="award-logo"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                Program Description
              </Typography>
              <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
                {elicosImageDesc?.Description}
              </Typography>
            </Grid>
          </Grid>

          <Box>
            <Typography sx={{mt:4, mb: 2, fontWeight: "bold", fontSize: 22 }}>
              Modules:
            </Typography>
            <Grid container sx={{ m: 0 }} maxWidth="lg" spacing={2}>
              {elicosTable?.map((item) => (
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 2,
                      background: "#FFFFFF",
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                      borderRadius: "4px",
                      height: 280
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: "bold", fontSize: 20, mb: 1 }}
                    >
                      {item?.Name}
                    </Typography>
                    <Typography sx={{ mb: 1.5, color: "rgba(0, 0, 0, 0.6)" }}>
                      {item?.Description}
                    </Typography>
                    <a href={item?.PDF_URL} target="_blank">
                      <PictureAsPdfIcon
                        sx={{
                          mr: 2,
                          color: "#ff4a3d",
                          "&:hover": { color: "#fa3123" },
                        }}
                      />
                    </a>
                    <a href={item?.Video_URL} target="_blank">
                      <PlayCircleIcon
                        sx={{
                          color: "#A1AB23",
                          "&:hover": { color: "#A1AB23" },
                        }}
                      />
                    </a>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}
    </Box>
  );
  // return (
  //   <Box sx={{ m: 20, pb: 6 }}>
  //     {/* <h5 style={{ fontSize: "18px", fontWeight: "normal", color: "#616161" }}>
  //     You are currently in the {enrolmentRecords.Life_Cycle_Stage_ELICOS} {enrolmentRecords.Life_Cycle_Stage} Module of your {studentRecords.How_many_total_semesters_will_this_course_take_to} semester StudyVillage Program
  //     </h5> */}
  //     {/* {stageImg && <Image width="460" height="360" src="https://files-accl.zohoexternal.com/public/workdrive-external/download/6gi080bf35a64b8fb4efbb0dd9840f2e9362a?x-cli-msg=%7B%22isFileOwner%22%3Afalse%2C%22version%22%3A%221.0%22%7D" alt="logo" />} */}

  //     <h6 style={{ fontSize: "26px" }}>Your Program: </h6>
  //     <TableContainer
  //       sx={{
  //         borderRadius: "10px",
  //         bgcolor: "white",
  //         boxShadow: "0px 10px 22px rgba(0, 0, 0, 0.1)",
  //       }}
  //     >
  //       <Table
  //         sx={{ minWidth: 750, my: 5 }}
  //         aria-labelledby="tableTitle"
  //         size="medium"
  //       >
  //         <TableHead>
  //           <StyledTableRow>
  //             <StyledTableCell align="center">
  //               Happy, Healthy & Wise Module Explainer videos
  //             </StyledTableCell>
  //             <StyledTableCell align="center">
  //               Sample outlines (link to PDF)
  //             </StyledTableCell>
  //           </StyledTableRow>
  //         </TableHead>
  //         <TableBody>
  //           {tableData?.map((item) => (
  //             <StyledTableRow>
  //               <StyledTableCell>
  //                 <Typography sx={{ fontWeight: "bold", mb: 1 }}>
  //                   {item.Name.replace("Details", "")}
  //                 </Typography>
  //                 <Typography>{item.Description}</Typography>
  //               </StyledTableCell>
  //               <StyledTableCell sx={{ width: 300 }} align="center">
  //                 <a href={item.Sample_Outline_URL} target="_blank">
  //                   Click Here
  //                 </a>
  //               </StyledTableCell>
  //             </StyledTableRow>
  //           ))}
  //           {/* <StyledTableRow>
  //             <StyledTableCell align="center">
  //               {" "}
  //               ELICOS A <br />​ (EA_description)
  //             </StyledTableCell>
  //             <StyledTableCell align="center">ELICOS A</StyledTableCell>
  //           </StyledTableRow>

  //           <StyledTableRow>
  //             <StyledTableCell align="center">
  //               {" "}
  //               ELICOS B <br />​ (EB_description)
  //             </StyledTableCell>
  //             <StyledTableCell align="center">ELICOS B</StyledTableCell>
  //           </StyledTableRow>

  //           <StyledTableRow>
  //             <StyledTableCell align="center">
  //               {" "}
  //               ELICOS C <br />​ (EC_description)
  //             </StyledTableCell>
  //             <StyledTableCell align="center">ELICOS C</StyledTableCell>
  //           </StyledTableRow>

  //           <StyledTableRow>
  //             <StyledTableCell align="center">
  //               {" "}
  //               ELICOS D <br />​ (ED_description)
  //             </StyledTableCell>
  //             <StyledTableCell align="center">ELICOS D</StyledTableCell>
  //           </StyledTableRow>

  //           <StyledTableRow>
  //             <StyledTableCell align="center">
  //               {" "}
  //               ELICOS E <br />​ (EE_description)
  //             </StyledTableCell>
  //             <StyledTableCell align="center">ELICOS E</StyledTableCell>
  //           </StyledTableRow> */}
  //         </TableBody>
  //       </Table>
  //     </TableContainer>

  //     {/* <h2 style={{ fontSize: "17px", fontWeight: "bold" }}>
  //       Past modules:{" "}
  //       <span style={{ fontWeight: "normal", color: "#A1AB23" }}>
  //         (include completed individualised modules)
  //       </span>
  //     </h2>
  //     <h6 style={{ fontWeight: "normal", color: "#616161" }}>
  //       Access you The following Outlines track your StudyVillage history
  //     </h6> */}
  //   </Box>
  // );
}
