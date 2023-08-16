import {
  Box,
} from "@mui/material";
import { useContext } from "react";
import { Controller } from "react-hook-form";
import { FormContext } from "../../../pages/multistepform";
// import { FormContext } from "../App";
import CustomSlider from "../Inputs/CustomSlider";
// import CustomTextArea from "../components/Inputs/CustomTextArea";
// import CustomTextField from "../components/Inputs/CustomTextField";
// import PersonConsulted from "../components/PersonConsulted/PersonConsulted";
// import swss_pic from "../swss_pic.png";
// import './style.css'
const Home = () => {
  const [control] = useContext(FormContext);
  return (
    <Box sx={{ padding: "20px 0px 40px 0px" }}>
      <div style={{ marginBottom: "30px" }}>
        <br />
        <b className="heading">Welcome to your ELICOS A survey.</b>
        <br /><br />
        <i>
          ELICOS A is the first StudyVillage module for English language
          students. You should now should feel confident you have a
          well-resourced friend in your corner, available for advice and someone
          to talk to. The first survey section contains questions on the topics
          ‘Safety’, ‘Study Habits’, ‘Home Life’, ‘People and friendships’, and
          ‘Mental and physical health’. You’re asked to give yourself a score
          between 1 and 10 - indicating how you feel about each question within
          each of these sections. This first survey also asks you to set some
          goals around English language studies.
        </i>
      </div>
      <b><i>Please indicate how you feel about each of the questions below with a score between 1 and 10.</i></b>
      <br /><br /><br />
      <b>Safety</b>
      <br /><br />
     <CustomSlider label="How do you feel about your personal safety overall?" name="personal_safety" />
     <br />
     <CustomSlider label="How do feel about your safety on campus?" name="safety_on_campus" />
     <br />
     <CustomSlider label="Do you feel safe at your home?" name="safe_at_home" />
    </Box>
  );
};

export default Home;
