import { Box } from "@mui/system";
import React from "react";
import CustomSlider from "../Inputs/CustomSlider";

function MentalPhysicalHealth() {
  return (
    <Box sx={{ padding: "30px 0px" }}>
      <b className="heading">Mental and Physical Health</b>
      <br />
      <CustomSlider
        label="Are you confident you are adjusting to the new culture in your host country?"
        name="adjusting_to_new_culture"
      />
      <br />
      <CustomSlider
        label="Are you satisfied your new life does not cause you too much stress and anxiety?"
        name="newlife_does_not_cause_stress_anxiety"
      />
      <br />
      <CustomSlider
        label="Are you satisfied you know about the mental and physical health services available to you as an international student?"
        name="health_services_as_international_student"
      />
      <br />
      <CustomSlider
        label="Are you satisfied that your physical health is as good as the health you enjoyed in your home country?"
        name="physical_health_good_as_home_country"
      />
      <br />
    </Box>
  );
}

export default MentalPhysicalHealth;
