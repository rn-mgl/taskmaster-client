"use client";

import Select from "@/components/form/Select";
import Input from "@/components/form/Input";
import TextArea from "@/components/form/TextArea";
import { useGlobalContext } from "@/context";
import { getCSRFToken } from "@/src/utils/token";
import axios from "axios";
import { getCookie } from "cookies-next";
import React from "react";
import { IoClose } from "react-icons/io5";
import { SiTask } from "react-icons/si";

interface CreateProps {
  handleCanCreate: () => void;
}

interface TaskDataProps {
  title: string;
  description: string;
  deadline: Date;
  status: string;
  priority: string;
}

const Create: React.FC<CreateProps> = (props) => {
  const [taskData, setTaskData] = React.useState<TaskDataProps>({
    title: "",
    description: "",
    deadline: new Date(),
    status: "Hold",
    priority: "Low",
  });

  const { url } = useGlobalContext();

  const handleTaskData = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    const { name, value } = e.currentTarget;

    console.log(name, value);

    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const token = await getCSRFToken();

      if (token.csrf_token) {
        const { data: create } = await axios.post(
          `${url}/create_task`,
          { ...taskData },
          {
            headers: { "X-XSRF-TOKEN": getCookie("XSRF-TOKEN") },
            withCredentials: true,
          }
        );

        console.log(create);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="top-0 left-0 w-full h-full fixed flex flex-col items-center justify-center
             bg-default-black/20 z-50 p-4 t:p-8 animate-fade"
    >
      <div className="max-w-screen-t rounded-lg bg-default-white w-full h-full shadow-md flex flex-col items-center justify-center">
        <div className="w-full p-4 border-b-[1px] font-header font-bold text-primary-main flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-2">
            <SiTask className="text-accent-main" />
            Create Task
          </div>

          <button
            onClick={props.handleCanCreate}
            className="p-2 rounded-full transition-all hover:bg-default-black/10"
          >
            <IoClose className="text-lg" />
          </button>
        </div>

        <form
          onSubmit={(e) => submitCreate(e)}
          className="flex flex-col w-full items-center justify-center gap-4 p-4 border-primary-main h-full "
        >
          <Input
            id="title"
            name="title"
            placeholder="Title"
            type="text"
            required={true}
            value={taskData.title}
            onChange={handleTaskData}
          />
          <TextArea
            id="description"
            name="description"
            placeholder="Description"
            required={true}
            value={taskData.description}
            onChange={handleTaskData}
          />
          <Select
            id="priority"
            name="priority"
            placeholder="Priority"
            required={true}
            value={taskData.priority}
            options={["None", "Low", "Medium", "High"]}
            onChange={handleTaskData}
          />
          <Select
            id="status"
            name="status"
            placeholder="Status"
            required={true}
            value={taskData.status}
            options={["None", "Hold", "On Going", "Done"]}
            onChange={handleTaskData}
          />
          <button className="mt-auto p-2 rounded-md bg-primary-main text-default-light w-full font-bold font-header">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
