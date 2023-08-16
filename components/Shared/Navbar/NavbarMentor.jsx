import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/SVLogo.svg";
import user from "../../../assets/img/user.jpg";
import Link from "next/link";
import Image from "next/image";
import useTrackedStore from "../../../store/useTrackedStore";
import { getSession, signOut } from "next-auth/client";
import { useRouter } from "next/router";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";

const NavbarMentor = () => {
  const state = useTrackedStore();
  const router = useRouter();
  const [loading, setLoading]= useState(false);
  const [supporterRecords,setSupporterRecords] = useState(state?.studentSupportersResp?.[0] || {});
  const profile =
    router.pathname.split("/")?.[1] ||
    state?.portalUserResp?.User_Type?.toLowerCase() ||
    "";
  const topbarLinks = [
    {
        href: `/${profile}`,
        label: `View Profile`,
    },
  ];

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
    <header className="header-area">
      <div style={{height: '125px', padding: '5px 140px'}}  className="header-wrapper d-flex align-items-center justify-content-between">
        <div className="logo-area">
          <Link href={`/${profile}`}>
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
              <div className="supporter-img">
                <Image width={70} height={50} src={user} alt="profile-img" />
              </div>
              <div style={{marginLeft: '7px'}} className="user-btn-text">
                {supporterRecords.Vendor_Name}
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
        
      </div>
    </header>
  );
};

export default NavbarMentor;
