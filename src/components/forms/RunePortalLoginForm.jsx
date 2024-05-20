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

  const regLink = () => {
    navigate("/register");
  };

  return (
    <form
      className="w-full p-4 bg-progress-back rounded-lg border border-zinc-800 flex flex-col justify-start items-start gap-6 p-[40px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="text-zinc-200 text-xl md:text-2xl font-normal">
        Login
      </div>

      {/* Email Input */}
      <div className="w-full flex flex-col justify-start items-start gap-2.5">
        <input
          id="email-address"
          name="email"
          type="email"
          {...register("email", { required: true })}
          className="w-full px-4 py-3 bg-form-bkgdef border-form-borderdef border-[1px] text-form-txtsel placeholder-zinc-500 rounded-md focus:outline-none focus:border-form-brdsel focus:text-form-txtsel hover:border-form-brdhov hover:text-form-txthov"
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
          className="w-full px-4 py-3 bg-form-bkgdef border-form-borderdef border-[1px] text-form-txtsel placeholder-zinc-500 rounded-md focus:outline-none focus:border-form-brdsel focus:text-form-txtsel hover:border-form-brdhov hover:text-form-txthov"
          placeholder="Password"
        />
      </div>

      {/* Log In Button */}
      <button
        type="submit"
        className="w-full bg-rp-buttonNormal text-header-txt text-base font-bold rounded-lg px-6 py-2 focus:outline-none hover:bg-rp-buttonHover"
      >
        Login
      </button>

      {/* Forgot Password Link */}
      <div>
      <span href="#" className="text-form-txtsel text-base font-normal">
        Don't have an Account?
      </span>
      <a href="#" className=" text-base font-normal ml-2 text-link-txt" onClick={regLink}>
Click Here to Register
      </a>
      </div>

    </form>
  );
};

export default RunePortalLoginForm;
