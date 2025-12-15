'use client'
import ButtonSolid3 from "@/components/Button/Solid3";
import InputText2 from "../InputText2";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, clearErrors } from "@/store/slices/authSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import Dropdown2 from "../Dropdown2";
import crud from "@/lib/axios";



function ForgetPasswordForm() {


    return (
        <div>ForgetPasswordForm form</div>
    )
}


function RegisterForm({ setFormType }) {

    // apis
    let countryApi = "/countries"


    // variables
    let [countryOptions, setCountryOptions] = useState([]);

    const dispatch = useDispatch();
    const { loading, errors } = useSelector((state) => state.auth);



    // functions
    function signUp(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const first_name = formData.get("first_name");
        const email = formData.get("email");
        const country_id = formData.get("country");
        const phone_number = formData.get("phone");
        const password = formData.get("password");
        const password_confirmation = formData.get("password_confirmation");

        console.log(first_name, email, country_id, phone_number, password, password_confirmation)
        dispatch(registerUser({ first_name, email, country_id, phone_number, password, password_confirmation }));
    }


    async function getAllCountries() {
        try {
            const res = await crud.get(countryApi);
            console.log(res.data.data)
            setCountryOptions(res.data.data)
            // return res.data; 
        } catch (err) {
            // toast.error(err.response?.data?.message || "Login failed");
            // return rejectWithValue(err.response.data);
        }
    }



    useEffect(() => {
        getAllCountries();
        dispatch(clearErrors())
    }, [])


    return (
        <form onSubmit={signUp} className="space-y-3 mx-auto md:p-4 w-full">
            <InputText2
                label="first_name"
                title="Name"
                type="text"
                required={true}
                placeholder="Enter Name"
                errorMsg={errors?.errors?.first_name ? errors?.errors?.first_name[0] : ''}
            />
            <InputText2
                label="email"
                title="Email"
                type="text"
                required={true}
                placeholder="email"
                errorMsg={errors?.errors?.email ? errors?.errors?.email[0] : ''}
            />


            <Dropdown2 label="country"
                title="country"
                required
                onChange={(e) => console.log(e.target.value)}
                returnValue='id'
                showValue='name'
                options={countryOptions}
                errorMsg={errors?.errors?.country_id ? errors?.errors?.country_id[0] : ''}
            />
            <InputText2
                label="phone"
                title="phone"
                type="text"
                required={true}
                placeholder="phone"
                errorMsg={errors?.errors?.phone ? errors?.errors?.phone[0] : ''}
            />
            <InputText2
                label="password"
                title="password"
                type="password"
                required={true}
                placeholder="password"
                errorMsg={errors?.errors?.password ? errors?.errors?.password[0] : ''}
            />
            <InputText2
                label="password_confirmation"
                title="confirm password"
                type="password"
                required={true}
                placeholder="password"
                errorMsg={errors?.errors?.password_confirmation ? errors?.errors?.password_confirmation[0] : ''}
            />

            <ButtonSolid3 name={loading ? "Signing in..." : "Sign Up"} shouldDisabled={false} type="submit" />


            <div
                className="text-xs md:text-sm text-center"
            >
                Already have an account?
                <span onClick={() => setFormType("login")}
                    className="pl-1 text-primary inline cursor-pointer"
                >
                    Login
                </span>
            </div>
        </form>
    )
}



function LoginForm({ setFormType }) {


    const dispatch = useDispatch();
    const { loading, errors } = useSelector((state) => state.auth);

    function login(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        dispatch(loginUser({ email, password }));
    }

    // useeffect
        useEffect(() => {
        dispatch(clearErrors())
    }, [])
    return (
        <form onSubmit={login} className="space-y-3 mx-auto md:p-4 w-full">
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
                    onClick={() => setFormType("forgetPass")}
                >
                    Forget Password
                </p>
            </span>


            <ButtonSolid3 name={loading ? "Logging in..." : "Log in"} shouldDisabled={false} type="submit" />


            <div
                className="text-xs md:text-sm text-center"
            >
                Don't have an account?
                <span onClick={() => setFormType("signup")}
                    className="pl-1 text-primary inline cursor-pointer"
                >
                    Sign Up
                </span>
            </div>
        </form>
    )
}


export default function AuthorizationForm() {

    const [formType, setFormType] = useState('login');


    return (
        <section className="space-y-5 w-full">

            <div className="flex flex-col items-center gap-2">
                <img
                    src="/images/logo/logo-dark2.svg"
                    alt=""
                    className="h-8 md:h-14 w-auto"
                />
            </div>

            {
                formType === 'signup' ? (<RegisterForm setFormType={setFormType} />) :
                    formType === 'forgetPass' ? (<ForgetPasswordForm setFormType={setFormType} />) :
                        (<LoginForm setFormType={setFormType} />)
            }

        </section>
    )
}