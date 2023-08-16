import { getSession } from "next-auth/client";
import axios from "axios";
import StudentProfile from "../../../../components/HomeMentor/StudentProfile";

export default function home(props){

    return(
        <StudentProfile studentRecords={props.data} />
    )
}

export async function getServerSideProps(context){

    const id= context.params.studentId;
    //* Session for SSG
    const session = await getSession(context);
    //? If Not Logged In
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
    //? If Logged in

    const {
        data: { access_token: accessToken },
      } = await axios.get(process.env.ACCESSTOKEN_URL);


    let propsData = {};
 
    async function getRecordsThroughCOQLQuery() {
            let url = `https://www.zohoapis.com/crm/v2/Contacts/${id}`;

            const headers = {
                headers: { Authorization: accessToken }
            };
            let resp = await axios.get(url, headers);
        
            propsData= resp.data?.data ? resp.data?.data[0] : {};
        }
        if(id != 'null'){
             await getRecordsThroughCOQLQuery();
        }

    return {
        props: { data: propsData ? propsData : {} }, // will be passed to the page component as props
    };
  }