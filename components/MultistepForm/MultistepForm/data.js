import EnglishLangGoals from "../pages/EnglishLangGoals";
import Home from "../pages/Home";
import HomeLife from "../pages/HomeLife";
import MentalPhysicalHealth from "../pages/MentalPhysicalHealth";
import PeopleAndFriendships from "../pages/PeopleAndFriendships";

import StudyHabits from "../pages/StudyHabits";

export const steps = [
  {
    title: "home",
    input: <Home />,
  },
  {
    title: "Study Habit",
    input: <StudyHabits />,
  },
  {
    title: "Home Life",
    input: <HomeLife />,
  },
  {
    title: "People And Friendships",
    input: <PeopleAndFriendships />,
  },
  {
    title: "Mental and Physical Health",
    input: <MentalPhysicalHealth />,
  },
  {
    title: "English Language Goals",
    input: <EnglishLangGoals />,
  },
];
