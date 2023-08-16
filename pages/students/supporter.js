import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import { getSession } from "next-auth/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import YourSupporter from "../../components/HomeStudent/YourSupporter";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import useTrackedStore from "../../store/useTrackedStore";

const supporter = () => {
    const state = useTrackedStore();
    const [loading, setLoading]= useState(false);
    const [supporterRecords, setSupporterRecords]= useState(state?.studentSupportersResp?.[0] || {});

    useEffect(()=>{
        async function fetchData(){
            if(! state?.studentSupportersResp?.[0]){
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
                    if(recordData?.data?.data?.[0].id){
                        const moduleData =  await axios.post(
                            `/api/getSupporterRecord`,
                            {
                            id: recordData?.data?.data?.[0].id
                            }
                        )
                        setSupporterRecords(moduleData?.data?.data);
                        setLoading(false);
                        }
                    }
                 }
        }
        fetchData();
    },[])
   
    return (
        <>
            <Navbar/>
            <div class='main-root'>
                <Sidebar />
                {
                    loading ? 
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                            <Image width={150} height={150} src="/loader.gif" alt="loader gif" />
                    </Box>
                    :
                    <YourSupporter supporterRecords={supporterRecords} />
                }
            </div>
        </>
    );
};

export default supporter;
