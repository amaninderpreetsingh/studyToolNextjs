"use client";

import React from "react";
import "../../src/app/generate/App.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div class="ProfileHeader">
        <div class="ProfileImage">
          <img src="path_to_profile_picture.jpg" alt="Profile" />
        </div>
        <div class="ProfileName">
          <span>Dilraj Sandhu</span>
        </div>
      </div>

      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
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
