import React from "react";

interface InputProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon: React.ReactNode;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col w-full items-start justify-center relative border-inherit text-inherit">
      <p className="text-xs font-bold text-default-black">
        {props.placeholder}
      </p>

      <input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        required={props.required}
        title={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e)}
        className="w-full p-2 pl-4 rounded-md border-default-black border-[1px] outline-none transition-all 
              duration-100 font-body focus:border-inherit focus:border-2"
      />

      <div className="absolute p-2 right-1 bottom-0 -translate-y-1 bg-default-white">
        {props.Icon}
      </div>
    </div>
  );
};

export default Input;
