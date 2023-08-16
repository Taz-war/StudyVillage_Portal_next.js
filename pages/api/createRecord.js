import axios from "axios";

export default async function handler(req, res) {
  try {
    const accessToken = await axios.get(process.env.ACCESSTOKEN_URL);
    
    let url = `https://www.zohoapis.com/crm/v2/${req.body.moduleName}`

    let response = await axios.post(url, req.body.requestBody, {headers: {
      Authorization: accessToken?.data?.access_token,
    }
    });

    if(response.data?.data){
      await res.json({
          status: response.status,
          message: "Record created successfully",
        });
      return;
    }
  } catch (error) {
    await res.json({ status: "error", message: error, id: null });
    return;
  }
}
