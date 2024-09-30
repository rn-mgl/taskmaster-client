"use client";

import sending from "@/images/Sending.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Message = () => {
  const params = useSearchParams();
  const type = params.get("type");
  const router = useRouter();

  const message = {
    verification: (
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="font-header font-bold text-2xl text-primary-main">
          Welcome!
        </p>
        <p>We are currently sending your email verification link.</p>

        <button
          onClick={() => router.back()}
          className="w-full p-2 rounded-md bg-primary-main text-default-white font-bold font-header mt-4"
        >
          Go Back
        </button>
      </div>
    ),
  };

  return (
    <div className="animate-fade w-full flex flex-col items-center justify-center max-w-screen-t text-center font-body">
      {message[type as keyof object] ?? "We are sending you email."}
    </div>
  );
};

const Verify = () => {
  return (
    <div className="w-full min-h-screen h-screen flex flex-col items-center justify-start bg-gradient-to-b from-accent-light/30 to-secondary-light/30 relative">
      <div className="w-full h-full flex flex-col items-center justify-center p-4 max-w-screen-l-l t:p-8">
        <div className="w-full h-full flex flex-col items-center justify-center my-auto">
          <Image
            src={sending}
            alt="sending"
            className="w-full t:max-w-96 drop-shadow-md animate-float"
          />

          <React.Suspense>
            <Message />
          </React.Suspense>
        </div>
      </div>
    </div>
  );
};

export default Verify;
