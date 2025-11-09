
import Link from "next/link";
import styles from "./Navbar.module.css"
import ButtonAnimationLarge from "../Button/AnimationLarge";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


export default function Navbar() {


    return (

        <>
            <nav className="bg-white border-b border-b-gray-50 py-4 lg:py-6 sticky top-0 right-0 z-20">
                <div className="container">
                    <div className="flex justify-between items-center py-2">


                        <Link href="/">
                            <img src="images/logo/logo-dark2.svg" alt="" className=" w-32 h-7 sm:w-48 sm:h-10" />
                        </Link>


                        <section
                            className="hidden lg:inline-flex justify-center items-center gap-4"
                        >

                            <div className="h-6 inline-flex flex-col justify-start items-center">
                                <div className="px-2 inline-flex justify-center items-center gap-1">
                                    <Link
                                        href="/"
                                        className={"text-center justify-start text-zinc-800 text-base font-medium hover_underline leading-normal " + styles.hover_underline}
                                    >
                                        Home
                                    </Link>
                                </div>
                            </div>


                            {/* products */}
                            <div className="h-6 px-2 inline-flex justify-center items-center gap-1">
                                <Link
                                    href="/products"
                                    className={"text-center justify-start text-black text-base font-medium hover_underline leading-normal " + styles.hover_underline}
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
                                    className={"text-center justify-start text-black text-base font-medium hover_underline leading-normal " + styles.hover_underline}

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


                            <ButtonAnimationLarge name="Get Support" seoClass="text-white" />


                            <Link
                                href='/login'
                                className="profile-icon"
                            >
                                <img src="/images/icon/user.svg" alt="User" />
                            </Link>
                        </section>

                        <section
                            className=" lg:hidden w-8 h-8 flex justify-center items-center rounded-full cursor-pointer bg-nGray-50"
                        >
                            <Bars3Icon className="h-6 w-6 text-nGray-500" />
                            {/* <XMarkIcon className="h-6 w-6 text-nGray-500" />  */}
                        </section>
                    </div>
                </div>
            </nav>

        </>
    )
}