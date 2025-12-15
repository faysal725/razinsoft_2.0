'use client'
import ButtonSolid3 from "@/components/Button/Solid3";
import InputText2 from "../InputText2";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, clearErrors } from "@/store/slices/authSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import Dropdown2 from "../Dropdown2";
import crud from "@/lib/axios";
import { useRouter, useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';



function ResetPassword({ setFormType }) {
    
    // apis
    let resetPasswordApiEndpoint = "/reset-password";


    // hooks
    const searchParams = useSearchParams(); // Allows reading the query params

    
    // variables
    const [errorMsgs, setErrorMsgs] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const handleTokenSending = async (e) => {
        setErrorMsgs(null)
        setIsLoading(true)
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        const password_confirmation = formData.get("password_confirmation");
        const token = searchParams.get('token');



        try {
            const res = await crud.post(resetPasswordApiEndpoint, { email, password, password_confirmation, token });
            toast.success(res.data.message);
            setIsLoading(false)
            setFormType('login')
        } catch (err) {
            console.log(err.response.data)
            toast.error(err.response?.data?.message);
            setErrorMsgs(err.response?.data)
            setIsLoading(false)
        }

    }
    return (
        <form onSubmit={handleTokenSending} className="space-y-3 mx-auto md:p-4 w-full">

            <InputText2
                label="email"
                title="Email"
                type="text"
                required={true}
                placeholder="Email"
                errorMsg={''}
            />

            <InputText2
                label="password"
                title="password"
                type="password"
                required={true}
                placeholder="password"
                errorMsg={''}
            />
            <InputText2
                label="password_confirmation"
                title="confirm password"
                type="password"
                required={true}
                placeholder="Confirm password"
                errorMsg={errorMsgs?.errors?.password ? errorMsgs?.errors?.password[0] : ''}
            />

            <ButtonSolid3 name={isLoading ? "Sending..." : "Send Request"} shouldDisabled={false} type="submit" />


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


function ForgetPasswordForm({ setFormType }) {


    // apis
    let forgotPasswordApiEndpoint = "/forgot-password";


    // variables
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const handleTokenSending = async (e) => {
        setErrorMsg(null)
        setIsLoading(true)
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");

        try {
            const res = await crud.post(forgotPasswordApiEndpoint, { email });
            toast.success(res.data.message);
            setIsLoading(false)
        } catch (err) {
            console.log(err.response)
            toast.error(err.response?.data?.message);
            setErrorMsg(err.response?.data?.message)
            setIsLoading(false)
        }

    }
    return (
        <form onSubmit={handleTokenSending} className="space-y-3 mx-auto md:p-4 w-full">

            <InputText2
                label="email"
                title="Email"
                type="text"
                required={true}
                placeholder="Email"
                errorMsg={errorMsg}
            />

            <ButtonSolid3 name={isLoading ? "Sending..." : "Send Request"} shouldDisabled={false} type="submit" />


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
                options={countryOptions.countries}
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

    // 1. Get the current status from Redux
    const { authenticated } = useSelector((state) => state.auth);

    // 2. Get App Router hooks
    const router = useRouter();
    const searchParams = useSearchParams(); // Allows reading the query params

    useEffect(() => {

        console.log(searchParams.get('token'), searchParams.get('email'))
        // 3. Get the intended return path from the URL
        // Middleware added this: /login?from=/dashboard/settings
        const returnUrl = searchParams.get('from') || '/dashboard';

        if (searchParams.get('token') && searchParams.get('email')) {
            setFormType('resetPass')
        }
        // 4. Check if authentication state has successfully changed
        if (authenticated) {
            console.log("Authentication successful, redirecting to:", returnUrl);
            // 5. Trigger the redirect to the target page
            router.push(returnUrl);
        }
    }, [authenticated, router, searchParams]); // Run this effect when 'authenticated' changes


    // 6. If the user is authenticated but the effect hasn't run yet, show a loader
    if (authenticated) {
        return (
            <div className="text-center p-10">
                <h2>Login Successful!</h2>
                <p>Redirecting you to your dashboard...</p>
            </div>
        );
    }

    // 7. Render the forms if not authenticated
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
                        formType === 'resetPass' ? (<ResetPassword setFormType={setFormType} />) :
                            (<LoginForm setFormType={setFormType} />)
            }

        </section>
    )
}