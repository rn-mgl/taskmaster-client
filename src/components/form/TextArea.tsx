import React from "react";

interface TextAreaProps {
  name: string;
  id: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <div className="flex flex-col w-full items-start justify-center relative border-inherit text-inherit">
      <p className="text-xs font-bold text-default-black font-header">
        {props.placeholder}
      </p>

      <textarea
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        required={props.required}
        title={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e)}
        rows={4}
        className="w-full p-2 focus:pl-4 rounded-md border-default-black/20 border-[1px] outline-none transition-all 
          duration-100 font-body focus:border-inherit focus:border-2 resize-none"
      />
    </div>
  );
};

export default TextArea;
