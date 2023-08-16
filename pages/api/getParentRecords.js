import axios from "axios";
import { getAccessTokenFromLocal } from "./util/getAccessTokenFromLocal";
export default async function handler(req, res) {
  try {
    let parentsResp= [];
    let resultAccessToken = await getAccessTokenFromLocal(0);
    const { id } = req.body;

    let headers = {
      headers: { Authorization: resultAccessToken.access_token },
    };

    let url = `https://www.zohoapis.com/crm/v2/Parent_Guardian_Details/search?criteria=(Parent_Id:equals:${id})`;

    const resp = await axios.get(url,headers);

    if (resp.status == 429) {
      let resultAccessToken1 = await getAccessTokenFromLocal(1);
      headers = {
        headers: { Authorization: resultAccessToken1.access_token },
      };
      resp = await axios.get(url,headers);
    }
    let parents = resp?.data?.data || [];
    for (let parent of parents) {
        let resp1 = await axios.get(
            `https://www.zohoapis.com/crm/v2/Accounts/search?criteria=(Email:equals:${parent?.Email})`,
            headers
        );
        parentsResp = [...parentsResp, ...resp1?.data?.data];
    }
    res.json({
        data: parentsResp,
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
}







