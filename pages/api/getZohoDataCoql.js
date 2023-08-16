import axios from "axios";
import {getAccessTokenFromLocal} from "./util/getAccessTokenFromLocal";
export default async function handler(req, res) {
    try {
        let resultAccessToken = await getAccessTokenFromLocal(0);

        let url = 'https://www.zohoapis.com/crm/v2/coql';
        
        let requestBody = {
            'select_query': req.body.select_query
        };

        let response = await axios.post(url, requestBody, {headers: {
            Authorization: resultAccessToken.access_token,
        }
        });
        const result= response.data?.data ? response.data?.data : [];

        res.json({
            status: "success",
            message: "Data fetched successfully",
            data: result,
        });
        return;
    }
    catch (error) {
        res.json({
            status: "error",
            message: "Check error data",
            data: error.message,
        });
        return;
    }
}


