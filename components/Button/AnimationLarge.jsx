'use client'

export default function ButtonAnimationLarge({ name = "", seoClass = "", onClick = () => { } }) {



    return (
        <button
            onClick={() => onClick()}
            className={"h-14 px-6 p-3.5 bg-primary rounded-xl inline-flex justify-center items-center gap-2.5 transition-all duration-200 hover:shadow-inner-custom " + seoClass}
        >
            <div className="text-center text-white text-sm font-medium leading-snug">
                {name}
            </div>
        </button>
    )
}