import {
  Box,
  styled,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import axios from "axios";
import FormData from "form-data";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import SocialMediaLinksStudent from "../SocialMediaLinks/SocialMediaLinksStudent";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

export default function YourProfile({ supporterRecords }) {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);

    if (data.photo_file.length) {
      const formData = new FormData();
      formData.append("file", data.photo_file[0]);
      formData.append("id", supporterRecords.id);

      try {
        let res = await axios.post("/api/uploadfile", formData);
        if (res?.data?.status === 200) {
          console.log("image uploaded");
        }
      } catch (error) {
        alert(error);
      }
    }
    if (data.video_file.length) {
      const formData1 = new FormData();
      formData1.append("file", data.video_file[0]);
      formData1.append("id", supporterRecords.id);

      try {
        let res1 = await axios.post("/api/uploadfile", formData1);
        if (res1?.data?.status === 200) {
          console.log("video uploaded");
        }
      } catch (error) {
        alert(error);
      }
    }

    delete data.photo_file;
    delete data.video_file;
    data.id = supporterRecords.id;
    const newObj = {};
    newObj.moduleName = "Vendors";
    newObj.updated_data = data;

    const result = await axios.post("/api/updateRecord", newObj);

    if (result?.data?.ok) {
      alert(result?.data?.message);
      setLoading(false);
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <Box sx={{ m: 20, pb: 6 }}>
      {!edit && (
        <button
          style={{ float: "right" }}
          className="profileEditbtn"
          onClick={() => setEdit(true)}
        >
          Edit
        </button>
      )}
      {!edit && (
        <Box>
          <h2
            style={{ fontSize: "35px", fontWeight: "normal", color: "#A1AB23" }}
          >
            My Profile
          </h2>
          <Typography sx={{ fontWeight: "normal", my: 1, color: "#616161" }}>
            Please keep your profile up to date, especially your contact
            details!
          </Typography>
          <TableContainer
            sx={{
              mt: 3,
              mb: 4,
              borderRadius: "10px",
              bgcolor: "white",
              boxShadow: "0px 10px 22px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Table sx={{ minWidth: 700, px: 2 }} aria-label="customized table">
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell sx={{ fontWeight: "bold" }}>
                    Name
                  </StyledTableCell>
                  <StyledTableCell>
                    {supporterRecords.Vendor_Name}
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell sx={{ fontWeight: "bold" }}>
                    Address
                  </StyledTableCell>
                  <StyledTableCell>
                    {supporterRecords.Street}, {supporterRecords.City},{" "}
                    {supporterRecords.Country}
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell sx={{ fontWeight: "bold" }}>
                    Contact Phone number
                  </StyledTableCell>
                  <StyledTableCell>
                    {supporterRecords.Mobile_Phone}
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell sx={{ fontWeight: "bold" }}>
                    Whatsapp{" "}
                  </StyledTableCell>
                  <StyledTableCell>{supporterRecords.Whatsapp}</StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell sx={{ fontWeight: "bold" }}>
                    Email Address{" "}
                  </StyledTableCell>
                  <StyledTableCell>{supporterRecords.Email}</StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell sx={{ height: 200, fontWeight: "bold" }}>
                    Profile Description <br />
                    <span style={{ fontWeight: "normal", color: "#616161" }}>
                      (Please share a 200-300 word description of yourself.
                      Don't forget to include why you enjoy supporting students
                      and something about your approach to your role)
                    </span>
                  </StyledTableCell>
                  <StyledTableCell sx={{ height: 200 }}>
                    {supporterRecords.About_Student_Supporter}
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell sx={{ fontWeight: "bold" }}>
                    Profile Picture{" "}
                  </StyledTableCell>
                  <StyledTableCell>
                    {supporterRecords.Profile_Image_URL}
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell sx={{ fontWeight: "bold" }}>
                    Profile Video <br />
                    <span style={{ fontWeight: "normal", color: "#616161" }}>
                      (This is optional, but new students love to put a face and
                      voice to their supporter. No need to make a Spielburg
                      movie, but a 30 second introduction to you, your skills,
                      background and interests would be great here!)
                    </span>
                  </StyledTableCell>
                  <StyledTableCell>
                    {supporterRecords.Profile_Video_URL}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer
            sx={{
              my: 8,
              borderRadius: "10px",
              bgcolor: "white",
              boxShadow: "0px 10px 22px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              sx={{
                ml: 1.9,
                mt: 1,
                fontSize: "20px",
                fontWeight: "bold",
                color: "#A1AB23",
              }}
            >
              Bank Details <br />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "#616161",
                }}
              >
                Please ensure these details are accurate. We process supporter
                payments every fortnight
              </span>
            </Typography>

            <Table sx={{ minWidth: 700, my: 1 }} aria-label="customized table">
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell sx={{ fontWeight: "bold" }}>
                    Bank Name{" "}
                  </StyledTableCell>
                  <StyledTableCell>
                    {supporterRecords.Bank_Name}
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell sx={{ fontWeight: "bold" }}>
                    SWIFT CODE
                  </StyledTableCell>
                  <StyledTableCell>
                    {supporterRecords.Swift_Code}
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell sx={{ fontWeight: "bold" }}>
                    Account Name{" "}
                  </StyledTableCell>
                  <StyledTableCell>
                    {supporterRecords.Account_Name}
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell sx={{ fontWeight: "bold" }}>
                    BSB
                  </StyledTableCell>
                  <StyledTableCell>{supporterRecords.BSB}</StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell sx={{ fontWeight: "bold" }}>
                    Account Number
                  </StyledTableCell>
                  <StyledTableCell>
                    {supporterRecords.Account_Number}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {edit &&
        (loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Image
              width={150}
              height={150}
              src="/loader.gif"
              alt="loader gif"
            />
          </Box>
        ) : (
          <Box sx={{ my: 4 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ float: "right" }}>
                <button className="cancelbtn" onClick={() => setEdit(false)}>
                  Cancel
                </button>
                <input className="formSubmitBtn" type="submit" value="Save" />
              </Box>
              <Table
                sx={{ minWidth: 700, my: 3 }}
                aria-label="customized table"
              >
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Name
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      <input
                        className="agentFormInput"
                        type="text"
                        defaultValue={supporterRecords.Vendor_Name}
                        {...register("Vendor_Name")}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Street
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      <input
                        className="agentFormInput"
                        type="text"
                        defaultValue={supporterRecords.Street}
                        {...register("Street")}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      City
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      <input
                        className="agentFormInput"
                        type="text"
                        defaultValue={supporterRecords.City}
                        {...register("City")}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Country
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      <input
                        className="agentFormInput"
                        type="text"
                        defaultValue={supporterRecords.Country}
                        {...register("Country")}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Contact Phone number:
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      <input
                        className="agentFormInput"
                        type="text"
                        defaultValue={supporterRecords.Mobile_Phone}
                        {...register("Mobile_Phone")}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Whatsapp
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      <input
                        className="agentFormInput"
                        type="text"
                        defaultValue={supporterRecords.Whatsapp}
                        {...register("Whatsapp")}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        pt: 3,
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Profile Photo Upload
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      <input
                        className="agentFormInput"
                        type="file"
                        {...register("photo_file")}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        pt: 3,
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Profile Video Upload
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      <input
                        className="agentFormInput"
                        type="file"
                        {...register("video_file")}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        pt: 3,
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Bank Name
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      <input
                        className="agentFormInput"
                        type="text"
                        defaultValue={supporterRecords.Bank_Name}
                        {...register("Bank_Name")}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        pt: 3,
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Swift Code
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      <input
                        className="agentFormInput"
                        type="text"
                        defaultValue={supporterRecords.Swift_Code}
                        {...register("Swift_Code")}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        pt: 3,
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Account Name
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      <input
                        className="agentFormInput"
                        type="text"
                        defaultValue={supporterRecords.Account_Name}
                        {...register("Account_Name")}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        pt: 3,
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      BSB
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      <input
                        className="agentFormInput"
                        type="text"
                        defaultValue={supporterRecords.BSB}
                        {...register("BSB")}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        pt: 3,
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Account Number
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      <input
                        className="agentFormInput"
                        type="text"
                        defaultValue={supporterRecords.Account_Number}
                        {...register("Account_Number")}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </form>
          </Box>
        ))}
      <SocialMediaLinksStudent />
    </Box>
  );
}
