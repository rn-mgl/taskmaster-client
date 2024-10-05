import React from "react";
import { FaImage, FaLightbulb } from "react-icons/fa6";

import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import TextArea from "@/components/form/TextArea";
import { IoClose } from "react-icons/io5";
import DatePicker from "@/components/form/DatePicker";

interface CreateProps {
  handleCanCreate: () => void;
}

interface ProjectDataProps {
  title: string;
  description: string;
  deadline: string;
  banner_image: string;
  status: string;
}

const Create: React.FC<CreateProps> = (props) => {
  const [projectData, setProjectData] = React.useState<ProjectDataProps>({
    title: "",
    description: "",
    deadline: new Date().toISOString().slice(0, 16),
    banner_image: "",
    status: "On Going",
  });

  const handleProjectData = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    const { name, value } = e.currentTarget;

    console.log(value);

    setProjectData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="top-0 left-0 w-full h-full fixed flex flex-col items-center justify-center
         bg-default-black/20 z-50 p-4 t:p-8 animate-fade"
    >
      <div className="max-w-screen-t rounded-lg bg-default-white w-full h-full shadow-md flex flex-col items-center justify-start">
        <div className="w-full p-2 border-b-[1px] font-header font-bold text-primary-main flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-2">
            <FaLightbulb className="text-accent-main" />
            Create Project
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
          className="flex flex-col w-full items-center justify-start gap-4 p-4 border-primary-main h-full overflow-y-auto"
        >
          <Input
            id="title"
            name="title"
            placeholder="Title"
            type="text"
            required={true}
            value={projectData.title}
            onChange={handleProjectData}
          />
          <TextArea
            id="description"
            name="description"
            placeholder="Description"
            required={true}
            value={projectData.description}
            onChange={handleProjectData}
          />
          <DatePicker
            id="deadline"
            name="deadline"
            placeholder="Deadline"
            required={true}
            value={projectData.deadline}
            onChange={handleProjectData}
          />
          <Select
            id="status"
            name="status"
            placeholder="Status"
            required={true}
            value={projectData.status}
            options={["None", "Hold", "On Going", "Done"]}
            onChange={handleProjectData}
          />
          <div className="w-full flex flex-col items-start justify-center">
            <p className="text-xs font-bold text-default-black font-header">
              Banner Image
            </p>
            <div className="w-full rounded-md border-[1px] p-2 max-h-44 t:h-44 aspect-video flex flex-col items-center justify-center text-primary-light">
              <FaImage className="text-4xl" />
            </div>
            <label
              htmlFor="banner_image"
              className="ml-auto mt-2 text-primary-main cursor-pointer"
            >
              <input
                id="banner_image"
                type="file"
                accept="image/*"
                className="hidden "
              ></input>
              <FaImage />
            </label>
          </div>

          <button className="mt-auto p-2 rounded-md bg-primary-main text-default-light w-full font-bold font-header">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
