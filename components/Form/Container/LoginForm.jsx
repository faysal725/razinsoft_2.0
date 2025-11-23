'use client'
import ButtonSolid3 from "@/components/Button/Solid3";
import InputText2 from "../InputText2";


export default function LoginForm() {
    function login(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const query = formData.get("email");
        console.log(query)
    }
    return (
        <section className="space-y-5 w-full">
            <div className="flex flex-col items-center gap-2">
                <img
                    src="/images/logo/logo-dark2.svg"
                    alt=""
                    className="h-8 md:h-14 w-auto"
                />
            </div>

            <form onSubmit={login} className="space-y-3 mx-auto p-4 w-full">
                <InputText2
                    label="email"
                    title="email"
                    type="text"
                    placeholder="email" errorMsg='' />

                <InputText2
                    label="password"
                    title="password"
                    type="password"
                    placeholder="password" errorMsg='' />
                <ButtonSolid3 name="Submit" shouldDisabled={false} type="submit" />

                {/* {state?.error && <p className="text-red-500 mt-2">{state.error}</p>}
            {state?.success && <p className="text-green-500 mt-2">{state.success}</p>} */}
            </form>
        </section>
    )
}