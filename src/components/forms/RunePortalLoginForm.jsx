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
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      navigate("/home");
      checkSession();
    }
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <form
      className="w-full p-8 bg-neutral-800 rounded-lg border border-zinc-800 flex flex-col justify-start items-start gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="text-zinc-200 text-xl md:text-2xl font-normal">
        Log In
      </div>

      {/* Email Input */}
      <div className="w-full flex flex-col justify-start items-start gap-2.5">
        <input
          id="email-address"
          name="email"
          type="email"
          {...register("email", { required: true })}
          className="appearance-none w-full bg-zinc-900 text-zinc-200 placeholder-zinc-500 rounded-lg px-3 py-2 focus:outline-none"
          placeholder="Email address"
        />
      </div>

      {/* Password Input */}
      <div className="w-full flex flex-col justify-start items-center gap-2.5">
        <input
          id="password"
          name="password"
          type="password"
          {...register("password", { required: true })}
          className="appearance-none w-full bg-zinc-900 text-zinc-200 placeholder-zinc-500 rounded-lg px-3 py-2 focus:outline-none"
          placeholder="Password"
        />
      </div>

      {/* Log In Button */}
      <button
        type="submit"
        className="w-full bg-purple-900 text-zinc-200 text-base font-bold rounded-lg px-6 py-2 focus:outline-none"
      >
        Log In
      </button>

      {/* Forgot Password Link */}
      <a href="#" className="text-violet-400 text-base font-normal">
        Forgot Password or Username?
      </a>
    </form>
  );
};

export default RunePortalLoginForm;
