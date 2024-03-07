import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TimelineIcon from "@mui/icons-material/Timeline";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

export const MainSidebarData = [
  {
    title: "Create Flashcard",
    icon: <CreateIcon />,
    link: "/generate",
  },
  {
    title: "My Flashcard",
    icon: <FormatListBulletedIcon />,
    link: "/mycards",
  },
  {
    title: "My Progress",
    icon: <TimelineIcon />,
    link: "/myprogress",
  },
  {
    title: "Share Cards",
    icon: <Diversity3Icon />,
    link: "/share",
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
    // <SignedIn>
    // <SignOutButton>
    link: "/sign-out",
    // </SignOutButton>
    // </SignedIn>
  },
];
