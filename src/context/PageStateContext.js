import React, { createContext, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const PageStateContext = createContext();

export const PageStateProvider = ({ children }) => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.up("md"));
  const [pageState, setPageState] = useState("default");
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const data = {
    pageState: pageState,
    setPageState: setPageState,
    mobileView: mobileView,
    isOpen: isOpen,
    toggle: toggle,
  };
  return (
    <PageStateContext.Provider value={data}>
      {children}
    </PageStateContext.Provider>
  );
};
