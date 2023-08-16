import React from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Student__Content from "../../components/User__Profile/Student/Student__Content";
import useTrackedStore from "../../store/useTrackedStore";

const Student = () => {
    const state = useTrackedStore();
    const topbarLinks = [
        {
            href: "/student",
            label: `View Profile`,
        },
    ];
    const profileUserName = `${state?.studentsResp?.[0]?.Full_Name || ""}`;

    return (
        <>
            <Navbar
                // profileUserName={profileUserName}
                // topbarLinks={topbarLinks}
            />
            <div class='main-root'>
                <Sidebar />
                <Student__Content />
            </div>
        </>
    );
};

export default Student;
