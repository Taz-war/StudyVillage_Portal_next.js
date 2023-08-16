import React, { useEffect, useState } from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import useTrackedStore from "../../store/useTrackedStore";
import { getSession } from "next-auth/client";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";
import YourStudents from "../../components/HomeMentor/YourStudents";
import NavbarMentor from "../../components/Shared/Navbar/NavbarMentor";
import YourResources from "../../components/HomeMentor/YourResources";

const Resources = () => {
  const state = useTrackedStore();
  const [loading, setLoading] = useState(false);
  // const [studentRecords, setStudentRecords] = useState(state?.studentsResp || []);

  // useEffect(()=>{
  //     async function fetchData(){
  //       if(!state?.studentsResp){
  //         setLoading(true);
  //           const session = await getSession();
  //           if(session?.user?.email){

  //           const supporterData =  await axios.post(
  //               `/api/getZohoData`,
  //               {
  //                 moduleApiName: "Vendors",
  //                 criteria: `(Email:equals:${session?.user?.email})`,
  //               }
  //               )
  //               if(supporterData?.data?.data?.[0]){
  //                   const studentData = await axios.post(
  //                     `/api/getZohoData`,
  //                     {
  //                         moduleApiName: "Deals",
  //                         criteria: `(Assigned_Student_Supporters:equals:${supporterData?.data?.data?.[0]?.id})`,
  //                     }
  //                     )
  //                     setStudentRecords(studentData?.data?.data);
  //                     setLoading(false);
  //               }
  //               }
  //            }
  //   }
  //   fetchData();
  //   },[])

  return (
    <>
      <NavbarMentor />
      <div className="main-root">
        <Sidebar />
        {loading ? (
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
          <YourResources />
        )}
      </div>
    </>
  );
};

export default Resources;
