import React, { useEffect, useState } from "react";
import YourProfile from "../../components/HomeStudent/YourProfile";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import useTrackedStore from "../../store/useTrackedStore";
import { getSession } from "next-auth/client";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";
import Image from "next/image";

const profile = () => {

    const state = useTrackedStore();
    const [loading, setLoading]= useState(false);
    const [studentRecords,setStudentRecords] = useState(state?.studentsResp?.[0] || {});
    const [parentRecords, setParentRecords] = useState(state?.parentsResp || []);

    useEffect(()=>{
        async function fetchData(){
          if(!state?.studentsResp?.[0]){
            setLoading(true);
              const session = await getSession();
              if(session?.user?.email){
  
              const recordData =  await axios.post(
                  `/api/getZohoData`,
                  {
                      moduleApiName: "Contacts",
                      criteria: `(Email:equals:${session?.user?.email})`
                  }
                  )
                  if(recordData?.data?.data?.[0]){
                      setStudentRecords(recordData?.data?.data?.[0]);

                      const parentData = await axios.post(
                        `/api/getParentRecords`,
                        {
                            id: recordData?.data?.data?.[0]?.id
                        }
                        )
                        setParentRecords(parentData?.data?.data);
                        setLoading(false);
                  }
                  }
               }
      }
      fetchData();
      },[])
   
    return (
        <>
            <Navbar />
            <div className='main-root'>
                <Sidebar />
                {
                    loading ? 
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                            <Image width={150} height={150} src="/loader.gif" alt="loader gif" />
                    </Box>
                    :
                    <YourProfile studentRecords={studentRecords} parentRecords={parentRecords} />
                }
                
               
            </div>
        </>
    );
};

export default profile;
