import React from "react";
import { Sidebar } from "./sidebar";
import { Mainbar } from "./mainbar";
import { Cornerbar } from "./cornerbar";
import "./styles/sidebar.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Mainbar />
      <Cornerbar />
    </div>
  );
};
