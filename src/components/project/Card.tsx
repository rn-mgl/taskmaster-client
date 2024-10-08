import { STATUS_MAPPING } from "@/src/utils/mapping";
import Link from "next/link";
import React from "react";

interface CardProps {
  id: number;
  banner_image: string;
  title: string;
  description: string;
  status: number;
  user: UserProps;
}

interface UserProps {
  first_name: string;
  last_name: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Link
      href={`/tm/project/${props.id}`}
      className="w-full flex flex-col items-start justify-start rounded-lg hover:shadow-md h-fit
                    transition-all gap-2 bg-default-light animate-fade border-[1px] group overflow-hidden"
    >
      <div
        style={{
          backgroundImage: props.banner_image
            ? `url(${props.banner_image})`
            : "",
        }}
        className="w-full aspect-video max-h-40 bg-center bg-cover bg-gradient-to-br from-primary-light via-accent-light
                 to-secondary-light rounded-t-md group-hover:scale-110 transition-all"
      ></div>

      <div className="flex flex-col items-start justify-center w-full gap-4 p-4">
        <div className="w-full flex flex-col gap-2">
          <p className="font-header font-bold capitalize text-primary-main">
            {props.title}
          </p>

          <p className="font-header capitalize text-sm">
            {STATUS_MAPPING[props.status as keyof object]}
          </p>
        </div>

        <p className="font-body text-sm capitalize max-h-20 h-20 overflow-y-auto w-full">
          {props.description}
        </p>

        <div className="w-full border-[1px] h-[0.2px]"></div>

        <div className="w-full flex flex-row items-center justify-start gap-2">
          <div
            className="w-8 h-8 min-w-8 min-h-8 rounded-full bg-secondary-light"
            title={`${props.user.first_name} ${props.user.last_name}`}
          ></div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
