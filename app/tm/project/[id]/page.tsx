"use client";

import { useGlobalContext } from "@/context";
import { ProjectProps } from "@/src/interface/project";
import { STATUS_MAPPING } from "@/src/utils/mapping";
import { getCSRFToken } from "@/src/utils/token";
import axios from "axios";
import { useParams } from "next/navigation";
import React from "react";
import { IoPerson } from "react-icons/io5";
import { SiTask } from "react-icons/si";

const SingleProject = () => {
  const [project, setProject] = React.useState<ProjectProps>({
    banner_image: "",
    code: "",
    deadline: "",
    description: "",
    id: 0,
    status: 0,
    title: "",
    user: { first_name: "", last_name: "" },
  });
  const params = useParams();
  const { url } = useGlobalContext();

  const getProject = React.useCallback(async () => {
    try {
      const token = await getCSRFToken();

      if (token.csrf_token) {
        const { data } = await axios.get(`${url}/project/${params.id}`, {
          withCredentials: true,
        });

        setProject(data.project);
      }
    } catch (error) {
      console.log(error);
    }
  }, [url, params.id]);

  React.useEffect(() => {
    getProject();
  }, [getProject]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start bg-default-white">
      <div className="w-full h-full flex flex-col items-center justify-start p-4 max-w-screen-l-l gap-8 l-s:flex-row">
        <div className="w-full h-full flex flex-col items-center justify-start gap-4">
          <div
            style={{
              backgroundImage: project.banner_image
                ? `url(${project.banner_image})`
                : "",
            }}
            className="w-full bg-center bg-cover rounded-md aspect-video border-2 bg-gradient-to-br from-primary-light via-accent-light to-secondary-light t:max-h-60"
          ></div>

          <div className="w-full flex flex-col items-start justify-center gap-4">
            <div className="w-full flex flex-row items-center justify-between font-header">
              <p className="font-bold text-primary-main capitalize">
                {project.title}
              </p>
              <p>{STATUS_MAPPING[project.status as keyof object]}</p>
            </div>

            <p className="font-body max-h-52 overflow-y-auto">
              {project.description} asd asdasds
            </p>
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-start justify-start gap-8">
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <p className="text-primary-main capitalize font-header flex flex-row items-center justify-center gap-2">
              <SiTask />
              Tasks
            </p>

            <div className="w-full flex flex-col items-center justify-start gap-2 max-h-48 overflow-y-auto t:max-h-60 l-l:max-h-72">
              <div className="w-full p-4 rounded-md bg-default-light">
                <p className="font-bold font-header text-sm">Related Task</p>
              </div>
              <div className="w-full p-4 rounded-md bg-default-light">
                <p className="font-bold font-header text-sm">Related Task</p>
              </div>
              <div className="w-full p-4 rounded-md bg-default-light">
                <p className="font-bold font-header text-sm">Related Task</p>
              </div>
              <div className="w-full p-4 rounded-md bg-default-light">
                <p className="font-bold font-header text-sm">Related Task</p>
              </div>
              <div className="w-full p-4 rounded-md bg-default-light">
                <p className="font-bold font-header text-sm">Related Task</p>
              </div>
              <div className="w-full p-4 rounded-md bg-default-light">
                <p className="font-bold font-header text-sm">Related Task</p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-start justify-start gap-4">
            <p className="text-primary-main capitalize font-header flex flex-row items-center justify-center gap-2">
              <IoPerson />
              Members
            </p>

            <div className="w-full flex flex-col items-center justify-start gap-2 max-h-48 overflow-y-auto t:max-h-60 l-l:max-h-72">
              <div className="w-full p-4 rounded-md bg-default-light">
                <p className="font-bold font-header text-sm">Project Members</p>
              </div>
              <div className="w-full p-4 rounded-md bg-default-light">
                <p className="font-bold font-header text-sm">Project Members</p>
              </div>
              <div className="w-full p-4 rounded-md bg-default-light">
                <p className="font-bold font-header text-sm">Project Members</p>
              </div>
              <div className="w-full p-4 rounded-md bg-default-light">
                <p className="font-bold font-header text-sm">Project Members</p>
              </div>
              <div className="w-full p-4 rounded-md bg-default-light">
                <p className="font-bold font-header text-sm">Project Members</p>
              </div>
              <div className="w-full p-4 rounded-md bg-default-light">
                <p className="font-bold font-header text-sm">Project Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
