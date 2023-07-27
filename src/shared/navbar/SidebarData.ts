import {
  DashboardImage,
  HomeImage,
  ProjectsImage,
  RightArrowImage,
  SettingsImage,
  TasksImage,
} from "../../assets";

interface SidebarItems {
  imageSrc: string;
  title: string;
  url: string;
  cName: string;
  tabValue: number;
}

export const sidebarItems: SidebarItems[] = [
  {
    title: "Home Page",
    imageSrc: HomeImage,
    url: "/",
    cName: "pm-navbar__nav-text",
    tabValue: -1,
  },
  {
    title: "Dashboard",
    imageSrc: DashboardImage,
    url: "/dashboard",
    cName: "pm-navbar__nav-text",
    tabValue: 0,
  },
  {
    title: "Projects",
    imageSrc: ProjectsImage,
    url: "/dashboard",
    cName: "pm-navbar__nav-text",
    tabValue: 1,
  },
  {
    title: "Tasks",
    imageSrc: TasksImage,
    url: "/dashboard",
    cName: "pm-navbar__nav-text",
    tabValue: 2,
  },
  // {
  //   title: "Settings",
  //   imageSrc: RightArrowImage,
  //   url: "/",
  //   cName: "pm-navbar__nav-text",
  //   tabValue: 3,
  // },
];
