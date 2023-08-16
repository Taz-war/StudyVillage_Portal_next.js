import { Box, Grid, Typography } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import Image from "next/image";
import Image1 from "../../assets/Student/Picture1.png";
import Image2 from "../../assets/Student/Picture2.png";
import Image3 from "../../assets/Student/Picture3.png";
import Image6 from "../../assets/Student/Picture4.png";
import Image5 from "../../assets/Student/Picture5.png";
import Image4 from "../../assets/Student/Picture6.png";
import { useEffect } from "react";
import { useState } from "react";

export default function InDepth({ allAssets }) {
  const [assets, setAssets] = useState();
  useEffect(() => {
    if (allAssets?.length) {
      let assetsMap1 = new Map();
      allAssets.map((item) => assetsMap1.set(item.Name, item));
      setAssets(assetsMap1);
    }
  }, []);
  return (
    <Box sx={{ m: 20, display: "flex" }}>
      <Box sx={{ width: "55%", mr: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box sx={{ p: 2, bgcolor: "#F2F5CD" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Program Explainer
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ p: 2, bgcolor: "#F2F5CD" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Background Explainer
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Image src={Image1} />
          </Grid>
          <Grid item xs={6}>
            <Image src={Image2} />
          </Grid>
          <Grid item xs={6}>
            <Image src={Image3} />
          </Grid>
          <Grid item xs={6}>
            <Image src={Image4} />
          </Grid>
          <Grid item xs={6}>
            <Image src={Image5} />
          </Grid>
          <Grid item xs={6}>
            <Image src={Image6} />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "40%" }}>
        <Box sx={{ p: 2, bgcolor: "#F5F5F5;" }}>
          <Typography sx={{ fontWeight: "bold" }}>
            Background Resources
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          As you’ll see, there’s a heap of video explainers and describing each
          part of your module. Of course you can access these anytime. The
          videos are no more than 5 minutes in length. In no time, you’ll be up
          to speed on what your current module involves, the StudyVillage“
          mission” and what’s available to you. In the first column below,
          there’s a video explainer for each module in your program, and in the
          second we describe the key parts within each module. There’s a little
          more detail, in writing, in the PDF explainers including ‘Outline
          Samples’ – (i.e. shareable info that outlines your progress at each
          semester). While there’s lots of information here, don’t worry, it’s
          light and simple – you don’t have to “learn” it and your student
          supporter will guide you through the process.
        </Box>
        <Box sx={{ p: 2, bgcolor: "#F5F5F5;" }}>
          <Typography sx={{ fontWeight: "bold" }}>
            Written explainers
          </Typography>
        </Box>
        <Grid sx={{ mt: 2 }} container spacing={2}>
          <Grid item xs={6}>
            <a href={assets?.get("Program Overview")?.PDF_URL} target="_blank">
              <PictureAsPdfIcon
                sx={{
                  color: "#ff4a3d",
                  "&:hover": { color: "#fa3123" },
                }}
              />{" "}
              Program Overview
            </a>
          </Grid>
          <Grid item xs={6}>
            <a href={assets?.get("Parents Meeting")?.PDF_URL} target="_blank">
              <PictureAsPdfIcon
                sx={{
                  color: "#ff4a3d",
                  "&:hover": { color: "#fa3123" },
                }}
              />{" "}
              Family Meeting
            </a>
          </Grid>
          <Grid item xs={6}>
            <a
              href={assets?.get("Pre Departure Call")?.PDF_URL}
              target="_blank"
            >
              <PictureAsPdfIcon
                sx={{
                  color: "#ff4a3d",
                  "&:hover": { color: "#fa3123" },
                }}
              />{" "}
              Pre-departure
            </a>
          </Grid>
          <Grid item xs={6}>
            <a href={assets?.get("Follow Up Call")?.PDF_URL} target="_blank">
              <PictureAsPdfIcon
                sx={{
                  color: "#ff4a3d",
                  "&:hover": { color: "#fa3123" },
                }}
              />{" "}
              Follow-up calls
            </a>
          </Grid>
          <Grid item xs={6}>
            <a href={assets?.get("Self-Survey")?.PDF_URL} target="_blank">
              <PictureAsPdfIcon
                sx={{
                  color: "#ff4a3d",
                  "&:hover": { color: "#fa3123" },
                }}
              />{" "}
              Self-Surveys
            </a>
          </Grid>
          <Grid item xs={6}>
            <a href={assets?.get("Open Support")?.PDF_URL} target="_blank">
              <PictureAsPdfIcon
                sx={{
                  color: "#ff4a3d",
                  "&:hover": { color: "#fa3123" },
                }}
              />{" "}
              Open Support
            </a>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
