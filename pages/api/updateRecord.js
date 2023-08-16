import axios from "axios";
import { getAccessTokenFromLocal } from "./util/getAccessTokenFromLocal";

export default async function handler(req, res) {
  try {
    //Access token
    let resultAccessToken = await getAccessTokenFromLocal(0);
    const { moduleName, updated_data } = req.body;

    //Update Records
    let updateRecord = await axios.put(
      `https://www.zohoapis.com/crm/v2/${moduleName}`,
      {data: [updated_data]},
      {
        headers: {
          Authorization: resultAccessToken.access_token,
        },
      }
    );

    if (updateRecord.status == 429) {
      let resultAccessToken1 = await getAccessTokenFromLocal(1);
      updateRecord = await axios.put(
        `https://www.zohoapis.com/crm/v2/${moduleName}`,
        {data: [updated_data]},
        {
          headers: {
            Authorization: resultAccessToken1.access_token,
          },
        }
      );
    }
    //if record data isn't updated properly
    if (!updateRecord.data) {
      await res.status(200).json({
        ok: false,
        error: "Something went wrong",
      });
    }

    //if record data is updated successfully
    if (updateRecord.data.data[0].status === "success") {
      await res.status(200).json({
        ok: true,
        message: "Record data is updated successfully",
      });
    }
  } catch (err) {
    console.log("CATCH ERR", err.response.data);
    await res.status(400).json({
      ok: false,
      error: err,
    });
  }
}
