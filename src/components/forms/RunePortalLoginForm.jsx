/** @format */

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import AuthContext from "../../context/AuthContext";

const RunePortalLoginForm = () => {
  const { checkSession } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const loginMutation = useMutation(async (data) => {
    console.log("Initialized");
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("good login");
      navigate("/home");
      checkSession();
    }
    console.log("fetch sent");
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
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
                    focus:outline-none focus:ring-lime-600 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div>
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
                    focus:outline-none focus:ring-lime-600 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
        <div className="w-full text-center">
          <Link
            to="http://localhost:5173/register"
            className="text-blue-500 hover:text-blue-700"
          >
            {" "}
            Don't have an account? Click here to Register{" "}
          </Link>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 
                  border border-lime-400 text-md font-medium rounded-md text-white bg-stone-600 hover:bg-stone-700 
                  focus:outline-none focus:ring-2 focus:ring-lime-600"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default RunePortalLoginForm;
