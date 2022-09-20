import React, { createContext, useState } from "react";

export const PageStateContext = createContext();

export const PageStateProvider = ({ children }) => {
  const [pageState, setPageState] = useState("main-page");

  const data = {
    pageState: pageState,
    setPageState: setPageState,
  };
  return (
    <PageStateContext.Provider value={data}>
      {children}
    </PageStateContext.Provider>
  );
};
