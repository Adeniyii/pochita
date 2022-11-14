/* This example requires Tailwind CSS v2.0+ */
import { ComponentProps, useState } from "react";
import { RadioGroup } from "@headlessui/react";

const categories = [
  {
    id: 1,
    title: "Software",
    description: "Software stuff",
  },
  {
    id: 2,
    title: "Marketing",
    description: "Free enterprise ...",
  },
  {
    id: 3,
    title: "Business",
    description: "Overexposed ...",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}


export default function Radio(props: ComponentProps<"switch">) {
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]
  );

  return (
    <RadioGroup value={selectedCategory} onChange={setSelectedCategory}>
      <RadioGroup.Label className="text-base font-medium text-zinc-100">
        Select a category
      </RadioGroup.Label>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        {categories.map((category) => (
          <RadioGroup.Option
            key={category.id}
            value={category}
            className={({ checked, active }) =>
              classNames(
								"relative flex items-center justify-center cursor-pointer rounded-lg bg-zinc-700 p-4 shadow-sm focus:outline-none",
								checked ? "bg-rose-400" : "bg-zinc-700",
                active ? "ring-2 ring-indigo-500" : ""
              )
            }
          >
            {({ checked, active }) => (
							<div className="flex flex-col">
								<h2
									className="text-sm font-semibold text-zinc-100"
								>
									{category.title}
								</h2>
								<RadioGroup.Description
									className="mt-1 flex items-center text-zinc-300"
								>
									{category.description}
								</RadioGroup.Description>
							</div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
