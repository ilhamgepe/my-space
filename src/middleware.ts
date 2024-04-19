import { authMiddleware } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/"],
  ignoredRoutes: ["/favicon.ico"],

  afterAuth: (auth, req: NextRequest, evt) => {
    if (auth.sessionId && req.nextUrl.pathname == "/") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    if (!auth.sessionId && req.nextUrl.pathname !== "/") {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
