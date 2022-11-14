import { ComponentProps } from "react";

interface IProps extends ComponentProps<"textarea"> {
  label: string;
}

export default function TextArea({ label, ...props }: IProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={props.id}
        className="mb-1 mr-5 block self-start text-sm font-medium text-zinc-100"
      >
        {label}
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          className="block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-zinc-100 font-semibold bg-zinc-800"
          defaultValue={""}
					{...props}
        />
      </div>
    </div>
  );
}
