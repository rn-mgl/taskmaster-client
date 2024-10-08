import React from "react";
import { FaImage, FaLightbulb } from "react-icons/fa6";

import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import TextArea from "@/components/form/TextArea";
import { IoClose, IoTrash } from "react-icons/io5";
import DatePicker from "@/components/form/DatePicker";
import { getCSRFToken } from "@/src/utils/token";
import axios from "axios";
import { useGlobalContext } from "@/context";
import { getCookie } from "cookies-next";
import useFile from "@/src/hooks/useFile";

interface CreateProps {
  handleCanCreate: () => void;
  getAllCreated: () => Promise<void>;
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
  const {
    selectedFile,
    fileRef,
    handleSelectedFile,
    handleRemoveSelectedFile,
  } = useFile();

  const { url } = useGlobalContext();

  const handleProjectData = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    const { name, value } = e.currentTarget;

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
      const token = await getCSRFToken();

      if (token.csrf_token) {
        let banner_image = null;
        if (selectedFile.raw) {
          const formData = new FormData();

          formData.append("file", selectedFile.raw);

          const { data: file } = await axios.post(
            `${url}/upload_file`,
            formData,
            {
              headers: {
                "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
                "Content-Type": "multipart/form-data",
              },
              withCredentials: true,
            }
          );

          banner_image = file.url ?? null;
        }

        const { data: project } = await axios.post(
          `${url}/create_project`,
          {
            title: projectData.title,
            description: projectData.description,
            deadline: projectData.deadline,
            banner_image: banner_image,
            status: projectData.status,
          },
          {
            headers: { "X-XSRF-TOKEN": getCookie("XSRF-TOKEN") },
            withCredentials: true,
          }
        );

        if (project.success) {
          props.getAllCreated();
          props.handleCanCreate();
        }
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
      <div className="max-w-screen-t rounded-lg bg-default-white w-full h-fit shadow-md flex flex-col items-center justify-start">
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
            <div
              style={{
                backgroundImage: selectedFile.url && `url(${selectedFile.url})`,
              }}
              className="w-full rounded-md border-[1px] p-2 max-h-44 t:h-44 aspect-video flex flex-col 
                      items-center justify-center text-primary-light bg-center bg-cover bg-no-repeat"
            >
              {selectedFile.raw ? null : <FaImage className="text-4xl" />}
            </div>
            <div className="flex flex-row w-full gap-2 items-center justify-between ml-auto pt-2">
              <label
                htmlFor="banner_image"
                className="text-primary-main cursor-pointer"
              >
                <input
                  id="banner_image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileRef}
                  onChange={(e) => handleSelectedFile(e)}
                ></input>
                <FaImage />
              </label>
              {selectedFile.raw ? (
                <button
                  type="button"
                  onClick={handleRemoveSelectedFile}
                  className="text-primary-main cursor-pointer"
                >
                  <IoTrash />
                </button>
              ) : null}
            </div>
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
