"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function ButonFacebook() {
  return (
    <>
      <IconButton
        size="lg"
        color="white"
        className={`fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900 shadow-2xl border-x-4 border-y-4  
          ${sidenavColors[sidenavColor]}`}
        ripple={false}
      >
        <Cog6ToothIcon className="h-5 w-5" />
      </IconButton>
    </>
  );
}
