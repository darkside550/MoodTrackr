import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";
import React from "react";

export const metadata = {
  title: "MoodTrackr · Dashboard",
};

const DashboardPage = () => {
  return (
    <Main>
      <Dashboard />
    </Main>
  );
};

export default DashboardPage;
