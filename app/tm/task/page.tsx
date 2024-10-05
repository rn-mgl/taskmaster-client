"use client";

import Create from "@/components/task/Create";
import React from "react";
import { IoAdd } from "react-icons/io5";

const Task = () => {
  const [canCreateTask, setCanCreateTask] = React.useState(false);

  const handleCanCreateTask = () => {
    setCanCreateTask((prev) => !prev);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-start bg-default-white">
      <div className="w-full h-full flex flex-col items-center justify-start p-4 max-w-screen-l-l gap-4">
        {canCreateTask && <Create handleCanCreate={handleCanCreateTask} />}

        <button
          onClick={handleCanCreateTask}
          className="bg-primary-main rounded-md text-default-light font-bold p-2 w-full font-header transition-all hover:shadow-md
                    t:w-fit t:px-4 t:mr-auto flex flex-row items-center justify-center gap-2"
        >
          <IoAdd className="text-lg" /> Create Task
        </button>
      </div>
    </div>
  );
};

export default Task;
