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
  } from "@mui/material";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
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
  
  export default function YourResources() {
    return (
      <Box sx={{ m: 20, pb: 5 }}>
        <h2 style={{ fontSize: "35px", fontWeight: "normal", color: "#A1AB23" }}>
        Training Resources  
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
                Background 
                </StyledTableCell>
                <StyledTableCell >
                HHW Modules 
                </StyledTableCell>
                <StyledTableCell >
                In Depth Practice 
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
                <StyledTableRow>
                  <StyledTableCell >
                   <a href="https://workdrive.zohoexternal.com/external/7a340e592dde3f6135df4b9894b2fb5753b74d58cfcdd243591a26828497b575" target="_blank" rel="noreferrer noopener">Different Academic Traditions</a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/c8d755e939be461cac4215e28f5ad3cd2d36de7e3af9f28780d75a9d74c28da2" target="_blank" rel="noreferrer noopener">ELICOS A </a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/7430915ad40ddb92c5e56f60036c3026cc8dc5a8a8a433face928586dedbbe25" target="_blank" rel="noreferrer noopener"> Background Research</a>
                  </StyledTableCell>
                </StyledTableRow>
                
                <StyledTableRow>
                  <StyledTableCell >
                   <a href="https://workdrive.zohoexternal.com/external/66fa842becea1b780a944eadf7ea5b7350a8557995fb2a11fd7b13baedbef353" target="_blank" rel="noreferrer noopener">Financial Pressures</a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/0c51efff01916d5eae8c24204b67662c41956bed049edc6da176f97625e7a7bb" target="_blank" rel="noreferrer noopener">ELICOS B </a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/b70c614b793cb054f98fcc0760d635055b7973c200c6b7f7e09ee4242bc8a9df" target="_blank" rel="noreferrer noopener"> Connectivity and Independence</a>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell >
                   <a href="https://workdrive.zohoexternal.com/external/7f8e24e868b0bb685a2021994f2f07495eff5c05f26864133d724afdc80789d9" target="_blank" rel="noreferrer noopener">Importance of Student Networks</a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/1489b4ba04d050a910bad744fda462b1279edaa2db54c2b9b18bda1f89be9721" target="_blank" rel="noreferrer noopener">ELICOS C </a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/1a242c16c7b2fbaf69129faaf61c2b5aeae3afb83c6506ffdf8e91ab1e2f2d2b" target="_blank" rel="noreferrer noopener"> Predeparture Call</a>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell >
                   <a href="https://workdrive.zohoexternal.com/external/83e46255dc49cb7d6edac9cd42e96241981e49bf41860394927901e85b2bc349" target="_blank" rel="noreferrer noopener">Mindset</a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/a6b271d28f9b866fa731dc0c262e44c9e38765fd7fa60830e732b7bb050fbbb5" target="_blank" rel="noreferrer noopener">ELICOS D </a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/62614d525ed52254cf643739cf2706bc46214eb201680af13358aed990d3fe49" target="_blank" rel="noreferrer noopener"> Meetups</a>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell >
                   <a href="https://workdrive.zohoexternal.com/external/45a6ff5346c38b22ff76cffc40d7f91053c53dcd07bdb31d6a4c2523c6d65b64" target="_blank" rel="noreferrer noopener">Overview and background</a>
                  </StyledTableCell>
                  <StyledTableCell >
                  ELICOS E
                  {/* <a href="" target="_blank" rel="noreferrer noopener"> </a> */}
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/243ef33ab2b6fec6b1d491cc8b5861622c3dbc0937e057ed1c349b41d098ea61" target="_blank" rel="noreferrer noopener"> Report Writing</a>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell >
                   <a href="https://workdrive.zohoexternal.com/external/33f88a53138f91ce34b27fc1aed2831a654effb9c0094e9c2b80b68b06c6055b" target="_blank" rel="noreferrer noopener">Understanding the impact of language challenges</a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/33a2fa29dfbba6da9a603c3756f11e92b5b8a385825ebeb4a6f89d3330d0de34" target="_blank" rel="noreferrer noopener">Settling In </a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/e9d4ccae51442b1cc0bc7420127fe6e8cb6d7c2b3bb2cda97f6de9d24a016541" target="_blank" rel="noreferrer noopener"> Meet the Parents</a>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell >
                   <a href="https://workdrive.zohoexternal.com/external/6d08e912a1f2e5eef9ff15f105d6c63e5406d1b489b2f02f8b725d1efc6929d7" target="_blank" rel="noreferrer noopener">Understanding the stages of adjustment</a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/eb5148ea56d686b3f2c3e6f731bcd4c8c2c770270ce5721954f44d4888a29716" target="_blank" rel="noreferrer noopener">Consolidating Studies </a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/232af3ce7694f0d34605ba346602a598d12d364f191173085cf000bd5f355469" target="_blank" rel="noreferrer noopener"> Phone Check-ins</a>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell >
                   <a href="https://workdrive.zohoexternal.com/external/21c0a27a5fd0dc645934179fb1a157ce900759453070385822416df7193cb75d" target="_blank" rel="noreferrer noopener">Recap – the bigger picture</a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zoho.com/file/a9j4k955758b4e88e400b9ad1b164a970ed46" target="_blank" rel="noreferrer noopener">Tracking Progress </a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zoho.com/file/a9j4k8833bf412a824f9b86724ced2930505b" target="_blank" rel="noreferrer noopener">Meet the Parents</a>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell >
                   
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/920f92aa941787aab32b1fef0037ce31285cc87f7571ed4bff46062b689f99e9" target="_blank" rel="noreferrer noopener">Goalsetting </a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/da7d10cf5d5b4243b2d4a73fdd6ebfe6df16c22cc75b6190aeb2ce6fd78a9c19" target="_blank" rel="noreferrer noopener">Open Support</a>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell >
                   
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/e5bafba1aceba0dd01d6993503c8a38e69e050d2dee0f41636ee514625972b91" target="_blank" rel="noreferrer noopener">GoalTracking </a>
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zoho.com/file/a9j4k75dea968cc494ac7b94636d23fb3a45d" target="_blank" rel="noreferrer noopener">Professional Practice</a>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell >
                   
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/998b9de00f07ce236e99844552356a32371e7807cb11315c099cf580a69b3399" target="_blank" rel="noreferrer noopener">Transition </a>
                  </StyledTableCell>
                  <StyledTableCell >
               
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell >
                   
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/f9644d035115c8ebe5ab0eea351076534af2a47a294d03f3078a66640bdf1b2e" target="_blank" rel="noreferrer noopener">Accelerator A </a>
                  </StyledTableCell>
                  <StyledTableCell >
               
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell >
                   
                  </StyledTableCell>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/5fcc819a5cb65700181650caabf5ea52b91bd42dc4d65f8bf5fe1d51155f27cb" target="_blank" rel="noreferrer noopener">Accelerator B </a>
                  </StyledTableCell>
                  <StyledTableCell >
               
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell >
                  <a href="https://workdrive.zohoexternal.com/external/1f04683718416851aca92d8c0932d0ade682af867b633ef31cfcca73a0eddbca" target="_blank" rel="noreferrer noopener">The Guide for Student Supporters(PDF)</a>
                  </StyledTableCell>
                  <StyledTableCell >
                  
                  </StyledTableCell>
                  <StyledTableCell >
               
                  </StyledTableCell>
                </StyledTableRow>
             
            </TableBody>
          </Table>
        </TableContainer>

        <SocialMediaLinksStudent />

      </Box>
    );
  }
  