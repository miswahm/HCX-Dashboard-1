import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "home-outline",
    link: "/views/dashboard",
    home: true,
  },
  {
    title: "Claims",
    icon: "archive-outline",
    link: "/views/claims",
  },
  {
    title: "Trend Analysis",
    icon: "trending-up-outline",
    link: "/views/trend-analysis",
  },
];
