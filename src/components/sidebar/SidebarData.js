import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TimelineIcon from "@mui/icons-material/Timeline";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export const MainSidebarData = [
  {
    title: "Create Flashcard",
    icon: <CreateIcon />,
    link: "/generate",
  },
  {
    title: "My Flashcard",
    icon: <FormatListBulletedIcon />,
    link: "/url holder text",
  },
  {
    title: "My Progress",
    icon: <TimelineIcon />,
    link: "/url holder text",
  },
  {
    title: "Share Cards",
    icon: <Diversity3Icon />,
    link: "/url holder text",
  },
];

export const BottomSidebarData = [
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
  },
  {
    title: "Sign Out",
    icon: <ExitToAppIcon />,
    link: "/sign-out",
  },
];
