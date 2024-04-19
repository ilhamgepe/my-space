"use client";
import React from "react";
import { Button } from "./ui/button";
import { useAuth } from "@clerk/nextjs";

const GetMe = () => {
  const auth = useAuth();
  const handleCLick = async () => {
    console.log("running handle click");
    const token = await auth.getToken();
    console.log(token);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

    console.log(res);
  };
  return (
    <div>
      <p>GET ME</p>
      <Button variant={"default"} onClick={handleCLick}>
        GET
      </Button>
    </div>
  );
};

export default GetMe;
