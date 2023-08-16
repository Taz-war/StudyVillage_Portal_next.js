import Image from "next/image";
import tempProfileImg from "../../assets/Student/tempProfileImg.jpg";
import bgImg from "../../assets/Student/backgroundImg.png";
import callicon from "../../assets/Student/callicon.svg";
import emailicon from "../../assets/Student/emailicon.svg";
import messengericon from "../../assets/Student/messengericon.svg";
import skypeicon from "../../assets/Student/skypeicon.svg";
import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

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

export default function YourSupporter({ supporterRecords }) {
  return (
    <Box sx={{ m: 20, pb: 6 }}>
      <Typography sx={{ fontSize: 23, fontWeight: "bold" }}>
        Your Student Supporter
      </Typography>
      <Box
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundPosition: "center",
          borderRadius: "10px",
          width: "100%",
          height: 140,
          marginTop: "20px",
        }}
      ></Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ position: "relative", bottom: 20, left: 20 }}>
          {supporterRecords.Profile_Image_URL ? (
            <Image
              src={supporterRecords.Profile_Image_URL}
              height={70}
              width={80}
            />
          ) : (
            <Image src={tempProfileImg} height={70} width={80} />
          )}
        </Box>
        <Box sx={{ ml: 4, mt: 1 }}>
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            {supporterRecords.Vendor_Name}
          </Typography>
          <Typography sx={{ color: "rgba(0, 0, 0, 0.6)", fontSize: 14 }}>
            Nibh enim vestibulum quam amet ipsum vulputate egestas enim enim.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ my: 3, display: "flex", width: "100%" }}>
        <Box
          sx={{
            p: 2,
            width: "50%",
            height: 400,
            mr: 3
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            Servicing Students From
          </Typography>
          <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
          {supporterRecords?.Servicing_Students_From}
          </Typography>

          <Typography sx={{ mt: 1, fontWeight: "bold" }}>Education</Typography>
          <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
            Tristique aliquet curabitur proin cursus mauris. Eleifend dis
            aliquet sed velit risus. Sit venenatis bibendum sed habitant.{" "}
          </Typography>

          <hr style={{ width: "93%" }} />

          <Typography sx={{ fontWeight: "bold" }}>
            Approach with international students
          </Typography>
          <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
           {supporterRecords?.approach_with_International_Students}
          </Typography>

          <Typography sx={{ mt: 1, fontWeight: "bold" }}>
            About myself
          </Typography>
          <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
            {supporterRecords?.About_Student_Supporter}
          </Typography>
        </Box>
        <Box
          sx={{
            p: 2,
            width: "50%",
            height: 400,
            mr: 3,
            bgcolor: "#FBFCEE"
          }}
        >
          <Typography sx={{ mb: 2, fontWeight: "bold" }}>
            Lana’s Contract Details
          </Typography>

          <Box sx={{ display: "flex", mb: 2 }}>
            <Image src={callicon} />
            <Box sx={{ ml: 2 }}>
              <Typography sx={{fontWeight: 'bold'}}>Mobile and Whatapps</Typography>
              <Typography sx={{color: 'rgba(0, 0, 0, 0.6)'}}>{supporterRecords?.Mobile_Phone}</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", mb: 2 }}>
            <Image src={emailicon} />
            <Box sx={{ ml: 2 }}>
              <Typography sx={{fontWeight: 'bold'}}>Email</Typography>
              <Typography sx={{color: 'rgba(0, 0, 0, 0.6)'}}>{supporterRecords?.Email}</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", mb: 2 }}>
            <Image src={messengericon}/>
            <Box sx={{ ml: 2 }}>
              <Typography sx={{fontWeight: 'bold'}}>Messenger</Typography>
              <Typography sx={{color: 'rgba(0, 0, 0, 0.6)'}}>{supporterRecords?.Messenger}</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", mb: 2 }}>
            <Image src={skypeicon}  />
            <Box sx={{ ml: 2 }}>
              <Typography sx={{fontWeight: 'bold'}}>Skype</Typography>
              <Typography sx={{color: 'rgba(0, 0, 0, 0.6)'}}>{supporterRecords?.Skype}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <h5 style={{ marginBottom: "20px", fontSize: "23px" }}>
        About your StudyVillage Student Supporter{" "}
      </h5>
      {supporterRecords.Profile_Image_URL && (
        <Box
          sx={{
            width: 300,
            height: 250,
            bgcolor: "white",
            boxShadow: "0px 10px 22px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Image
            src={supporterRecords.Profile_Image_URL}
            alt="logo"
            width={300}
            height={250}
          />
        </Box>
      )}
      <TableContainer
        sx={{
          mt: 3,
          width: 700,
          borderRadius: "10px",
          bgcolor: "white",
          boxShadow: "0px 10px 22px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Table
          sx={{ width: 700, my: 2 }}
          aria-labelledby="tableTitle"
          size="medium"
        >
          <TableBody>
            <StyledTableRow>
              <StyledTableCell sx={{ width: "300px" }}>Name</StyledTableCell>
              <StyledTableCell>{supporterRecords.Vendor_Name}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell>City/Town/Region</StyledTableCell>
              <StyledTableCell>{supporterRecords.City}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell>Contact Phone number</StyledTableCell>
              <StyledTableCell>{supporterRecords.Mobile_Phone}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell>Whatsapp</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell>Email address</StyledTableCell>
              <StyledTableCell>{supporterRecords.Email}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell>Qualifications</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell sx={{ height: "200px" }}>
                Profile Description
              </StyledTableCell>
              <StyledTableCell>
                {supporterRecords.About_Student_Supporter}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell>Profile Video</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer> */}
    </Box>
  );
}
