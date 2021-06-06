import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
  initialTheme: ThemesType;
}

export type ThemesType = "morning" | "noon" | "afternoon" | "night";
