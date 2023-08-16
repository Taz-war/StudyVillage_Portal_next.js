import React, { useEffect, useState } from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import useTrackedStore from "../../store/useTrackedStore";
import YourProgram from "../../components/HomeStudent/YourProgram";
import { getSession } from "next-auth/client";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";
import Image from "next/image";

const Program = () => {
  const state = useTrackedStore();
  const [loading, setLoading] = useState(false);
  const [enrolmentRecords, setEnrolmentRecords] = useState(
    state?.enrolmentsResp?.[0] || {}
  );
  const [studentRecords, setStudentRecords] = useState(
    state?.studentsResp?.[0] || {}
  );
  const [assets, setAssets] = useState(state?.allAssets);
  // const [stageImg, setStageImg]= useState("");
  const [elicosTable, setElicosTable] = useState([]);
  const [productTable, setProductTable] = useState([]);
  const [elicosImageDesc, setElicosImageDesc] = useState({});
  const [awardImageDesc, setAwardImageDesc] = useState({});
  // console.log(state?.enrolmentsResp?.[0]);
  // console.log(state?.studentsResp?.[0]);

  useEffect(() => {
    if (assets.length > 0) {
      let assetsMap1 = new Map();
      assets.map((item) => assetsMap1.set(item.Name, item));
      const elicosImageDescTemp = assetsMap1.get(
        `${enrolmentRecords?.ELICOS_Program} Module Details`
      );
      setElicosImageDesc(elicosImageDescTemp);
      const awardImageDescTemp = assetsMap1.get(
        enrolmentRecords?.Award_Program
      );
      setAwardImageDesc(awardImageDescTemp);
      // let data = assetsMap1.get(enrolmentRecords?.Life_Cycle_Stage_ELICOS) || assetsMap1.get(enrolmentRecords?.Life_Cycle_Stage);
      // setStageImg(data?.Image_URL);
      let newMap = new Map([
        ["ELICOS A", ["EL1"]],
        ["ELICOS B", ["EL1", "EL2"]],
        ["ELICOS C", ["EL1", "EL2", "EL3"]],
        ["ELICOS D", ["EL1", "EL2", "EL3", "EL4"]],
        ["ELICOS E", ["EL1", "EL2", "EL3", "EL4", "EL5"]],
        ["Postgrad Accelerator - 1UP (PGA1)", ["M4", "M4B"]],
        ["Postgrad Accelerator - 2UP (PGA2)", ["M2", "M4", "M4B"]],
        ["Postgrad Accelerator - 3UP (PGA3)", ["M4", "M5", "M6"]],
        ["Postgrad Accelerator - 4UP (PGA4)", ["M1", "M4", "M5", "M6"]],
        ["Undergrad Advantage - 2UP (UA2)", ["M2", "M4", "M4B"]],
        ["Undergrad Advantage - 3UP (UA3)", ["M4", "M5", "M6"]],
        ["Undergrad Advantage - 4UP (UA4)", ["M1", "M4", "M5", "M6"]],
        ["Undergrad Advantage - 5UP (UA5)", ["M1", "M2", "M4", "M5", "M6"]],
        [
          "Undergrad Advantage - 6UP (UA6)",
          ["M1", "M2", "M3", "M4", "M5", "M6"],
        ],
        [
          "Undergrad Advantage - 7UP (UA7)",
          ["M1", "M2", "M4", "M5", "M6", "M7", "M8"],
        ],
        [
          "Undergrad Advantage - 8UP (UA8)",
          ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"],
        ],
      ]);
      let elicosTable = newMap.get(enrolmentRecords?.ELICOS_Options);
      let productTable = newMap.get(enrolmentRecords?.Product_Options);
      let elicosArray = elicosTable?.map((item) =>
        assetsMap1.get(`${item} Module Details`)
      );
      setElicosTable(elicosArray.filter(Boolean));
      // elicosArray.map(item=> {
      //     if(`${enrolmentRecords?.Life_Cycle_Stage_ELICOS} Details` == item.Name){
      //         item.status= 'current';
      //         return item;
      //     }
      //     return item;
      // }
      // )
      // const currentElicosIndex = elicosArray.findIndex(object => {
      //     return object.status === 'current';
      //   });

      //   elicosArray.map((item, index)=> {
      //       if(index < currentElicosIndex){
      //           item.status='past';
      //           return item;
      //       }
      //       else if(index > currentElicosIndex){
      //           item.status='next';
      //           return item;
      //       }
      //   })
      //    console.log(enrolmentRecords?.Life_Cycle_Stage);
      let productArray = productTable?.map((item) =>
        assetsMap1.get(`${item} Module Details`)
      );
      setProductTable(productArray.filter(Boolean));
      //     productArray.map(item=> {
      //         if(`${enrolmentRecords?.Life_Cycle_Stage} Details` == item.Name){
      //             item.status= 'current';
      //             return item;
      //         }
      //         return item;
      //     }
      //     )
      //     const currentProductIndex = productArray.findIndex(object => {
      //         return object.status === 'current';
      //       });

      //       productArray.map((item, index)=> {
      //           if(index < currentProductIndex){
      //               item.status='past';
      //               return item;
      //           }
      //           else if(index > currentProductIndex){
      //               item.status='next';
      //               return item;
      //           }
      //       })
      //       console.log(productArray);
      // let totalTableData= [...elicosArray, ...productArray];
      // setTableData(totalTableData.filter(Boolean));
    }
  }, [assets]);

  useEffect(() => {
    async function fetchData() {
      if (!state?.enrolmentsResp?.[0]) {
        setLoading(true);
        const session = await getSession();
        if (session?.user?.email) {
          const recordData = await axios.post(`/api/getZohoData`, {
            moduleApiName: "Contacts",
            criteria: `(Email:equals:${session?.user?.email})`,
          });
          if (recordData?.data?.data?.[0]) {
            setStudentRecords(recordData?.data?.data?.[0]);

            const enrolmentData = await axios.post(`/api/getZohoData`, {
              moduleApiName: "Deals",
              criteria: `(Contact_Name:equals:${recordData?.data?.data?.[0]?.id})`,
            });
            setEnrolmentRecords(enrolmentData?.data?.data?.[0]);
          }
        }
        const assetsData = await axios.post(`/api/getZohoData`, {
          moduleApiName: "Portal_Assets",
        });
        setAssets(assetsData?.data?.data);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div class="main-root">
        <Sidebar />
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Image
              width={150}
              height={150}
              src="/loader.gif"
              alt="loader gif"
            />
          </Box>
        ) : (
          <YourProgram
            elicosImageDesc={elicosImageDesc}
            awardImageDesc={awardImageDesc}
            elicosTable={elicosTable}
            productTable={productTable}
          />
        )}
      </div>
    </>
  );
};

export default Program;
