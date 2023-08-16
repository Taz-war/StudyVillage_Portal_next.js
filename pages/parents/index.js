import { useEffect } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/client";
import Cookies from "js-cookie";
import * as cookie from "cookie";

import Home from "../../components/Home/Home";
import Button from "@mui/material/Button";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import axios from "axios";
import useTrackedStore from "../../store/useTrackedStore";
import _ from "lodash";
import { useRouter } from "next/router";
import Home__Content from "../../components/Home/Home__Content";

export default function App({
    customizer,
    enrolmentsResp,
    studentsResp,
    portalUserResp,
    parentsResp,
    svTasksResp,
    surveysResp,
    studentSupportersResp,
    agentsResp,
    portalAssets,
    parentsMeetingDescriptions,
    lifecycleDetails,
    allAssets,
}) {
    // console.log({ enrolmentsResp });
    const [session, loading] = useSession();
    const state = useTrackedStore();
    const router = useRouter();
    let time;

    useEffect(async () => {
        //todo Setting all data to the State for Reuse
        state.setEnrolmentsResp(enrolmentsResp);
        state.setStudentsResp(studentsResp);
        state.setPortalUserResp(portalUserResp);
        state.setParentsResp(parentsResp);
        state.setSvTasksResp(svTasksResp);
        state.setSurveysResp(surveysResp);
        state.setStudentSupportersResp(studentSupportersResp);
        state.setAgentsResp(agentsResp);
        state.setPortalAssets(portalAssets);
        state.setParentsMeetingDescriptions(parentsMeetingDescriptions);
        state.setLifecycleDetails(lifecycleDetails);
        state.setAllAssets(allAssets);
        if (!!session && session.remember === false) {
            time = setInterval(async () => {
                Cookies.set("expiredTime", Date.now() + 2 * 10000);
            }, 10000);
        }
        // Test Api Call
    }, [!!session]);

    useEffect(() => {
        // Remove those data from cookies which u set them at the time of reset password
        Cookies.get("name") && Cookies.remove("name", { path: "" });
        Cookies.get("user_email") && Cookies.remove("user_email", { path: "" });
        Cookies.get("remember") && Cookies.remove("remember", { path: "" });
    }, []);

    const topbarLinks = [
        {
            href: "/parents",
            label: `View Your Profile`,
        },
        {
            href: "/student",
            label: `View ${state?.studentsResp?.[0]?.Full_Name} Profile`,
        },
    ];

    const profile =
        router.pathname.split("/")?.[1] ||
        state?.portalUserResp?.User_Type?.toLowerCase() ||
        "";
    const quickLinks = [
        {
            link: `/${profile}/program-calendar`,
            name: `Discover ${state?.studentsResp?.[0]?.Full_Name} Program In Depth`,
        },
    ];
    const profileUserName = `${
        state?.studentsResp?.[0]?.Full_Name || ""
    }'s Parents`;

    // return <>Internal Server Error, Please check with Administrator</>;
    return (
        <>
            {!_.isEqual(state.studentsResp, {}) && (
                <>
                    <Navbar
                        topbarLinks={topbarLinks}
                        profileUserName={profileUserName}
                        imgSrc={state?.parentsResp?.[0]?.Profile_Image_URL}
                    />
                    <div class='main-root'>
                        <Sidebar />
                        <Home__Content quickLinks={quickLinks} />
                    </div>
                </>
            )}
        </>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    const parsedCookies = cookie.parse(context.req.headers.cookie || "");

    // if seesion not found then navigate him to the login
    if (!session) {
        return {
            redirect: {
                destination: "/login",
            },
            props: {
                session: null,
            },
        };
    }

    // when user sign in using credential provider and uncheck the remember option
    if (session && session.remember === false) {
        // when the user signin first time, remember variable in cookie will be empty but session variable will contain exp thats why we have to check it first
        let expired = Date.now() > (parsedCookies.expiredTime ?? session.exp);

        if (expired) {
            //remove remember from cookie
            if (parsedCookies.expiredTime) {
                context.res.setHeader(
                    "Set-Cookie",
                    cookie.serialize(
                        "expiredTime",
                        String(parsedCookies.expiredTime),
                        {
                            httpOnly: true,
                            maxAge: 0,
                        }
                    )
                );
            }
            return {
                redirect: {
                    destination: "/login",
                },
                props: {
                    session: null,
                },
            };
        }
    }
    //* Everyting is now OK, do your additional Code Here
    let portalUserResp = {};
    let parentsResp = [];
    let studentsResp = [];
    let enrolmentsResp = [];
    let surveysResp = [];
    let svTasksResp = [];
    let studentSupportersResp = [];
    let agentsResp = [];
    let portalAssets = [];
    let parentsMeetingDescriptions = [];
    let lifecycleDetails = [];
    let allAssets = [];
    const {
        data: { access_token: accessToken },
    } = await axios.get(process.env.ACCESSTOKEN_URL);

    // //todo Fetching Portal User Details
    const { data: portResp } = await axios.post(
        `${process.env.NEXTAUTH_URL}/api/getZohoData`,
        {
            moduleApiName: "Portal_Users",
            criteria: `(Email:equals:${session?.user?.email})`,
        }
    );
    portalUserResp = portResp?.data?.[0];
    console.log({ portalUserResp });

    // //todo Fetching Individual Type Details Parents/Students/Supporters etc

    const { data: pResps } = await axios.post(
        `${process.env.NEXTAUTH_URL}/api/getZohoData`,
        {
            moduleApiName: "Accounts",
            criteria: `(Email:equals:${session?.user?.email})`,
        }
    );
    parentsResp = pResps?.data;
    console.log({ parentsResp });

    // //todo Fetching Students based on Parents

    for (const parentResp of parentsResp) {
        const { data: stuResp } = await axios.post(
            `${process.env.NEXTAUTH_URL}/api/getZohoData`,
            {
                moduleApiName: "Contacts",
                criteria: `(Account_Name:equals:${parentResp?.id})`,
            }
        );
        studentsResp = [...studentsResp, ...stuResp?.data];
    }

    // //todo Fetching Enrollments of All Students

    for (const studentResp of studentsResp) {
        const { data: enrResp } = await axios.post(
            `${process.env.NEXTAUTH_URL}/api/getZohoData`,
            {
                moduleApiName: "Deals",
                criteria: `(Contact_Name:equals:${studentResp?.id})`,
            }
        );
        enrolmentsResp = [...enrolmentsResp, ...enrResp?.data];
    }

    //? Determining the Potions Semester
    let productOptions =
        enrolmentsResp?.[0]?.ELICOS_Options ||
        enrolmentsResp?.[0]?.Product_Options?.split("(")?.[1]?.split(
            ")"
        )?.[0] ||
        "";

    //todo Fetch Portal Assets for Portal Options
    if (productOptions !== "") {
        try {
            const resp = await axios.get(
                `https://www.zohoapis.com/crm/v2/Portal_Assets/search?criteria=(Name:equals:${productOptions})`,
                { headers: { Authorization: accessToken } }
            );
            portalAssets = resp?.data?.data;
            console.log({ portalAssets });
        } catch (error) {
            const errorCode = error?.response?.data?.code;
            console.log("Error SV Tasks : ", errorCode);
        }
    }

    //todo Fetch Parrents Meeting from Portal Assets

    try {
        const resp = await axios.get(
            `https://www.zohoapis.com/crm/v2/Portal_Assets/search?criteria=(Name:equals:Parents%20Meeting)`,
            { headers: { Authorization: accessToken } }
        );
        parentsMeetingDescriptions = resp?.data?.data;
        console.log({ parentsMeetingDescriptions });
    } catch (error) {
        const errorCode = error?.response?.data?.code;
        console.log("Error Portal Assets : ", errorCode);
    }

    let splitedName = _.split(enrolmentsResp?.[0]?.Life_Cycle_Stage, "(")?.[1];
    splitedName = _.split(splitedName, ")")?.[0];
    //*/
    /*try {
        const resp = await axios.get(
            `https://www.zohoapis.com/crm/v2/Portal_Assets/search?criteria=(Name:equals:${splitedName}%20Details)`,
            { headers: { Authorization: accessToken } }
        );
        lifecycleDetails = resp?.data?.data;
        console.log({ lifecycleDetails });
    } catch (error) {
        const errorCode = error?.response?.data?.code;
        console.log("Error Portal Assets : ", errorCode);
    }*/

    try {
        const resp = await axios.get(
            `https://www.zohoapis.com/crm/v2/Portal_Assets`,
            { headers: { Authorization: accessToken } }
        );
        allAssets = resp?.data?.data;
        console.log({ allAssets });
    } catch (error) {
        const errorCode = error?.response?.data?.code;
        console.log("Error Portal Assets : ", errorCode);
    }

    //todo Fetching SV Tasks of All Students
    for (const studentResp of studentsResp) {
        try {
            const resp = await axios.get(
                `https://www.zohoapis.com/crm/v2/SV_Tasks/search?criteria=(Student:equals:${studentResp?.id})`,
                { headers: { Authorization: accessToken } }
            );

            svTasksResp = [...svTasksResp, ...resp?.data?.data];
        } catch (error) {
            const errorCode = error?.response?.data?.code;
            console.log("Error SV Tasks : ", errorCode);
        }
    }

    //todo Fetching Surveys of All Students
    for (const studentResp of studentsResp) {
        try {
            const resp = await axios.get(
                `https://www.zohoapis.com/crm/v2/Student_Surveys/search?criteria=(Student:equals:${studentResp?.id})`,
                { headers: { Authorization: accessToken } }
            );

            surveysResp = [...surveysResp, ...resp?.data?.data];
        } catch (error) {
            const errorCode = error?.response?.data?.code;
            console.log("Error Surveys Resp : ", errorCode);
        }
    }

    //todo Fetching Student Supporters of All Enrollments
    for (const enrolmentResp of enrolmentsResp) {
        if (enrolmentResp?.Assigned_Student_Supporters?.id) {
            try {
                const resp = await axios.get(
                    `https://www.zohoapis.com/crm/v2/Vendors/${enrolmentResp?.Assigned_Student_Supporters?.id}`,
                    { headers: { Authorization: accessToken } }
                );
                // console.log("Student Supporters ", resp?.data?.data);
                studentSupportersResp = [
                    ...studentSupportersResp,
                    ...resp?.data?.data,
                ];
            } catch (error) {
                const errorCode = error?.response?.data?.code;
                console.log("Error Student Supporters : ", error);
            }
        }
    }
    //todo Fetching Agents of All Enrollments
    for (const enrolmentResp of enrolmentsResp) {
        if (enrolmentResp?.Agent_Name?.id) {
            try {
                const resp = await axios.get(
                    `https://www.zohoapis.com/crm/v2/Agents1/${enrolmentResp?.Agent_Name?.id}`,
                    { headers: { Authorization: accessToken } }
                );
                agentsResp = [...agentsResp, ...resp?.data?.data];
            } catch (error) {
                const errorCode = error?.response?.data?.code;
                console.log("Error Student Supporters : ", error);
            }
        }
    }

    return {
        props: {
            enrolmentsResp,
            studentsResp,
            portalUserResp,
            parentsResp,
            svTasksResp,
            surveysResp,
            studentSupportersResp,
            agentsResp,
            portalAssets,
            parentsMeetingDescriptions,
            lifecycleDetails,
            allAssets,
        },
    };
}
