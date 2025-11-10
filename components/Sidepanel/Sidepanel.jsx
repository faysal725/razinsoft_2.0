'use client'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import clsx from 'clsx'

export default function Sidepanel() {

    const [showMenuBar, setShowMenuBar] = useState(false);

    return (
        <>
            <button onClick={() => setShowMenuBar(!showMenuBar)} className="w-8 h-8 flex justify-center items-center rounded-full cursor-pointer bg-nGray-50">

                <Bars3Icon className="h-6 w-6 text-nGray-500" />
            </button>


            {/* sidepanel  */}
            <div
                className={clsx("fixed h-full w-full md:w-[50%] bg-white z-30 transition-all duration-300 ease-in-out top-0 left-0 shadow-2xl lg:hidden", showMenuBar ? 'translate-x-0 md:translate-x-[100%]' : 'translate-x-[100%] md:translate-x-[200%]')}

            >
                <ul className="flex flex-col gap-2 mt-28 px-4">asdfsdfs</ul>
            </div>
        </>
    )
}