'use client'
import ButtonSolid3 from "@/components/Button/Solid3";
import InputText2 from "../InputText2";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/store/slices/authSlice";
import Link from "next/link";


function RegisterForm() {


    return (
        <div>register form</div>
    )
}



function LoginForm() {


    const dispatch = useDispatch();
    const { loading, errors } = useSelector((state) => state.auth);




    function login(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        dispatch(loginUser({ email, password }));
    }
    return (
        <form onSubmit={login} className="space-y-3 mx-auto p-4 w-full">
            <InputText2
                label="email"
                title="Email / Phone"
                type="text"
                required={true}
                placeholder="email" errorMsg={errors?.errors?.email ? errors?.errors?.email[0] : ''} />

            <InputText2
                label="password"
                title="password"
                type="password"
                required={true}
                placeholder="password" errorMsg={errors?.errors?.password ? errors?.errors?.password[0] : ''} />


            <span className="flex justify-end">
                <p
                    className="text-xs md:text-sm font-normal text-primary cursor-pointer"
                >
                    Forget Password
                </p>
            </span>


            <ButtonSolid3 name={loading ? "Logging in..." : "Log in"} shouldDisabled={false} type="submit" />


            <div
                className="text-xs md:text-sm text-center"
            >
                Don't have an account?
                <Link href='?type=register'
                    className="pl-1 text-primary inline cursor-pointer"
                >
                    Sign Up
                </Link>
            </div>
        </form>
    )
}


export default function AuthorizationForm() {


    return (
        <section className="space-y-5 w-full">

            <div className="flex flex-col items-center gap-2">
                <img
                    src="/images/logo/logo-dark2.svg"
                    alt=""
                    className="h-8 md:h-14 w-auto"
                />
            </div>


            <LoginForm />

        </section>
    )
}