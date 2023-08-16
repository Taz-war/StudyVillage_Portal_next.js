import { Box } from "@mui/system";
import React from "react";
import CustomSlider from "../Inputs/CustomSlider";

function PeopleAndFriendships() {
  return (
    <Box sx={{ padding: "30px 0px" }}>
      <b className="heading">People and Friendships</b>
      <br />
      <CustomSlider
        label="Are you satisfied you have people around to provide an enjoyable social life?"
        name="enjoyable_social_life"
      />
      <br />
      <CustomSlider
        label="Are you satisfied you are joining in enough organised social activities at university?"
        name="social_activities_at_university"
      />
      <br />
      <CustomSlider
        label="Are you satisfied that you are not lonely?"
        name="satisfied_at_not_being_lonely"
      />
      <br />
    </Box>
  );
}

export default PeopleAndFriendships;
