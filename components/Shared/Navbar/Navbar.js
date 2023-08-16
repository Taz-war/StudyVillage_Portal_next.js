import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/SVLogo.svg";
import user from "../../../assets/img/user.jpg";
import Link from "next/link";
import Image from "next/image";
import useTrackedStore from "../../../store/useTrackedStore";
import { getSession, signOut } from "next-auth/client";
import { useRouter } from "next/router";
import axios from "axios";
import { Box } from "@mui/material";

const Navbar = () => {
  const state = useTrackedStore();
  const router = useRouter();
  const [loading, setLoading]= useState(false);
  const [studentRecords,setStudentRecords] = useState(state?.studentsResp?.[0] || {});
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
                if(recordData?.data?.data?.[0].id){
                    setStudentRecords(recordData?.data?.data?.[0]);
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
              <div className="user-img">
                <Image width={50} height={50} src={user} alt="" />
              </div>
              <div className="user-btn-text">
                {studentRecords.Full_Name}
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
            <h6 style={{marginBottom: '4px', color: '#616161', fontWeight: '600'}}>{studentRecords.Institution}, {studentRecords.Country_Region}</h6>
            <p style={{margin: 0, color: '#757575'}}> SV Number: {studentRecords.id}</p>
          </div>
        </div>
        }
        
      </div>
    </header>
  );
};

export default Navbar;