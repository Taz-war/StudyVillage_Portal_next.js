// import React, {useEffect, useState} from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
import useTrackedStore from "../../store/useTrackedStore";
// import _ from "lodash";
// import editdet from "../../assets/agents/img/edit-details.png"
// import NavbarAgent from "../../components/Shared/Navbar/Navbar-Agent";
// import Sidebar from "../../components/Shared/Sidebar/Sidebar";
// import axios from 'axios';
// import { Box } from "@mui/system";

import { useEffect, useState } from "react";
import { getSession } from "next-auth/client";
import axios from "axios";
import NavbarAgent from "../../components/Shared/Navbar/Navbar-Agent";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import YourProfile from "../../components/HomeAgent/YourProfile";
import { Box, CircularProgress } from "@mui/material";
import Image from "next/image";

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

                const moduleData =  await axios.post(
                    `/api/getZohoData`,
                    {
                      moduleApiName: "Agents1",
                      criteria: `(Email:equals:${session?.user?.email})`
                    }
                  )
                  if(moduleData?.data?.data?.[0]){
                    setAgentRecords(moduleData?.data?.data?.[0]);
                    setLoading(false);
                  }
                }
            }
        }
        fetchData();
    },[])
//   const router = useRouter();
//   const state = useTrackedStore();
//   const [agentDetails, setAgentDetails] = useState(
//     {
//       Agency_Name:"",
//       Managing_Principal:"",
//       Key_Contact1:"",
//       Street_Address:"",
//       City:"",
//       Phone:"",
//       Company_Website:"",
//     }
//   )


//   const [UKProfile, setUKProfile] = useState({
//     First_Name_UK:"",
//     Last_Name_UK:"",
//     Email_UK:"",
//     Phone_UK:""
//   })

//   const [AUProfile, setAUProfile] = useState({
//     First_Name_AU:"",
//     Last_Name_AU:"",
//     Email_AU:"",
//     Phone_AU:"",
//     LinkedIN_Profile_AU:"",
//     LinkedIN_Profile_UK:""
//   })

//   const [CAProfile, setCAProfile] = useState({
//     First_Name_CA:"",
//     Last_Name_CA:"",
//     Email_CA:"",
//     Phone_CA:"",
//     LinkedIN_Profile_CA:""
//   })

//   const [updatedValue, setUpdatedValue] = useState({
//     id: state?.agentsResp?.[0]?.Crm_ID
//   })

//   console.log({agentId: state?.agentsResp?.[0]?.Crm_ID});
  
//   const [updatedBranchVal, setUpdatedBranchVal] = useState([])
  
//   //Main Table Edit Enabler
//   const [editContacts, setEditContacts] = useState(false)
//   //Branch Table Edit Enabler
//   const [editAUManager, setEditAUManager] = useState(false)
//   const [editUKManager, setEditUKManager] = useState(false)
//   const [editCAManager, setEditCAManager] = useState(false)


// async function checkSubForm(){
//   const subformData =  await axios.post(
//     `${process.env.NEXTAUTH_URL}/api/getZohoData`,
//     {
//       moduleApiName: "Branch_Office",
//       criteria: ``,
//     }
//   )
//   console.log(subformData);
  // let subFormArray = subformData.data.data
  // let branchOfficeList = [];
  // for (let branch of subFormArray){
  //   if(!!branch?.Parent_Id){
  //     if(branch.Parent_Id.id === state?.agentsResp?.[0]?.id){
  //       branchOfficeList.push(branch);
  //     }
  //   }
  // }
  // let agDetBuffer = {
  //   Agency_Name:"",
  //   Managing_Principal:"",
  //   Key_Contact1:"",
  //   Email:"",
  //   Street_Address:"",
  //   City:"",
  //   Phone:"",
  //   Company_Website:"",
  //   First_Name_AU:"",
  //   Last_Name_AU:"",
  //   Email_AU:"",
  //   Phone_AU:"",
  //   LinkedIN_Profile_AU:"",
  //   First_Name_UK:"",
  //   Last_Name_UK:"",
  //   Email_UK:"",
  //   Phone_UK:"",
  //   LinkedIN_Profile_UK:"",
  //   First_Name_CA:"",
  //   Last_Name_CA:"",
  //   Email_CA:"",
  //   Phone_CA:"",
  //   LinkedIN_Profile_CA:"",
  //   Australia_Counsellor_Image_URL: "",
  //   UK_Counsellor_Image_URL: "",
  //   Canada_Counsellor_Image_URL: ""
  // }

  // agDetBuffer.Agency_Name = state?.agentsResp?.[0]?.Agency_Name,
  // agDetBuffer.Name = state?.agentsResp?.[0]?.Name,
  // agDetBuffer.Managing_Principal = state?.agentsResp?.[0]?.Managing_Principal,
  // agDetBuffer.Key_Contact1 = state?.agentsResp?.[0]?.Key_Contact1,
  // agDetBuffer.Street_Address= state?.agentsResp?.[0]?.Street_Address,
  // agDetBuffer.City = state?.agentsResp?.[0]?.City,
  // agDetBuffer.Email = state?.agentsResp?.[0]?.Email,
  // agDetBuffer.Phone = state?.agentsResp?.[0]?.Phone,
  // agDetBuffer.Company_Website = state?.agentsResp?.[0]?.Company_Website,
  // agDetBuffer.First_Name_AU = state?.agentsResp?.[0]?.First_Name_AU,
  // agDetBuffer.Last_Name_AU = state?.agentsResp?.[0]?.Last_Name_AU,
  // agDetBuffer.Email_AU = state?.agentsResp?.[0]?.Email_AU,
  // agDetBuffer.Phone_AU = state?.agentsResp?.[0]?.Phone_AU,
  // agDetBuffer.LinkedIN_Profile_AU = state?.agentsResp?.[0]?.LinkedIN_Profile_AU,
  // agDetBuffer.First_Name_UK = state?.agentsResp?.[0]?.First_Name_UK,
  // agDetBuffer.Last_Name_UK = state?.agentsResp?.[0]?.Last_Name_UK,
  // agDetBuffer.Email_UK = state?.agentsResp?.[0]?.Email_UK,
  // agDetBuffer.Phone_UK = state?.agentsResp?.[0]?.Phone_UK,
  // agDetBuffer.LinkedIN_Profile_UK= state?.agentsResp?.[0]?.LinkedIN_Profile_UK,
  // agDetBuffer.First_Name_CA = state?.agentsResp?.[0]?.First_Name_CA,
  // agDetBuffer.Last_Name_CA = state?.agentsResp?.[0]?.Last_Name_CA,
  // agDetBuffer.Email_CA = state?.agentsResp?.[0]?.Email_CA,
  // agDetBuffer.Phone_CA = state?.agentsResp?.[0]?.Phone_CA,
  // agDetBuffer.LinkedIN_Profile_CA = state?.agentsResp?.[0]?.LinkedIN_Profile_CA,
  // agDetBuffer.Australia_Counsellor_Image_URL = state?.agentsResp?.[0]?.Australia_Counsellor_Image_URL,
  // agDetBuffer.UK_Counsellor_Image_URL = state?.agentsResp?.[0]?.UK_Counsellor_Image_URL,
  // agDetBuffer.Canada_Counsellor_Image_URL = state?.agentsResp?.[0]?.Canada_Counsellor_Image_URL

  
  // await setAgentDetails(agDetBuffer)

  // await setBranchOffice(branchOfficeList)
// }

// const addNewBranch = async (e) =>{
//   let newBranch = {...branchDetails}
//   inputID = e.target.id
  
//   switch(inputID){
//     case "Branch_Address":
//       newBranch.Branch_Address = e.target.value
//       setBranchDetails(newBranch)
//       break
//     case "Branch_Phone_Number":
//       newBranch.Branch_Phone_Number = e.target.value
//       setBranchDetails(newBranch)
//       break
//     case "Person_managing_this_branch":
//       newBranch.Person_managing_this_branch = e.target.value
//       setBranchDetails(newBranch)
//       break
//     case "Branch_Email":
//       newBranch.Branch_Email = e.target.value
//       setBranchDetails(newBranch)
//       break
//     default:
//       console.log("no value to read")
//   }


// }

// const updatingBranch = async (e)=>{
//   let updateBuffer = [...updatedBranchVal]
//   let dupeId = updateBuffer.map((data)=>{return data.id})
//   let newBranchData = {}
//   let splitId = e.target.id.split(" ")

//   switch (splitId[0]){
//     case "Branch_Address":
//       if(dupeId.indexOf(splitId[1]) !== -1){

//         newBranchData = await updateBuffer[dupeId.indexOf(splitId[1])]
//         updateBuffer.splice(dupeId.indexOf(splitId[1]), 1)

//         newBranchData.Address = e.target.value
//         updateBuffer.push(newBranchData)
//         setUpdatedBranchVal(updateBuffer)
//       }else{
//         newBranchData.Address = e.target.value
//         newBranchData.id= splitId[1]
//         updateBuffer.push(newBranchData)
//         setUpdatedBranchVal(updateBuffer)

//       }
      
//      /** newBranchData.id = e.target.id
//       newBranchData.Address = e.target.value
      
      
      
//       */
//       //await setUpdatedBranchVal(updateBuffer) 
//       break
//       case "Branch_Phone_Number":
//         if(dupeId.indexOf(splitId[1]) !== -1){
//           let formatSubmit = {...updatedValue}
//           newBranchData = await updateBuffer[dupeId.indexOf(splitId[1])]
//           updateBuffer.splice(dupeId.indexOf(splitId[1]), 1)

//           newBranchData.Phone_Number = e.target.value
//           updateBuffer.push(newBranchData)
//           setUpdatedBranchVal(updateBuffer)

//           formatSubmit.Branch_Office = updatedBranchVal
//           setUpdatedValue(formatSubmit)
          
//         }else{
//           let formatSubmit = {...updatedValue}
//           newBranchData.Phone_Number = e.target.value
          
//           newBranchData.id= splitId[1]
//           updateBuffer.push(newBranchData)
//           setUpdatedBranchVal(updateBuffer)

//           formatSubmit.Branch_Office = updatedBranchVal
//           setUpdatedValue(formatSubmit)
          
//         }
//       break;
//       case "Person_managing_this_branch":
//         if(dupeId.indexOf(splitId[1]) !== -1){
//           let formatSubmit = {...updatedValue}
//           newBranchData = await updateBuffer[dupeId.indexOf(splitId[1])]
//           updateBuffer.splice(dupeId.indexOf(splitId[1]), 1)

//           newBranchData.Person_managing_this_branch = e.target.value
//           updateBuffer.push(newBranchData)
//           setUpdatedBranchVal(updateBuffer)

//           formatSubmit.Branch_Office = updatedBranchVal
//           setUpdatedValue(formatSubmit)
//         }else{
//           let formatSubmit = {...updatedValue}
//           newBranchData.Person_managing_this_branch = e.target.value
//           newBranchData.id= splitId[1]
//           updateBuffer.push(newBranchData)
//           setUpdatedBranchVal(updateBuffer)

//           formatSubmit.Branch_Office = updatedBranchVal
//           setUpdatedValue(formatSubmit)

//         }
//       break;
//       case "Branch_Email":
//         if(dupeId.indexOf(splitId[1]) !== -1){
//           let formatSubmit = {...updatedValue}

//           newBranchData = await updateBuffer[dupeId.indexOf(splitId[1])]
//           updateBuffer.splice(dupeId.indexOf(splitId[1]), 1)

//           newBranchData.Email = e.target.value
//           updateBuffer.push(newBranchData)
//           setUpdatedBranchVal(updateBuffer)

//           formatSubmit.Branch_Office = updatedBranchVal
//           setUpdatedValue(formatSubmit)
//         }else{
//           let formatSubmit = {...updatedValue}

//           newBranchData.Phone_Number = e.target.value
//           newBranchData.id= splitId[1]
//           updateBuffer.push(newBranchData)
//           setUpdatedBranchVal(updateBuffer)

//           formatSubmit.Branch_Office = updatedBranchVal
//           setUpdatedValue(formatSubmit)

//         }
//       break; 
//       default:
//         console.log("no value to read")
//   }
// }

// const updatingContacts= async (e)=>{
//   let updateBuffer = {...updatedValue}
  
//   switch (e.target.id){
//     case "Managing_Principal":
//       updateBuffer.Managing_Principal = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//     case "Street_Address":
//       updateBuffer.Street_Address = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//     case "Email":
//       updateBuffer.Email = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//     case "Phone":
//       updateBuffer.Phone = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//     case "Company_Website":
//       updateBuffer.Company_Website = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//     default:
//       console.log("nope")
//   }
  

// }

// const updateAUManager = async (e) =>{
//   let updateBuffer = {...updatedValue}
  
//   switch (e.target.id){
//     case "First_Name_AU":
//       updateBuffer.First_Name_AU = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//     case "Last_Name_AU":
//       updateBuffer.Last_Name_AU = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//       case "Email_AU":
//         updateBuffer.Last_Name_AU = e.target.value
//         await setUpdatedValue(updateBuffer)  
//         break
//     case "Phone_AU":
//       updateBuffer.Phone_AU = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//     case "LinkedIN_Profile_AU":
//       updateBuffer.LinkedIN_Profile_AU = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//     default:
//       console.log("nope")
//   }
// }

// const updateUKManager = async (e) =>{
//   let updateBuffer = {...updatedValue}
  
//   switch (e.target.id){
//     case "First_Name_UK":
//       updateBuffer.First_Name_UK = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//       case "Email_UK":
//         updateBuffer.Email_UK = e.target.value
//         await setUpdatedValue(updateBuffer)  
//         break
//     case "Last_Name_UK":
//       updateBuffer.Last_Name_UK = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//     case "Phone_UK":
//       updateBuffer.Phone_UK = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//     case "LinkedIN_Profile_UK":
//       updateBuffer.LinkedIN_Profile_UK = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//     default:
//       console.log("nope")
//   }
// }

// const updateCAManager = async (e) =>{
//   let updateBuffer = {...updatedValue}
  
//   switch (e.target.id){
//     case "First_Name_CA":
//       updateBuffer.First_Name_CA = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//       case "Email_CA":
//         updateBuffer.Email_CA = e.target.value
//         await setUpdatedValue(updateBuffer)  
//         break
//     case "Last_Name_CA":
//       updateBuffer.Last_Name_CA = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//     case "Phone_CA":
//       updateBuffer.Phone_CA = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//     case "LinkedIN_Profile_CA":
//       updateBuffer.LinkedIN_Profile_CA = e.target.value
//       await setUpdatedValue(updateBuffer)  
//       break
//     default:
//       console.log("nope")
//   }
// }
// const updateBranchCRM = async () =>{
//   let newBuffer = {...updatedValue}
//   newBuffer.Branch_Office = updatedBranchVal
//   setUpdatedValue(newBuffer)
// }
// const updateAgentsCRM = async () =>{
//   const updateCRMAgent = await axios.put(`/api/updateRecord`, {
//     moduleName : "Agents1",
//     updated_data : {
//       "data": [
//         updatedValue
//       ]
//     }
//   })
//   console.log(updateCRMAgent)
//   router.push("/")
// }
// useEffect(()=>{
//   console.log(updatedValue)
// },[updatedValue])

// useEffect(()=>{
//   console.log("check Branch Office")
//   console.log(updatedBranchVal)
// },[updatedBranchVal])

// useEffect(()=>{
//   console.log("check when there's a change in agentDetails")
//   console.log(agentDetails)
// },[agentDetails])


//   useEffect(()=>{
//     console.log(state.agentsResp)
//     checkSubForm();

//   },[])

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
            <YourProfile agentRecords={agentRecords}/>
          }
          
        </div>
    </>
  );
};

export default AgentProfile;
