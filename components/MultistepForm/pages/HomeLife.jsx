import { Box } from "@mui/system";
import React from "react";
import CustomSlider from "../Inputs/CustomSlider";

function HomeLife() {
  return (
    <Box sx={{ padding: "30px 0px" }}>
      <b className="heading">Home Life</b>
      <br />
      <CustomSlider
        label="Are you satisfied overall with your accommodation?"
        name="satisfied_with_accomodation"
      />
      <br />
      <CustomSlider
        label="Do you find it easy to study in your home environment?"
        name="easy_to_study_at_home"
      />
      <br />
      <CustomSlider
        label="Are you satisfied you can afford your accommodation?"
        name="satisfied_at_affording_housing"
      />
      <br />
    </Box>
  );
}

export default HomeLife;
