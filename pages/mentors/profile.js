import React, { useEffect, useState } from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import useTrackedStore from "../../store/useTrackedStore";
import { getSession } from "next-auth/client";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";
import YourProfile from "../../components/HomeMentor/YourProfile";
import NavbarMentor from "../../components/Shared/Navbar/NavbarMentor";
import Image from "next/image";

const profile = () => {

    const state = useTrackedStore();
    const [loading, setLoading]= useState(false);
    const [supporterRecords, setSupporterRecords] = useState(state?.studentSupportersResp?.[0] || {});

    useEffect(()=>{
        async function fetchData(){
          if(!state?.studentSupportersResp?.[0]){
            setLoading(true);
              const session = await getSession();
              if(session?.user?.email){
  
              const recordData =  await axios.post(
                  `/api/getZohoData`,
                  {
                    moduleApiName: "Vendors",
                    criteria: `(Email:equals:${session?.user?.email})`,
                  }
                  )
                  if(recordData?.data?.data?.[0]){
                        setSupporterRecords(recordData?.data?.data?.[0]);
                        setLoading(false);
                  }
                  }
               }
      }
      fetchData();
      },[])
   
    return (
        <>
            <NavbarMentor />
            <div className='main-root'>
                <Sidebar />
                {
                    loading ? 
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                        <Image width={150} height={150} src="/loader.gif" alt="loader gif" />
                    </Box>
                    :
                    <YourProfile supporterRecords={supporterRecords}/>
                }
                
               
            </div>
        </>
    );
};

export default profile;
