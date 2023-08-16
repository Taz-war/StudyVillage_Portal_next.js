import useTrackedStore from "../../store/useTrackedStore";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/client";
import axios from "axios";
import NavbarAgent from "../../components/Shared/Navbar/Navbar-Agent";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import { Box, CircularProgress } from "@mui/material";
import YourCounsellor from "../../components/HomeAgent/YourCounsellor";
import { useRouter } from "next/router";
import Image from "next/image";

const Counsellor = () => {
    const state = useTrackedStore();
    const router = useRouter();
    const [agentRecords, setAgentRecords]= useState(state?.agentsResp?.[0] || {});
    const [counsellorList, setCounsellorList]= useState([]);
    const [loading, setLoading]= useState(false);
    useEffect(()=>{
        async function fetchData(){
          setLoading(true);    
            const session = await getSession();
            if(!state?.agentsResp?.[0]){
                if(session?.user?.email){
                const moduleData =  await axios.post(
                    `/api/getZohoData`,
                    {
                      moduleApiName: "Agents1",
                      criteria: `(Email:equals:${session?.user?.email})`
                    }
                  )
                  if(moduleData?.data?.data?.[0]){
                    setAgentRecords(moduleData?.data?.data?.[0]);
                  }
                }
            }

              const counsellorData =  await axios.post(
                `/api/getZohoDataCoql`,
                {
                  select_query: `select id, First_Name, Name, Email, Mobile, Phone, Portal_Access, Agent_Primary_Email from Agent_Counsellors where Agent_Primary_Email = '${session?.user?.email}'`
                }
              )
              setCounsellorList(counsellorData?.data?.data);
              
              setLoading(false);
        }
        fetchData();
    },[])

    const createNewCounsellor= async(data)=>{

      setLoading(true); 
      data.Agent_Primary_Email= agentRecords.Email;
      data.Agent_Name	= {id: agentRecords.id};
      data.Portal_Access= false;

      let requestBody = {};
      let recordArray = [];

      recordArray.push(data);

      requestBody["data"] = recordArray;

      let trigger = ["workflow"];
      requestBody["trigger"] = trigger;

      // create time sheet record and get id of this record
      const result = await axios.post("/api/createRecord", {moduleName: "Agent_Counsellors", requestBody: requestBody});

      if (result.data?.status === 201) {
        alert(result.data?.message);
        router.reload(window.location.pathname);
      } else {
        alert("Something went wrong....try again!!!");
        setLoading(false);
      }
    }

    const handlePortalAccess =async(id, isAccess)=>{ 
        const data={};
        data.id = id;
        data.Portal_Access= isAccess;
        const newObj = {};
        newObj.moduleName = 'Agent_Counsellors';
        newObj.updated_data= data;
        const result = await axios.post(
        "/api/updateRecord",
        newObj
        );

        if(result?.data?.ok){
        console.log(result?.data?.message); 
        }
        else{
        alert("Something went wrong");
        }
    }

  return (
    <>     
    <NavbarAgent />
        <div class="main-root">
          <Sidebar />
          {
            loading ? 
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                  <Image width={150} height={150} src="/loader.gif" alt="loader gif" />
            </Box>
            :
            <YourCounsellor counsellorList={counsellorList} createNewCounsellor={createNewCounsellor} handlePortalAccess={handlePortalAccess} /> 
          }
          
        </div>
    </>
  );
};

export default Counsellor;
