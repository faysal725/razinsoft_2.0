import AuthorizationForm from "@/components/Form/Container/AuthorizationForm";
import Image from "next/image";

export default function Login() {
  return (
    <div>
      <section className="my-[29px]">
        <div className="container">

          <div className="p-5 bg-nPrimary-50 md:rounded-4xl grid grid-cols-2 gap-6 ">

            <img
              src="/images/auth/login.jpg"
              alt=""
              className="hidden lg:block h-full w-full rounded-lg object-cover"
            />

            <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-8 px-4 md:px-8 flex flex-col justify-start md:justify-center items-center min-h-[75vh] lg:min-h-auto">
              <AuthorizationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
