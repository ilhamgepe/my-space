import { ClerkProvider } from "@clerk/nextjs";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "./ThemeProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default Providers;
