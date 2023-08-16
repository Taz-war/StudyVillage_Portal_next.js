import React from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Parent__Content from "../../components/User__Profile/Parent/Parent__Content";
import useTrackedStore from "../../store/useTrackedStore";
const Parents = () => {
  const state = useTrackedStore();

  return (
    <>
      <Navbar />
      <div class="main-root">
        <Sidebar />
        <Parent__Content />
      </div>
    </>
  );
};

export default Parents;
