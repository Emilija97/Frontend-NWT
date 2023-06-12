import { DashboardImage } from "../../assets";

interface SidebarItems {
  imageSrc: string;
  title: string;
  url: string;
  cName: string;
}

export const sidebarItems: SidebarItems[] = [
  {
    title: "Manage food",
    imageSrc: DashboardImage,
    url: "/",
    cName: "nav-text",
  },
  {
    title: "List of orders",
    imageSrc: DashboardImage,
    url: "/",
    cName: "nav-text",
  },
  {
    title: "Make an order",
    imageSrc: DashboardImage,
    url: "/",
    cName: "nav-text",
  },
];
