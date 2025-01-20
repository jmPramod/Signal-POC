import React from "react";
import { Toaster } from "@/components/ui/toaster";

const RootLayout = ({ children }) => {
  return (
    <div>
      <header>
        {/* Add a global header if needed */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Add a global footer if needed */}
      </footer>
      <Toaster /> {/* Global toast notifications */}
    </div>
  );
};

export default RootLayout;
