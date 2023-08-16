import { produce, setAutoFreeze } from "immer";
import create from "zustand";
import { createTrackedSelector } from "react-tracked";
import Cookies from "js-cookie";
import homeSelected from "../assets/img/sidebar-icon/homeSelected.svg";
import home from "../assets/img/sidebar-icon/home.svg";
import laptop from "../assets/img/laptop-green.svg";
import laptopSelected from "../assets/img/laptop-gray.svg";
import file from "../assets/img/file-green.svg";
import fileSelected from "../assets/img/file-gray.svg";
import user from "../assets/img/user-green.svg";
import userSelected from "../assets/img/user-gray.svg";
import call from "../assets/img/call-green.svg";
import callSelected from "../assets/img/call-gray.svg";
import eventImgSelected from "../assets/img/sidebar-icon/eventImgSelected.svg";
import eventImg from "../assets/img/sidebar-icon/eventImg.svg";
import supporterImgSelected from "../assets/img/sidebar-icon/supporterSelected.svg";
import supporterImg  from "../assets/img/sidebar-icon/supporter.svg";
import programImg from "../assets/img/sidebar-icon/programImg.svg";
import programImgSelected from "../assets/img/sidebar-icon/programImgSelected.svg";
import depthImg from "../assets/img/sidebar-icon/depthImg.svg";
import depthImgSelected from "../assets/img/sidebar-icon/depthImgSelected.svg";
import profileImg from "../assets/img/sidebar-icon/profileImg.svg";
import profileImgSelected from "../assets/img/sidebar-icon/profileImgSelected.svg";
import contactImg from "../assets/img/sidebar-icon/contactImg.svg";
import contactImgSelected from "../assets/img/sidebar-icon/contactImgSelected.svg";
import modulesSelected from "../assets/img/sidebar-icon/moduleSelected.svg";
import modules from "../assets/img/sidebar-icon/module.svg";
import resourcesSelected from "../assets/img/sidebar-icon/resourcesSelected.svg";
import resources from "../assets/img/sidebar-icon/resources.svg";
import studentSelected from "../assets/img/sidebar-icon/studentSelected.svg";
import student from "../assets/img/sidebar-icon/student.svg";
import tasks from "../assets/img/sidebar-icon/tasks.svg";
import tasksSelected from "../assets/img/sidebar-icon/tasksSelected.svg";
import counsellor from "../assets/img/sidebar-icon/counsellor.svg";
import counsellorSelected from "../assets/img/sidebar-icon/counsellorSelected.svg";

setAutoFreeze(false);

export const immer = (config) => (set, get) =>
  config((fn) => set(produce(fn)), get);

const log = (config) => (set, get, api) =>
  config(
    (args) => {
      set(args);
      // console.log("New State ", get());
    },
    get,
    api
  );

const store = (set) => ({
  navLinksMap: {
    students: [
      {
        href: "",
        label: "Events",
        imgSrc: eventImg,
        selectedImgSrc: eventImgSelected,
      },
      {
        href: "/program",
        label: "Your Program",
        imgSrc: programImg,
        selectedImgSrc:programImgSelected ,
      },
      {
        href: "/depth",
        label: "In depth",
        imgSrc: depthImg,
        selectedImgSrc: depthImgSelected ,
      },
      {
        href: "/supporter",
        label: "Your Supporter",
        imgSrc: supporterImg,
        selectedImgSrc: supporterImgSelected,
      },
      {
        href: "/profile",
        label: "Your Profile",
        imgSrc: profileImg,
        selectedImgSrc: profileImgSelected,
      },
      {
        href: "/contact",
        label: "Contacts",
        imgSrc: contactImg,
        selectedImgSrc: contactImgSelected,
      },
    ],
    parents: [
      {
        href: "",
        label: "Home",
        imgSrc: home,
        selectedImgSrc: homeSelected,
      },
      {
        href: "/program-calendar",
        label: "Program & Calendar",
        imgSrc: laptop,
        selectedImgSrc: laptopSelected,
      },
      {
        href: "/hhw-outline",
        label: "HHW Outline",
        imgSrc: file,
        selectedImgSrc: fileSelected,
      },
      {
        href: "/mentor",
        label: "Mentor Profile",
        imgSrc: user,
        selectedImgSrc: userSelected,
      },
      {
        href: "/contact",
        label: "Contact",
        imgSrc: call,
        selectedImgSrc: callSelected,
      },
    ],
    agents: [
      {
        href: "",
        label: "Home",
        imgSrc: home,
        selectedImgSrc:homeSelected,
      },
       {
           href: "/profile",
           label: "Profile",
           imgSrc: profileImg,
           selectedImgSrc: profileImgSelected,
       },
       {
        href: "/counsellor",
        label: "Counsellors",
        imgSrc: counsellor,
        selectedImgSrc: counsellorSelected,
       },
       {
        href: "/outline",
        label: "Modules",
        imgSrc: modules,
        selectedImgSrc: modulesSelected,
    },
      {
        href: "/resources",
        label: "Resources",
        imgSrc: resources,
        selectedImgSrc: resourcesSelected,
      },
      {
        href: "/contact",
        label: "Contact",
        imgSrc: contactImg,
        selectedImgSrc: contactImgSelected,
      },
    ],
    counsellor: [
      {
        href: "",
        label: "Home",
        imgSrc: home,
        selectedImgSrc:homeSelected,
      },
       {
           href: "/profile",
           label: "Profile",
           imgSrc: profileImg,
           selectedImgSrc: profileImgSelected,
       },
       {
        href: "/outline",
        label: "Modules",
        imgSrc: modules,
        selectedImgSrc: modulesSelected,
    },
      {
        href: "/resources",
        label: "Resources",
        imgSrc: resources,
        selectedImgSrc: resourcesSelected,
      },
      {
        href: "/contact",
        label: "Contact",
        imgSrc: contactImg,
        selectedImgSrc: contactImgSelected,
      },
    ],
    mentors: [
      {
        href: "",
        label: "Tasks",
        imgSrc: tasks,
        selectedImgSrc: tasksSelected,
      },
      {
        href: "/students",
        label: "Students",
        imgSrc: student,
        selectedImgSrc: studentSelected,
      },
      {
        href: "/resources",
        label: "Resources",
        imgSrc: resources,
        selectedImgSrc: resourcesSelected,
      },
      {
        href: "/modules",
        label: "Modules",
        imgSrc: modules,
        selectedImgSrc: modulesSelected,
      },
      {
        href: "/profile",
        label: "My Profile",
        imgSrc: profileImg,
        selectedImgSrc: profileImgSelected,
      },
      {
        href: "/contact",
        label: "Contacts",
        imgSrc: contactImg,
        selectedImgSrc: contactImgSelected,
      },
    ],
  },
  parentsResp: [],
  setParentsResp: (parentsResp) =>
    set((state) => {
      state.parentsResp = parentsResp;
    }),
  studentsResp: [],
  setStudentsResp: (studentsResp) =>
    set((state) => {
      state.studentsResp = studentsResp;
    }),
  enrolmentsResp: [],
  setEnrolmentsResp: (enrolmentsResp) =>
    set((state) => {
      state.enrolmentsResp = enrolmentsResp;
    }),
  svTasksResp: [],
  setSvTasksResp: (svTasksResp) =>
    set((state) => {
      state.svTasksResp = svTasksResp;
    }),
  studentSupportersResp: [],
  setStudentSupportersResp: (studentSupportersResp) =>
    set((state) => {
      state.studentSupportersResp = studentSupportersResp;
    }),
  surveysResp: [],
  setSurveysResp: (surveysResp) =>
    set((state) => {
      state.surveysResp = surveysResp;
    }),
  portalUserResp: [],
  setPortalUserResp: (portalUserResp) =>
    set((state) => {
      state.portalUserResp = portalUserResp;
    }),
  agentsResp: [],
  setAgentsResp: (agentsResp) =>
    set((state) => {
      state.agentsResp = agentsResp;
    }),
  portalAssets: [],
  setPortalAssets: (portalAssets) =>
    set((state) => {
      state.portalAssets = portalAssets;
    }),
  parentsMeetingDescriptions: [],
  setParentsMeetingDescriptions: (parentsMeetingDescriptions) =>
    set((state) => {
      state.parentsMeetingDescriptions = parentsMeetingDescriptions;
    }),

  lifecycleDetails: [],
  setLifecycleDetails: (lifecycleDetails) =>
    set((state) => {
      state.lifecycleDetails = lifecycleDetails;
    }),
  allAssets: [],
  setAllAssets: (allAssets) =>
    set((state) => {
      state.allAssets = allAssets;
    }),
});

const useStore = create(log(immer(store)));
const useTrackedStore = createTrackedSelector(useStore);
export default useTrackedStore;
