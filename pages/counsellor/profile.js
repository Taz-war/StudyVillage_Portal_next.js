import useTrackedStore from "../../store/useTrackedStore";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/client";
import axios from "axios";
import NavbarAgent from "../../components/Shared/Navbar/Navbar-Agent";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import YourProfile from "../../components/HomeAgent/YourProfile";
import { Box, CircularProgress } from "@mui/material";
import NavbarCounsellor from "../../components/Shared/Navbar/Navbar-Counsellor";

const AgentProfile = () => {
    const state = useTrackedStore();
    const [agentRecords, setAgentRecords]= useState(state?.agentsResp?.[0] || {});
    const [loading, setLoading]= useState(false);
    useEffect(()=>{
      async function fetchData(){
        if(!state?.agentsResp?.[0]){
          setLoading(true);
            const session = await getSession();
            if(session?.user?.email){
            const userData =  await axios.post(
                `/api/getZohoData`,
                {
                    moduleApiName: "Portal_Users",
                    criteria: `(Email:equals:${session?.user?.email})`,
                }
                )
                if(userData?.data?.data?.[0]?.Agent_Primary_Email){
                    const recordData =  await axios.post(
                        `/api/getZohoData`,
                        {
                          moduleApiName: "Agents1",
                          criteria: `(Email:equals:${userData?.data?.data?.[0]?.Agent_Primary_Email})`,
                        }
                        )
                        if(recordData?.data?.data){
                            setAgentRecords(recordData?.data?.data?.[0]);
                            setLoading(false);
                        }
                }
                }
             }
    }
    fetchData();
    },[])


  return (
    <>     
    <NavbarCounsellor />
        <div class="main-root">
          <Sidebar />
          {
            loading ? 
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                  <Image width={150} height={150} src="/loader.gif" alt="loader gif" />
            </Box>
            :
            <YourProfile agentRecords={agentRecords}/>
          }
          
        </div>
    </>
  );
};

export default AgentProfile;
