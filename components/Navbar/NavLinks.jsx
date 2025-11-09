'use client'

import Link from "next/link";
import styles from "./Navbar.module.css"
import { usePathname } from 'next/navigation'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


export default function NavLinks() {

    // hooks
    const currentPath = usePathname();

    function isCurrentPath(pathName) {
        return currentPath === pathName ? styles.select_underline : '';
    }
    return (
        <>
            <div className="h-6 inline-flex flex-col justify-start items-center">
                <div className="px-2 inline-flex justify-center items-center gap-1">
                    <Link
                        href="/"
                        className={"text-center justify-start text-zinc-800 text-base font-medium hover_underline leading-normal " + styles.hover_underline + ' ' + isCurrentPath('/')}
                    >
                        Home
                    </Link>
                </div>
            </div>


            {/* products */}
            <div className="h-6 px-2 inline-flex justify-center items-center gap-1">
                <Link
                    href="/products"
                    className={"text-center justify-start text-black text-base font-medium hover_underline leading-normal " + styles.hover_underline + ' ' + isCurrentPath('/products')}
                >
                    Products
                </Link>
            </div>


            {/* services */}
            <div className="h-6 px-2 inline-flex justify-center items-center gap-1">
                <Link
                    href="/services/purchase"
                    className={"text-center justify-start text-black text-base font-medium hover_underline leading-normal " + styles.hover_underline}

                >
                    Service
                </Link>
            </div>


            {/* blogs */}
            <div className="h-6 px-2 inline-flex justify-center items-center gap-1">
                <Link
                    href="/blogs"
                    className={"text-center justify-start text-black text-base font-medium hover_underline leading-normal " + styles.hover_underline + ' ' + isCurrentPath('/blogs')}

                >
                    blogs
                </Link>
            </div>


            {/* company */}
            <div className="h-6 px-2 inline-flex justify-center items-center gap-1">
                <div
                    className={"text-center justify-start text-black text-base font-medium hover_underline leading-normal " + styles.hover_underline}

                >
                    Company
                </div>
            </div>



            <Menu as="div" className="relative inline-block">
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-black inset-ring-1 inset-ring-white/5 hover:bg-white/20">
                    Options
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                </MenuButton>

                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                    <div className="py-1">
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                            >
                                Account settings
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                            >
                                Support
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                            >
                                License
                            </a>
                        </MenuItem>
                        <form action="#" method="POST">
                            <MenuItem>
                                <button
                                    type="submit"
                                    className="block w-full px-4 py-2 text-left text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                >
                                    Sign out
                                </button>
                            </MenuItem>
                        </form>
                    </div>
                </MenuItems>
            </Menu>
        </>
    )
}