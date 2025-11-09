'use client'

import { useState } from "react";
import BasicModalContainer from "../Modals/BasicModalContainer";
import ButtonAnimationLarge from "./AnimationLarge"
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import ButtonSolid from "./ButtonSolid";
import { useRouter } from 'next/navigation'

const SupportBtn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()

    return (
        <>
            <ButtonAnimationLarge name="Get Support" seoClass="text-white" onClick={() => setIsOpen(!isOpen)} />

            {/* modal */}
            <BasicModalContainer isOpen={isOpen}
                onClose={() => setIsOpen(false)}>

                <section className="space-y-5">
                    <div className="flex flex-col items-center gap-2">
                        <ExclamationTriangleIcon className="w-16 h-16 text-yellow-500" />
                    </div>

                    <div>
                        <p className="text-center text-xl font-medium mb-2">Oops!</p>
                        <p className="text-center">
                            You're not logged in. Please log in to your account to contact
                            support.
                        </p>
                    </div>

                    <ButtonSolid name="Log in" onClick={() => router.push('/login', {scroll: false})} startLoader={false} />
                </section>
            </BasicModalContainer>


        </>
    )

}


export default SupportBtn;