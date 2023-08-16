import axios from "axios";
import { getAccessTokenFromLocal } from "./util/getAccessTokenFromLocal";
export default async function handler(req, res) {
  try {
    let resultAccessToken = await getAccessTokenFromLocal(0);
    const { id } = req.body;

    let headers = {
      headers: { Authorization: resultAccessToken.access_token },
    };
    let url2 = `https://www.zohoapis.com/crm/v2/Deals/search?criteria=(Contact_Name:equals:${id})`;

    let resp2 = await axios.get(url2, headers);
    if (resp2.status == 429) {
      let resultAccessToken1 = await getAccessTokenFromLocal(1);
      headers = {
        headers: { Authorization: resultAccessToken1.access_token },
      };
      resp2 = await axios.get(url2, headers);
    }

    if (resp2?.data?.data?.[0]?.Assigned_Student_Supporters) {
      let url3 = `https://www.zohoapis.com/crm/v2/Vendors/${resp2?.data?.data?.[0]?.Assigned_Student_Supporters?.id}`;
      let resp3 = await axios.get(url3, headers);
      res.json({
        status: "success",
        data: resp3?.data?.data?.[0],
      });
      return;
    } else {
      res.json({
        status: "success",
        message: "Data not found",
        data: {},
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
