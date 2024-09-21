import React from "react";
import ideation from "@/images/Ideation.svg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-primary-main to-primary-dark">
      <div className="w-full h-full flex flex-col items-center justify-start my-auto max-w-screen-l-l p-4 gap-4 t:p-8 t:gap-8">
        <div className="w-full flex flex-col items-start justify-center text-default-light gap-2 t:items-center l-s:gap-4">
          <p
            className="font-black font-header text-4xl l-s:text-6xl bg-gradient-to-br from-secondary-light to-accent-light p-3
                      bg-clip-text text-transparent t:bg-gradient-to-r drop-shadow-md"
          >
            Organize. <br className="t:hidden" /> Track.{" "}
            <br className="t:hidden" /> Accomplish.
          </p>

          <p className="text-sm font-body w-full t:text-base t:text-center max-w-screen-t l-s:text-lg">
            The ultimate project management tool to boost your productivity and
            streamline your workflow. Keep your team on track and your projects
            running smoothly.
          </p>
        </div>

        <div
          className="w-full flex flex-col items-center justify-center gap-2 font-header text-primary-dark
                    t:flex-row t:max-w-80 l-s:gap-4"
        >
          <Link
            href="/register"
            className="w-full font-extrabold bg-secondary-main p-2 rounded-sm text-center"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="w-full font-extrabold p-2 rounded-sm bg-default-light text-center"
          >
            Log In
          </Link>
        </div>

        <div className="w-full flex flex-col items-center justify-center aspect-square t:max-w-80">
          <Image
            src={ideation}
            alt="idea"
            className="drop-shadow-md animate-float w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
