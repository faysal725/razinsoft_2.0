export default function ButtonSolid({ name = 'demo', startLoader = false , onClick = () => { } }) {


    return (
        <button
            onClick={() => onClick()}
            className="px-6 border-primary border p-2 rounded-md bg-primary text-xs capitalize transition-all duration-150  text-white w-full flex justify-center items-center">


            <p className="relative">
                {
                    startLoader ? (
                        <img src="/images/icon/loader/icons8-loading-24.png" alt=""
                            className="absolute -top-1 -left-7 animate-spin" />
                    ) : null
                }
                {name}
            </p>
        </button>
    )
}