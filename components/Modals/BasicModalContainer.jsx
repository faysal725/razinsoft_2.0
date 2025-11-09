import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function BasicModalContainer({ isOpen, onClose, children }) {
    return <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
            {/* Background overlay */}
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
            </Transition.Child>

            {/* Modal panel */}
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex h-full sm:h-fit sm:min-h-full items-center justify-center md:p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full h-full sm:max-w-sm sm:p-6 transform overflow-hidden sm:rounded-lg bg-white px-4 pt-5 pb-4 text-left align-middle shadow-xl transition-all">


                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="bg-gray-200 p-0.5 rounded-full absolute cursor-pointer"
                                >
                                    <XMarkIcon className="h-5 w-5 text-gray-500" />
                                </button>
                            </div>

                            <div className="mt-5">{children}</div>

                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>;
}