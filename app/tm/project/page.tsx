"use client";

import Card from "@/components/project/Card";
import Create from "@/components/project/Create";
import { useGlobalContext } from "@/context";
import { getCSRFToken } from "@/src/utils/token";
import axios from "axios";
import React from "react";
import { IoAdd } from "react-icons/io5";

interface ProjectProps {
  id: number;
  banner_image: string;
  description: string;
  title: string;
  status: number;
  user: UserProps;
}

interface UserProps {
  first_name: string;
  last_name: string;
}

const Project = () => {
  const [canCreateProject, setCanCreateProject] = React.useState(false);
  const [projects, setProjects] = React.useState<Array<ProjectProps>>([]);

  const { url } = useGlobalContext();

  const handleCanCreateProject = () => {
    setCanCreateProject((prev) => !prev);
  };

  const getProjects = React.useCallback(async () => {
    try {
      const token = await getCSRFToken();

      if (token.csrf_token) {
        const { data } = await axios.get(`${url}/project`, {
          withCredentials: true,
        });

        setProjects(data.projects);
      }
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  const mappedProjects = projects.map((project, index) => {
    return <Card key={index} {...project} />;
  });

  React.useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start bg-default-white">
      <div className="w-full h-full flex flex-col items-center justify-start p-4 max-w-screen-l-l gap-4">
        {canCreateProject && (
          <Create
            handleCanCreate={handleCanCreateProject}
            getAllCreated={getProjects}
          />
        )}

        <button
          onClick={handleCanCreateProject}
          className="bg-primary-main rounded-md text-default-light font-bold p-2 w-full font-header transition-all hover:shadow-md
                    t:w-fit t:px-4 t:mr-auto flex flex-row items-center justify-center gap-2"
        >
          <IoAdd className="text-lg" /> Create Project
        </button>

        <div className="w-full grid grid-cols-1 items-center justify-center gap-4 t:grid-cols-2 l-s:grid-cols-3">
          {mappedProjects}
        </div>
      </div>
    </div>
  );
};

export default Project;
