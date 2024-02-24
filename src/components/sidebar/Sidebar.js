"use client";
import React from "react";
import "@/app/globals.css"; // Ensure this path is correct based on your project structure
import { SidebarData } from "./SidebarData"; // Ensure this import is correct
import { useUser } from "@clerk/nextjs";

function Sidebar() {
  const { user } = useUser();
  console.log(user && user.firstName ? user.firstName : "");
  return (
    <div className="Sidebar">
      <div className="ProfileHeader">
        <div className="ProfileImage">
          {/* Update the src attribute as needed or dynamically load the user's profile picture if available */}
          <img src="path_to_profile_picture.jpg" alt="Profile" />
        </div>
        <div className="ProfileName">
          {/* This will display the user's name fetched from Clerk */}
          <span>{user ? user.firstName : ""}</span>
        </div>
      </div>

      <ul className="SidebarList">
        {/* This maps over your SidebarData to render each sidebar item */}
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key} // Using the index as a key is generally okay for static lists
              className="row"
              onClick={() => {
                window.location.pathname = val.link; // Changes the current page to the clicked sidebar item's link
              }}
            >
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
