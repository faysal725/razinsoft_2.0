
import Link from "next/link";
import styles from "./Navbar.module.css"
import ButtonAnimationLarge from "../Button/AnimationLarge";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SupportBtn from "../Button/SupportBtn";
import NavLinks from "./NavLinks";


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
                            <NavLinks />


                            {/* modal */}
                            <SupportBtn />


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