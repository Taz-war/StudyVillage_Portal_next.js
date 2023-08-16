import axios from "axios";
import FormData from "form-data";
import formidable from "formidable";
import { getAccessTokenFromLocal } from "./util/getAccessTokenFromLocal";
import fs from "fs";
// set bodyparser
export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(req, res) {
  try {
    let resultAccessToken = await getAccessTokenFromLocal(0)

    const promise = new Promise((resolve, reject) => {
      let form = new formidable.IncomingForm();
      form.keepExtensions = true;
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });
    // //read fields and files
    const { fields, files } = await promise;

    let requestBody = new FormData();
    requestBody.append("file", fs.createReadStream(files?.file?.path));
    
    const updateResp = await axios.post(
      `https://www.zohoapis.com/crm/v2/Vendors/${fields?.id}/Attachments`,
      requestBody,
      {
        headers: {
            ...requestBody.getHeaders(),
          Authorization: resultAccessToken?.access_token,
        },
        encoding: "utf8",
        throwHttpErrors: false,
      }
    );
    console.log(updateResp?.data);
    await res.json({
      status: updateResp.status,
      message: "File uploaded successfully",
    });
    return;
  } catch (error) {
    console.log("Error Response ", error);
    await res.json({ status: "error", message: error });
    return;
  }
}
