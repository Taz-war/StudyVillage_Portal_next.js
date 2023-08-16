import {
  Box,
  styled,
  Table,
  TableBody,
  TableRow,
  Typography
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

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

export default function YourProfile({ agentRecords }) {
  const [edit, setEdit] = useState(false);

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async(data) => {
    data.id = agentRecords.id
    const newObj = {};
    newObj.moduleName = 'Agents1';
    newObj.updated_data= data;
    const result = await axios.post(
      "/api/updateRecord",
      newObj
    );

    if(result?.data?.ok){
      alert(result?.data?.message);
    }
    else{
      alert("Something went wrong");
    }
  };

  return (
    <Box sx={{ m: 20, pb: 6 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{width: 800}}>
          <Typography sx={{ fontSize: "27px", fontWeight: "bold" }}>
            Your Profile
          </Typography>
          <Typography sx={{ fontSize: "18px"}}>
          These are your Company’s Profile and contact details.  Please keep these current – by using the edit function if required.  It’s important you nominate one staff member to handle students
          </Typography>
        </Box>
       {
         !edit && 
         <button className="profileEditbtn" onClick={() => setEdit(true)} >
         Edit
         </button>
       }
      </Box>
      {!edit && (
        <Box>
          <Table sx={{ minWidth: 700, my: 3, bgcolor: 'white', boxShadow: '0px 10px 22px rgba(0, 0, 0, 0.1)' }} aria-label="customized table">
            <TableBody>
              <StyledTableRow>
                <StyledTableCell sx={{borderRadius: '12px 0 0 0'}}>Company Principal:</StyledTableCell>
                <StyledTableCell sx={{borderRadius: '0 12px 0 0'}}>
                  {agentRecords.Managing_Principal}
                </StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>Referral ID:</StyledTableCell>
                <StyledTableCell>{agentRecords.id}</StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>Key Contact Email Address:</StyledTableCell>
                <StyledTableCell>{agentRecords.Email}</StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>Company Address:</StyledTableCell>
                <StyledTableCell>{agentRecords.Street_Address}</StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>Phone Number:</StyledTableCell>
                <StyledTableCell>{agentRecords.Phone}</StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>Website:</StyledTableCell>
                <StyledTableCell>
                  <a href={agentRecords.Company_Website} target="_blank">{agentRecords.Company_Website}</a>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>

          <Typography sx={{ fontWeight: "bold" }}>
            Australian Manager
          </Typography>

          <Table sx={{ minWidth: 700, my: 3 }} aria-label="customized table">
            <TableBody>
              <StyledTableRow>
                <StyledTableCell>Counsellor Name:</StyledTableCell>
                <StyledTableCell>
                  {(agentRecords.First_Name_AU
                    ? agentRecords.First_Name_AU
                    : "") +
                    " " +
                    (agentRecords.Last_Name_AU
                      ? agentRecords.Last_Name_AU
                      : "")}
                </StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>Counsellor Email:</StyledTableCell>
                <StyledTableCell>{agentRecords.Email_AU}</StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>
                  Counsellor Phone Number/Whatsapp:
                </StyledTableCell>
                <StyledTableCell>{agentRecords.Phone_AU}</StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>LinkedIn Profile:</StyledTableCell>
                <StyledTableCell>
                  <a href={agentRecords.LinkedIN_Profile_AU} target="_blank">{agentRecords.LinkedIN_Profile_AU}</a>
                </StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>Photo:</StyledTableCell>
                <StyledTableCell>
                  <a href={agentRecords.Australia_Counsellor_Image_URL} target="_blank">{agentRecords.Australia_Counsellor_Image_URL}</a>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>

          <Typography sx={{ fontWeight: "bold" }}>UK Manager</Typography>

          <Table sx={{ minWidth: 700, my: 3 }} aria-label="customized table">
            <TableBody>
              <StyledTableRow>
                <StyledTableCell>Counsellor Name:</StyledTableCell>
                <StyledTableCell>
                  {(agentRecords.First_Name_UK
                    ? agentRecords.First_Name_UK
                    : "") +
                    " " +
                    (agentRecords.Last_Name_UK
                      ? agentRecords.Last_Name_UK
                      : "")}
                </StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>Counsellor Email:</StyledTableCell>
                <StyledTableCell>{agentRecords.Email_UK}</StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>
                  Counsellor Phone Number/Whatsapp:
                </StyledTableCell>
                <StyledTableCell>{agentRecords.Phone_UK}</StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>LinkedIn Profile:</StyledTableCell>
                <StyledTableCell>
                  <a href={agentRecords.LinkedIN_Profile_UK} target="_blank">{agentRecords.LinkedIN_Profile_UK}</a>
                </StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>Photo:</StyledTableCell>
                <StyledTableCell>
                  <a href={agentRecords.UK_Counsellor_Image_URL} target="_blank">{agentRecords.UK_Counsellor_Image_URL}</a>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>

          <Typography sx={{ fontWeight: "bold" }}>Canada Manager</Typography>

          <Table sx={{ minWidth: 700, my: 3 }} aria-label="customized table">
            <TableBody>
              <StyledTableRow>
                <StyledTableCell>Counsellor Name:</StyledTableCell>
                <StyledTableCell>
                  {(agentRecords.First_Name_CA
                    ? agentRecords.First_Name_CA
                    : "") +
                    " " +
                    (agentRecords.Last_Name_CA
                      ? agentRecords.Last_Name_CA
                      : "")}
                </StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>Counsellor Email:</StyledTableCell>
                <StyledTableCell>{agentRecords.Email_CA}</StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>
                  Counsellor Phone Number/Whatsapp:
                </StyledTableCell>
                <StyledTableCell>{agentRecords.Phone_CA}</StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell>LinkedIn Profile:</StyledTableCell>
                <StyledTableCell>
                  <a href={agentRecords.LinkedIN_Profile_CA} target="_blank">{agentRecords.LinkedIN_Profile_CA}</a>
                </StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell sx={{borderRadius: '0 0 0 12px'}}>Photo:</StyledTableCell>
                <StyledTableCell sx={{borderRadius: '0 0 12px 0'}}>
                  <a href={agentRecords.Canada_Counsellor_Image_URL} target="_blank">{agentRecords.Canada_Counsellor_Image_URL} </a>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </Box>
      )}

      {edit && (
        <Box sx={{ my: 4 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{float: 'right'}}>
            <button className="cancelbtn"  onClick={()=> setEdit(false)}>Cancel</button>
            <input className="formSubmitBtn" type="submit" value="Save" />
            </Box>
            <Table sx={{ minWidth: 700, my: 3 }} aria-label="customized table">
              <TableBody>
                <TableRow >
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Company Principal:</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'  defaultValue={agentRecords.Managing_Principal}
                      {...register("Managing_Principal")} />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Company Address:</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'
                      defaultValue={agentRecords.Street_Address}
                      {...register("Street_Address")}
                    />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Phone Number:</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'
                      defaultValue={agentRecords.Phone}
                      {...register("Phone")}
                    />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Website:</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'
                      defaultValue={agentRecords.Company_Website}
                      {...register("Company_Website")}
                    />
                  </TableCell>
                </TableRow>
        
                <Typography sx={{ fontWeight: "bold", my:2, fontSize: '18px', color: '#A1AB23' }}>Australian Manager</Typography>
  
                <TableRow>
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Counsellor Email::</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'
                      defaultValue={agentRecords.Email_AU}
                      {...register("Email_AU")}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}> Counsellor Phone Number/Whatsapp:</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'
                      defaultValue={agentRecords.Phone_AU}
                      {...register("Phone_AU")}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}> LinkedIn Profile:</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'
                      defaultValue={agentRecords.LinkedIN_Profile_AU}
                      {...register("LinkedIN_Profile_AU")}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}> Photo:</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'
                      defaultValue={agentRecords.Australia_Counsellor_Image_URL}
                      {...register("Australia_Counsellor_Image_URL")}
                    />
                  </TableCell>
                </TableRow>


                <Typography  sx={{ fontWeight: "bold", my:2, fontSize: '18px', color: '#A1AB23' }}>UK Manager</Typography>
                <TableRow>
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Counsellor Email::</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'
                      defaultValue={agentRecords.Email_UK}
                      {...register("Email_UK")}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}> Counsellor Phone Number/Whatsapp:</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'
                      defaultValue={agentRecords.Phone_UK}
                      {...register("Phone_UK")}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}> LinkedIn Profile:</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'
                      defaultValue={agentRecords.LinkedIN_Profile_UK}
                      {...register("LinkedIN_Profile_UK")}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}> Photo:</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'
                      defaultValue={agentRecords.UK_Counsellor_Image_URL}
                      {...register("UK_Counsellor_Image_URL")}
                    />
                  </TableCell>
                </TableRow>

                <Typography  sx={{ fontWeight: "bold", my:2, fontSize: '18px', color: '#A1AB23' }}>Canada Manager</Typography>
                <TableRow>
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}>Counsellor Email::</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'
                      defaultValue={agentRecords.Email_CA}
                      {...register("Email_CA")}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}> Counsellor Phone Number/Whatsapp:</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'
                      defaultValue={agentRecords.Phone_CA}
                      {...register("Phone_CA")}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}> LinkedIn Profile:</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'
                      defaultValue={agentRecords.LinkedIN_Profile_CA}
                      {...register("LinkedIN_Profile_CA")}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{border: 'none', fontWeight: 'bold', fontSize: '18px'}}> Photo:</TableCell>
                  <TableCell sx={{border: 'none'}}>
                  <input className="agentFormInput" type='text'
                      defaultValue={agentRecords.Canada_Counsellor_Image_URL}
                      {...register("Canada_Counsellor_Image_URL")}
                    />
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
            
          </form>
        </Box>
      )}
    </Box>
  );
}
