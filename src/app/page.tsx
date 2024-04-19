"use client";
import { colors } from "@/lib/colors";
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function Home() {
  const theme = useTheme();
  return (
    <main className="flex items-center justify-center h-screen w-screen">
      <SignIn
        appearance={{
          baseTheme: theme.theme == "dark" ? dark : undefined,
          variables: {
            colorPrimary: colors.primary,
          },
        }}
      />
    </main>
  );
}
