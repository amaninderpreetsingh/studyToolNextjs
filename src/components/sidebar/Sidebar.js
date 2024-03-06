"use client";
import React from "react";
import "@/app/globals.css";
import { MainSidebarData, BottomSidebarData } from "./SidebarData"; // Corrected imports
import { useUser } from "@clerk/nextjs";

function Sidebar() {
  const { user } = useUser();
  const defaultImagePath = "/image/notecardsStack.png";

  return (
    <div className="Sidebar">
      <div className="ProfileHeader">
        <div className="ProfileImage">
          {/* Dynamically load the user's profile picture if available, otherwise load a default image */}
          <img
            src={user?.imageUrl ? user.imageUrl : defaultImagePath}
            alt="Profile"
          />
        </div>
        <div className="ProfileName">
          {/* This will display the user's name fetched from Clerk */}
          <span> Welcome, {user?.firstName || ""}!</span>
        </div>
      </div>
      <ul className="SidebarList">
        {/* This maps over MainSidebarData to render each main sidebar item */}
        {MainSidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
      <div className="SidebarBottom">
        <ul className="SidebarList">
          {/* This maps over BottomSidebarData to render each bottom sidebar item */}
          {BottomSidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
