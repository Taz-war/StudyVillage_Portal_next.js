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
import Image from "next/image";
import tempProfileImg from "../../assets/Student/tempProfileImg.jpg";
import bgImg from "../../assets/Student/backgroundImg.png";
import callicon from "../../assets/Student/callicon.svg";
import emailicon from "../../assets/Student/emailicon.svg";
import messengericon from "../../assets/Student/messengericon.svg";
import skypeicon from "../../assets/Student/skypeicon.svg";

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

export default function YourProfile({ studentRecords, parentRecords }) {
  const [edit, setEdit] = useState(false);

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data) => {
    data.id = studentRecords.id;
    const newObj = {};
    newObj.moduleName = "Contacts";
    newObj.updated_data = data;

    const result = await axios.post("/api/updateRecord", newObj);

    if (result?.data?.ok) {
      alert(result?.data?.message);
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <Box sx={{ m: 20, pb: 6 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: 23, fontWeight: "bold" }}>
          Your Profile
        </Typography>
        {!edit && (
          <button className="profileEditbtn" onClick={() => setEdit(true)}>
            Edit
          </button>
        )}
      </Box>
      {!edit && (
        <Box>
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
              {studentRecords?.Profile_Image_URL ? (
                <Image
                  src={studentRecords?.Profile_Image_URL}
                  height={70}
                  width={80}
                />
              ) : (
                <Image src={tempProfileImg} height={70} width={80} />
              )}
            </Box>
            <Box sx={{ ml: 4, mt: 1 }}>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                {studentRecords?.Full_Name}
              </Typography>
              <Typography sx={{ color: "rgba(0, 0, 0, 0.6)", fontSize: 14 }}>
                Nibh enim vestibulum quam amet ipsum vulputate egestas enim
                enim.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ my: 3, display: "flex", width: "100%" }}>
            <Box
              sx={{
                p: 2,
                width: "50%",
                height: 400,
                mr: 3,
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                Institution (University/College)
              </Typography>
              <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
                {studentRecords?.Institution}
              </Typography>

              <Typography sx={{ mt: 1, fontWeight: "bold" }}>
                Address in host country
              </Typography>
              <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
                {studentRecords.Address_In_Host_Country}
              </Typography>

              <hr style={{ width: "93%" }} />

              <Typography sx={{ fontWeight: "bold" }}>
                City/Town/Region
              </Typography>
              <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
                {studentRecords.Country_Region}
              </Typography>

              <Typography sx={{ mt: 1, fontWeight: "bold" }}>
                About myself
              </Typography>
              <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
                {studentRecords?.About_Student_Supporter}
              </Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                width: "50%",
                height: 400,
                mr: 3,
                bgcolor: "#FBFCEE",
              }}
            >
              <Typography sx={{ mb: 2, fontWeight: "bold" }}>
                Lana’s Contract Details
              </Typography>

              <Box sx={{ display: "flex", mb: 2 }}>
                <Image src={callicon} />
                <Box sx={{ ml: 2 }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Mobile and Whatapps
                  </Typography>
                  <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
                    {studentRecords?.Phone}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", mb: 2 }}>
                <Image src={emailicon} />
                <Box sx={{ ml: 2 }}>
                  <Typography sx={{ fontWeight: "bold" }}>Email</Typography>
                  <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
                    {studentRecords.Email}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", mb: 2 }}>
                <Image src={messengericon} />
                <Box sx={{ ml: 2 }}>
                  <Typography sx={{ fontWeight: "bold" }}>Messenger</Typography>
                  <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
                    {studentRecords?.Messenger}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", mb: 2 }}>
                <Image src={skypeicon} />
                <Box sx={{ ml: 2 }}>
                  <Typography sx={{ fontWeight: "bold" }}>Skype</Typography>
                  <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
                    {studentRecords?.Skype}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {edit && (
        <Box sx={{ my: 4 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ float: "right" }}>
              <button className="cancelbtn" onClick={() => setEdit(false)}>
                Cancel
              </button>
              <input className="formSubmitBtn" type="submit" value="Save" />
            </Box>
            <Table sx={{ minWidth: 700, my: 3 }} aria-label="customized table">
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      border: "none",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Name:
                  </TableCell>
                  <TableCell sx={{ border: "none", fontSize: "18px" }}>
                    {studentRecords.Full_Name}
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
                    Institution (University/College):
                  </TableCell>
                  <TableCell sx={{ border: "none", fontSize: "18px" }}>
                    {studentRecords.Institution}
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
                    Email address:
                  </TableCell>
                  <TableCell sx={{ border: "none", fontSize: "18px" }}>
                    {studentRecords.Email}
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
                    City/Town/Region :
                  </TableCell>
                  <TableCell sx={{ fontSize: "18px", border: "none" }}>
                    {studentRecords.Country_Region}
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
                    Education Agent (if applicable):
                  </TableCell>
                  <TableCell sx={{ border: "none" }}></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    sx={{
                      border: "none",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Emergency Contact :
                  </TableCell>
                  <TableCell sx={{ border: "none" }}></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    sx={{
                      border: "none",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Address in host country::
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <input
                      className="agentFormInput"
                      type="text"
                      defaultValue={studentRecords.Address_In_Host_Country}
                      {...register("Address_In_Host_Country")}
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
                      defaultValue={studentRecords.Phone}
                      {...register("Phone")}
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
                    Whatsapp Y/N:
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <input
                      className="agentFormInput"
                      type="text"
                      defaultValue={studentRecords.WhatsApp}
                      {...register("WhatsApp")}
                    />
                  </TableCell>
                </TableRow>

                {/* <TableRow >
                    <TableCell sx={{pt: 3, border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Parent 2:</TableCell>
                    <TableCell sx={{pt: 3, border: 'none'}}>
                    <input className="agentFormInput" type='text'  defaultValue={studentRecords.Managing_Principal}
                        {...register("Managing_Principal")} />
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Email address:</TableCell>
                    <TableCell sx={{border: 'none'}}>
                    <input className="agentFormInput" type='text'  defaultValue={studentRecords.Managing_Principal}
                        {...register("Managing_Principal")} />
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Home address:</TableCell>
                    <TableCell sx={{border: 'none'}}>
                    <input className="agentFormInput" type='text'  defaultValue={studentRecords.Managing_Principal}
                        {...register("Managing_Principal")} />
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>City/Town/Region:</TableCell>
                    <TableCell sx={{border: 'none'}}>
                    <input className="agentFormInput" type='text'  defaultValue={studentRecords.Managing_Principal}
                        {...register("Managing_Principal")} />
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Contact Phone number :</TableCell>
                    <TableCell sx={{border: 'none'}}>
                    <input className="agentFormInput" type='text'  defaultValue={studentRecords.Managing_Principal}
                        {...register("Managing_Principal")} />
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Whatsapp Y/N :</TableCell>
                    <TableCell sx={{border: 'none'}}>
                    <input className="agentFormInput" type='text'  defaultValue={studentRecords.Managing_Principal}
                        {...register("Managing_Principal")} />
                    </TableCell>
                  </TableRow> */}
              </TableBody>
            </Table>
          </form>
        </Box>
      )}
    </Box>
  );
}

// <TableContainer sx={{mt: 3, borderRadius: '10px', bgcolor: 'white', boxShadow: '0px 10px 22px rgba(0, 0, 0, 0.1)'}} >
// <Table sx={{ minWidth: 700 }} aria-label="customized table">
//   <TableBody>
//     <StyledTableRow>
//       <StyledTableCell>Name:</StyledTableCell>
//       <StyledTableCell>
//         {studentRecords.Full_Name}
//       </StyledTableCell>
//     </StyledTableRow>

//     <StyledTableRow>
//       <StyledTableCell>Institution (University/College):</StyledTableCell>
//       <StyledTableCell>{studentRecords.Institution}</StyledTableCell>
//     </StyledTableRow>

//     <StyledTableRow>
//       <StyledTableCell>Email address:</StyledTableCell>
//       <StyledTableCell>{studentRecords.Email}</StyledTableCell>
//     </StyledTableRow>

//     <StyledTableRow>
//       <StyledTableCell>Address in host country:</StyledTableCell>
//       <StyledTableCell>{studentRecords.Address_In_Host_Country}</StyledTableCell>
//     </StyledTableRow>

//     <StyledTableRow>
//       <StyledTableCell>City/Town/Region :</StyledTableCell>
//       <StyledTableCell>{studentRecords.Country_Region}</StyledTableCell>
//     </StyledTableRow>

//     <StyledTableRow>
//       <StyledTableCell>Contact Phone number:</StyledTableCell>
//       <StyledTableCell>
//         {studentRecords.Phone}
//       </StyledTableCell>
//     </StyledTableRow>

//     <StyledTableRow>
//       <StyledTableCell>Whatsapp:</StyledTableCell>
//       <StyledTableCell>
//         {studentRecords.WhatsApp}
//       </StyledTableCell>
//     </StyledTableRow>

//     <StyledTableRow>
//       <StyledTableCell>Education Agent (if applicable):</StyledTableCell>
//       <StyledTableCell>

//       </StyledTableCell>
//     </StyledTableRow>

//     <StyledTableRow>
//       <StyledTableCell>Emergency Contact :</StyledTableCell>
//       <StyledTableCell>

//       </StyledTableCell>
//     </StyledTableRow>

//     {/* <StyledTableRow>
//       <StyledTableCell>Change/upload profile photo :</StyledTableCell>
//       <StyledTableCell>
//         <a href={studentRecords.Profile_Image_URL} target="_blank">Click here</a>
//       </StyledTableCell>
//     </StyledTableRow> */}

//     {/* <StyledTableRow>
//       <StyledTableCell>Parents Details :</StyledTableCell>
//       <StyledTableCell>

//       </StyledTableCell>
//     </StyledTableRow> */}
//     {/* {
//       parentRecords.map((parent, index)=>(
//         <>
//         <StyledTableRow>
//         <StyledTableCell sx={{height: '200px'}}>Parent {index + 1}:</StyledTableCell>
//         <StyledTableCell>
//           {parent.Account_Name}
//         </StyledTableCell>
//       </StyledTableRow>

//       <StyledTableRow>
//         <StyledTableCell>Email address:</StyledTableCell>
//         <StyledTableCell>
//           {parent.Email }
//         </StyledTableCell>
//       </StyledTableRow>

//       <StyledTableRow>
//         <StyledTableCell>Home address:</StyledTableCell>
//         <StyledTableCell>

//         </StyledTableCell>
//       </StyledTableRow>

//       <StyledTableRow>
//         <StyledTableCell>City/Town/Region:</StyledTableCell>
//         <StyledTableCell>
//           {parent.Billing_City}
//         </StyledTableCell>
//       </StyledTableRow>

//       <StyledTableRow>
//         <StyledTableCell>Contact Phone number :</StyledTableCell>
//         <StyledTableCell>
//           {parent.Phone}
//         </StyledTableCell>
//       </StyledTableRow>

//       <StyledTableRow>
//         <StyledTableCell>Whatsapp Y/N :</StyledTableCell>
//         <StyledTableCell>

//         </StyledTableCell>
//       </StyledTableRow>
//       </>
//       ))
//     } */}
//   </TableBody>
// </Table>
// </TableContainer>
