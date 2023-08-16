import React, { useEffect, useState } from "react";
// import "../../../assets/css/style.css";
import logo from "../../../assets/img/SVLogo.svg";
import user from "../../../assets/img/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Image from "next/image";
import useTrackedStore from "../../../store/useTrackedStore";
import { getSession, signOut } from "next-auth/client";

//base64 converter
import imageToBase64 from 'image-to-base64/browser'
import { Box, CircularProgress } from "@mui/material";
import axios from "axios";

const NavbarAgent = () => {
  const state = useTrackedStore();
  const [loading, setLoading]= useState(false);
  const [agentRecords,setAgentRecords] = useState(state?.agentsResp?.[0] || {});
    const topbarLinks = [
      {
        href: "/agents/profile",
        label: `View Profile`,
      },
    ];

    useEffect(()=>{
      async function fetchData(){
        if(!state?.agentsResp?.[0]){
          setLoading(true);
            const session = await getSession();
            if(session?.user?.email){
            const recordData =  await axios.post(
                `/api/getZohoData`,
                {
                  moduleApiName: "Agents1",
                  criteria: `(Email:equals:${session?.user?.email})`,
                }
                )
                if(recordData?.data?.data){
                    setAgentRecords(recordData?.data?.data?.[0]);
                    setLoading(false);
                    }
                }
             }
    }
    fetchData();
    },[])
    
    // const [blurBase64, setBlurBase64] = useState('')
    // const [agentImg, setAgentImg] = useState(<Image
    //     width={200}
    //     height={'85%'}
    //     src="/images/users/welcome.jpg"
    //     alt=''
    // />)

    // async function convertTo64() {
    //     await imageToBase64('/images/users/welcome.jpg').then((res) => {
    //         setBlurBase64(res)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }



    // useEffect(() => {
    //     convertTo64()
    //     if (state?.agentsResp?.[0]?.New_Agent_Image_URL !== null && state?.agentsResp?.[0]?.New_Agent_Image_URL !== undefined) {
    //         setAgentImg(
    //             <img
    //                 src={state?.agentsResp?.[0]?.New_Agent_Image_URL}
    //                 alt='agent image'
    //                 style={{width: "100%", maxWidth: "100px", maxHeight: "60px"}}
    //             />
    //         )
    //     }
    // }, [])

    return (
        <header className="header-area">
        <div style={{height: '105px', padding: '5px 140px'}}  className="header-wrapper d-flex align-items-center justify-content-between">
          <div className="logo-area">
            <Link href="/">
              <Image src={logo} alt="logo" width={200} height={200} />
            </Link>
          </div>
          {
          loading ? 
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                  <Image width={100} height={100} src="/loader.gif" alt="loader gif" />
            </Box>
          :
          <div style={{textAlign: 'center'}}  className="header-right-area d-flex align-items-center">
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div className="user-btn-area dropdown">
            <div
              className="user-btn-wrapper d-flex align-items-center dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
               <div className="user-img">
                  <img width={50} height={50} src={agentRecords?.Agent_Image_URL} alt="agent-img" />
                </div>
                <div className="user-btn-text">
                  <span>
                    <i className="fas fa-angle-down"></i>
                  </span>
                </div>
            </div>
            <div
              className="user-menu dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
            >
              <ul>
                {topbarLinks?.map((topbarLink, index) => {
                  return (
                    <li style={{ marginBottom: "20px" }}>
                      <button
                        type="button"
                        class="btn btn-primary"
                        style={{ width: "100%" }}
                      >
                        <Link
                          href={topbarLink.href}
                          className="dropdown-menu-item"
                        >
                          {topbarLink.label}
                        </Link>
                      </button>
                    </li>
                  );
                })}
                <li>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => signOut()}
                    style={{ width: "100%" }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
        }
          
            {/* <div style={{textAlign: 'center'}}  className="header-right-area d-flex align-items-center">
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div className="user-btn-area dropdown">
              <div
                className="user-btn-wrapper d-flex align-items-center dropdown-toggle"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="user-img">
                  <img width={50} height={50} src={agentRecords?.Agent_Image_URL} alt="agent-img" />
                </div>
                <div className="user-btn-text">
                  <span>
                    <i className="fas fa-angle-down"></i>
                  </span>
                </div>
              </div>
              <div
                className="user-menu dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <ul>
                  {topbarLinks?.map((topbarLink) => {
                    return (
                      <li style={{ marginBottom: "20px" }}>
                        <button
                          type="button"
                          class="btn btn-primary"
                          style={{ width: "100%" }}
                        >
                          <Link
                            href={topbarLink.href}
                            className="dropdown-menu-item"
                          >
                            {topbarLink.label}
                          </Link>
                        </button>
                      </li>
                    );
                  })}
                  <li>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => signOut()}
                      style={{ width: "100%" }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
              </div>
            </div>
          </div>   */}
        </div>
      </header>
    );
};

export default NavbarAgent;

