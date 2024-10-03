import Link from "next/link";
import React from "react";

interface LogoProps {
  link: string;
}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Link
      href={props.link}
      className="font-black  text-4xl drop-shadow-md shadow-none hover:shadow-none"
    >
      tm.
    </Link>
  );
};

export default Logo;
