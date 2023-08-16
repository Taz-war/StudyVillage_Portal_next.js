import { FormGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomCheckbox from "../Inputs/CustomCheckbox";

function EnglishLangGoals() {
  return (
    <Box sx={{ padding: "30px 0px" }}>
      <b>Mental and Physical Health</b>
      <br /><br />
      <Typography>
        StudyVillage would like you to choose three specific goals for your
        English language studies that you are happy to share with your student
        supporter, so you can track progress.
      </Typography>
      <br />
      <Typography>
        You might like our suggestions below or write some of your own goals.
        You can choose a combination of suggested goals below plus your own goal
        ideas. Don’t forget your own goals must be both achievable and able to
        be tracked. (And make sure its easily understood and written with 80
        characters (letters) or less).
      </Typography>
      <br />
      <Typography>
        In later modules you'll have the opportunity to assess your progress
        against your goals using these following measures: • No progress • Some
        progress • Good progress • Goal complete.
      </Typography>
      <Typography>
        Remember, there's an extended discussion about Goals in the StudyVillage
        Guide if you need further inspiration!
      </Typography>
      <br />
      <Typography>
        Choose three goals from the list below 1-5, or chose option 6 and write
        up to two goals of your own.
      </Typography>
      <br />
      <b>Pre-set English Language Goals</b>
      <FormGroup>
        <CustomCheckbox
          label="1. Talk with a native English speaker - at least 30 mins per week"
          name="talk_with_native_speaker"
        />
        <CustomCheckbox
          label="2. Communicate with a friend in English - at least 30 mins per week"
          name="communicate_with_friend_in_english"
        />
        <CustomCheckbox
          label="3. Watch on-line (Youtube) channels about topics I'm interested in - at least 30 mins per week"
          name="watch_youtube_channels"
        />
        <CustomCheckbox
          label="4. Read in English for pleasure or interest - at least 30 mins per week"
          name="read_in_english"
        />
        <CustomCheckbox
          label="5. Ask for critical feedback from people you know about your use of language"
          name="crictical_feedback"
        />
        <CustomCheckbox
          label="6. Your own English Language Goal - 1 (choose your own goal expressed in 80 characters or less)"
          name="your_english_goal_1"
        />
        <CustomCheckbox
          label="7. Your own English Language Goal - 2 (choose your own goal expressed in 80 characters or less)"
          name="your_english_goal_2"
        />
      </FormGroup>
    </Box>
  );
}

export default EnglishLangGoals;
