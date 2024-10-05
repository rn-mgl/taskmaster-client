import React from "react";
import { IoChevronDown } from "react-icons/io5";

interface SelectProps {
  placeholder: string;
  name: string;
  id: string;
  required: boolean;
  value: string;
  options: Array<string>;
  onChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Select: React.FC<SelectProps> = (props) => {
  const [canViewOptions, setCanViewOptions] = React.useState(false);

  const handleCanViewOptions = () => {
    setCanViewOptions((prev) => !prev);
  };

  const mappedOptions = props.options.map((option) => {
    return (
      <button
        key={option}
        value={option}
        onClick={(e) => {
          props.onChange(e);
          handleCanViewOptions();
        }}
        name={props.name}
        type="button"
        className="p-2 rounded-md w-full bg-secondary-light font-bold font-header 
                text-primary-dark hover:shadow-md transition-all"
      >
        {option}
      </button>
    );
  });

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <div className="flex flex-col w-full items-start justify-center relative border-inherit text-inherit">
        <p className="text-xs font-bold text-default-black font-header">
          {props.placeholder}
        </p>

        <button
          type="button"
          onClick={handleCanViewOptions}
          className="w-full p-2 rounded-md border-default-black/20 border-[1px] outline-none transition-all 
          duration-100 font-body focus:border-inherit focus:border-2 flex flex-row items-center justify-between"
        >
          {props.value ?? props.placeholder}
          <IoChevronDown />
        </button>
      </div>

      {canViewOptions ? (
        <div
          className="absolute w-full top-0 p-2 translate-y-20 gap-2 flex flex-col items-center 
                  justify-start border-[1px] rounded-md shadow-md bg-default-white overflow-y-auto max-h-36 z-20"
        >
          <div className="w-full top-0 gap-2 flex flex-col items-center animate-fade">
            {mappedOptions}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Select;
