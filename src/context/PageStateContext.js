import React, { createContext, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const PageStateContext = createContext();

export const PageStateProvider = ({ children }) => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.up("md"));
  const [pageState, setPageState] = useState("default");

  const data = {
    pageState: pageState,
    setPageState: setPageState,
    mobileView: mobileView,
  };
  return (
    <PageStateContext.Provider value={data}>
      {children}
    </PageStateContext.Provider>
  );
};
