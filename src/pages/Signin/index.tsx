import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Logo from "../../assets/images/logo.png";
import { getUserSignedIn } from "../../context/users/action";
import { useUserDispatch, useUserState } from "../../context/users/context";

function SignIn() {
  type Inputs = {
    email: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  let state: any = useUserState();
  const dispatchUsers = useUserDispatch();
  const { isLoading, isError, errorMessage } = state;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    getUserSignedIn(dispatchUsers, email, password);
  };
  return (
    <div className="px-6 pt-12 lg:px-8 h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={Logo} alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign Up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                {...register("email", { required: true })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              <p className="text-md text-red-500">
                {errors.email && (
                  <span>This field is required with a valid email</span>
                )}
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                {...register("password", { required: true })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
              <p className="text-md text-red-500">
                {errors.password && <span>This field is required</span>}
              </p>
            </div>
          </div>

          <div>
            {isLoading ? (
              <>Loading...</>
            ) : (
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Sign In
              </button>
            )}
          </div>
          <p className="text-md text-red-500 justify-center">
            {isError ? <span>{errorMessage}</span> : ""}
          </p>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Create an account?{" "}
          <a
            href="/signup"
            className="font-semibold leading-6 text-gray-600 hover:text-gray-500"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
