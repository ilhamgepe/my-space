import { PropsWithChildren } from "react";
import Resizeable from "./Resizeable";
const AuthenticatedLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Resizeable>{children}</Resizeable>
    </div>
  );
};

export default AuthenticatedLayout;
