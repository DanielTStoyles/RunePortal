/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { email, password, rsn } = data;
    await fetch("http://localhost:5173/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, rsn }),
    });
  };

  return (
    <div
      className="min-h-screen bg-[url(C:\Users\Danie\Desktop\RunePortalv2\src\images\bg2.jpg)] 
      bg-repeat-y bg-center bg-top mx-auto 
      overflow-y-hidden px-012 flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-200">
            Register for an account
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm">
            <div className="mb-2">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                {...register("email", { required: true })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 
                border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md 
                focus:outline-none focus:ring-lime-600 focus:border-lime-600 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                {...register("password", { required: true })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 
                border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md 
                focus:outline-none focus:ring-lime-600 focus:border-lime-600 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="RSN" className="sr-only">
                RSN
              </label>
              <input
                id="RSN"
                name="rsn"
                type="username"
                {...register("rsn", { required: true })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 
                border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md 
                focus:outline-none focus:ring-lime-600 focus:border-lime-600 focus:z-10 sm:text-sm"
                placeholder="RSN"
              />
            </div>
            <div className="w-full text-center">
              <Link
                to="http://localhost:5173"
                className="text-blue-500 hover:text-blue-700"
              >
                {" "}
                Already have an account? Click here to login!{" "}
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-lime-400 text-md 
              font-medium rounded-md text-white bg-stone-600 hover:bg-stone-700 
              focus:outline-none focus:ring-2 focus:ring-lime-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
