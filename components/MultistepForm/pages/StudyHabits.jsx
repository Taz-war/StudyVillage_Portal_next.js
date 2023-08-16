import { Box } from "@mui/system";
import React from "react";
import CustomSlider from "../Inputs/CustomSlider";

function StudyHabits() {
  return (
    <Box sx={{ padding: "30px 0px" }}>
      <b className="heading">Study Habits</b>
      <br />
      <CustomSlider
        label="Are you satisfied you have enough time for study?"
        name="enough_time_for_study"
      />
      <br />
      <CustomSlider
        label="Are you confident you will achieve your English study goals?"
        name="english_study_goals"
      />
      <br />
      <CustomSlider
        label="Do you feel you are using enough academic support from your Pre-course English language provider?"
        name="support_precourse_eng_lang"
      />
      <br />
    </Box>
  );
}

export default StudyHabits;
