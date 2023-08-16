import React, { useEffect } from "react";
import Image from "next/image";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import useTrackedStore from "../../store/useTrackedStore";
import InDepth from "../../components/HomeStudent/InDepth";
import { Box } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const depth = () => {
  const state = useTrackedStore();
  const [assets, setAssets] = useState(state?.allAssets);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (state?.allAssets?.length < 1) {
        setLoading(true);
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
          <InDepth allAssets={assets} />
        )}
      </div>
    </>
  );
};

export default depth;
