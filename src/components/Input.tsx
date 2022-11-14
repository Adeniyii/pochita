import { ComponentProps } from "react";

interface IProps extends ComponentProps<"input"> {
	label: string;
}

export default function Input({ label, type, name, id, required }: IProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="self-start mb-1 block mr-5 text-sm font-medium text-zinc-100">
        {label}
      </label>
      <div className="">
        <input
          type={type}
          name={name}
          id={id}
					required={required}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm text-zinc-100 font-semibold bg-zinc-800 rounded-md"
          placeholder="chicken n chips"
        />
      </div>
    </div>
  )
}
