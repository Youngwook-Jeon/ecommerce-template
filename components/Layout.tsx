"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Layout;
