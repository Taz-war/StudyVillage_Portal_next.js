import axios from "axios";
import {getAccessTokenFromLocal} from "./util/getAccessTokenFromLocal";
export default async function handler(req, res) {
    try {
        let resultAccessToken = await getAccessTokenFromLocal(0);
        const { moduleApiName = "", criteria = "" } = req.body;
        if (moduleApiName === "") {
            res.json({
                status: "error",
                message: "Module API Name is not provided",
                data: {},
            });
            return;
        }
        let url = `https://www.zohoapis.com/crm/v2/${moduleApiName}`;

        if (criteria !== "") {
            url = `${url}/search?criteria=${criteria}`;
        }
        const headers = {
            headers: { Authorization: resultAccessToken.access_token },
        };

        try {
            let resp = await axios.get(url, headers);
            if(resp.status == 429) {
                let resultAccessToken1 = await getAccessTokenFromLocal(1)
                const headers = {
                    headers: { Authorization: resultAccessToken1.access_token },
                };       
                resp = await axios.get(url, headers);
            }
            res.json({
                status: "success",
                message: "Data fetched successfully",
                data: resp?.data?.data,
            });
            return;
        } catch (error) {
            res.json({
                status: "error",
                message: "Check error data",
                data: error.message,
            });
            return;
        }
    } catch (error) {
        res.json({
            status: "error",
            message: "Check error data",
            data: error.message,
        });
        return;
    }
}
