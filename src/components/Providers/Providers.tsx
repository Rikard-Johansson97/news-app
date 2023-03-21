"use client";

import { ThemeProvider } from "next-themes";
import React, { FC } from "react";

interface ProvidersProps {}

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
