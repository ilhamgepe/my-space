import { colors } from "@/lib/colors";
import { UserButton as CUserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const UserButton = () => {
  const theme = useTheme();
  return (
    <CUserButton
      appearance={{
        baseTheme: theme.theme == "dark" ? dark : undefined,
        variables: {
          colorPrimary: colors.primary,
        },
      }}
      userProfileProps={{
        appearance: {
          baseTheme: theme.theme == "dark" ? dark : undefined,
          variables: {
            colorPrimary: colors.primary,
          },
        },
      }}
    />
  );
};

export default UserButton;
