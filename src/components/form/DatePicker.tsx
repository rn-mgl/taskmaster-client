import React from "react";

interface DatePickerProps {
  name: string;
  id: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon?: React.ReactNode;
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
  return (
    <div className="flex flex-col w-full items-start justify-center relative border-inherit text-inherit">
      <p className="text-xs font-bold text-default-black font-header">
        {props.placeholder}
      </p>

      <input
        type="datetime-local"
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        required={props.required}
        title={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e)}
        className="w-full p-2 focus:pl-4 rounded-md border-default-black/20 border-[1px] outline-none transition-all 
          duration-100 font-body focus:border-inherit focus:border-2"
      />

      {props.Icon ? (
        <div className="absolute p-2 right-1 bottom-0 -translate-y-1 bg-default-white">
          {props.Icon}
        </div>
      ) : null}
    </div>
  );
};

export default DatePicker;
