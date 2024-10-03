import React from "react";

const TaskMaster = () => {
  return (
    <div className="w-full min-h-screen h-screen flex flex-col items-center justify-start bg-default-white">
      <div className="w-full h-full flex flex-col items-center justify-start p-4 max-w-screen-l-l t:p-8 gap-4">
        <div className="w-full flex flex-col items-center justify-start gap-4 t:flex-row">
          <div className="w-full rounded-md p-2 bg-primary-main aspect-square t:max-w-64 l-s:aspect-video"></div>
          <div className="w-full rounded-md p-2 bg-secondary-light aspect-square t:max-w-64 l-s:aspect-video"></div>
        </div>
      </div>
    </div>
  );
};

export default TaskMaster;
