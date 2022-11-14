import { ComponentProps, Dispatch, Fragment, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FolderIcon } from "@heroicons/react/24/outline";
import Input from "./Input";
import Radio from "./Radio";
import ComboBox from "./ComboBox";
import TextArea from "./TextArea";

interface IProps extends ComponentProps<"div"> {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CreateProjectModal({ open, setOpen }: IProps) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-zinc-900 bg-opacity-75 backdrop-blur transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block transform overflow-hidden rounded-lg bg-zinc-800 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6 sm:align-middle">
              <div className="min-h-[75vh] max-h-[75vh] overflow-y-auto px-4">
                <div className="text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg flex items-center justify-center font-semibold leading-6 text-zinc-100"
                  >
                    <FolderIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                    Create a project
                  </Dialog.Title>
                  <div className="mt-10">
                    <form className="flex flex-col gap-5">
                      <Input label="name" id="name" name="name" type="text" required />
                      <TextArea label="description" id="description" name="description" required />
                      <div className="pt-5" />
                      <Radio />
                      <ComboBox />
                    </form>
                  </div>
                </div>
              </div>
							<div className="mt-5 sm:mt-6 flex items-center justify-between">
								<button
									type="button"
									className="inline-flex justify-center rounded-md border border-transparent bg-transparent px-3 py-1 text-base font-medium text-white hover:bg-zinc-700 focus:outline-none sm:text-sm"
									// onClick={() => setOpen(false)}
								>
									back
								</button>
								<button
									type="button"
									className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 px-3 py-1 text-base font-semibold text-white hover:bg-rose-700 focus:outline-none sm:text-sm"
									onClick={() => setOpen(false)}
								>
									Create
								</button>
							</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
