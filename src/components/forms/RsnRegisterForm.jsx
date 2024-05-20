/** @format */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const RsnRegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const registerMutation = useMutation(async (data) => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("failed to register player");
    }
    return response.json();
  }, {
    onSuccess: () => {
      navigate("/home");
      checkSession();
    },
    onError: () => {
      setErrorMessage("An error has occurred in the registration process");
    }
  });

  const onSubmit = (data) => {
    setErrorMessage(null); 
    registerMutation.mutate(data);
  };

  return (
    <div className="w-[650px] p-10 bg-progress-back rounded-lg border border-zinc-800">
      {errorMessage && (
        <div className="w-full p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
          {errorMessage}
        </div>
      )}
      <form
        className="flex flex-col items-start gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-zinc-200 text-[24px] font-bold mb-8">
          Register an Account
        </h2>

        <div className="w-full">
          <input
            id="username"
            name="username"
            type="text"
            {...register("username", { required: true })}
            className="w-full px-4 py-3 bg-form-bkgdef border-form-borderdef border-[1px] text-form-txtsel placeholder-zinc-500 rounded-md focus:outline-none focus:border-form-brdsel focus:text-form-txtsel hover:border-form-brdhov hover:text-form-txthov"
            placeholder="Username"
          />
        </div>

        {/* Email Field */}
        <div className="w-full">
          <input
            id="email"
            name="email"
            type="email"
            {...register("email", { required: true })}
            className="w-full px-4 py-3 bg-form-bkgdef border-form-borderdef border-[1px] text-form-txtsel placeholder-zinc-500 rounded-md focus:outline-none focus:border-form-brdsel focus:text-form-txtsel hover:border-form-brdhov hover:text-form-txthov"
            placeholder="Email"
          />
        </div>

        {/* Password Field */}
        <div className="w-full">
          <input
            id="password"
            name="password"
            type="password"
            {...register("password", { required: true })}
            className="w-full px-4 py-3 bg-form-bkgdef border-form-borderdef border-[1px] text-form-txtsel placeholder-zinc-500 rounded-md focus:outline-none focus:border-form-brdsel focus:text-form-txtsel hover:border-form-brdhov hover:text-form-txthov"
            placeholder="Password"
          />
        </div>

        {/* RSN Field */}
        <div className="w-full">
          <input
            id="rsn"
            name="rsn"
            type="text"
            {...register("rsn", { required: true })}
            className="w-full px-4 py-3 bg-form-bkgdef border-form-borderdef border-[1px] text-form-txtsel placeholder-zinc-500 rounded-md focus:outline-none focus:border-form-brdsel focus:text-form-txtsel hover:border-form-brdhov hover:text-form-txthov"
            placeholder="Runescape Username"
          />
        </div>

        {/* Account Type Select */}
        <div className="w-full">
          <select
            id="account_type"
            name="account_type"
            {...register("account_type", { required: true })}
            className="w-full px-4 py-3 bg-form-bkgdef border-form-borderdef border-[1px] text-form-txtsel placeholder-zinc-500 rounded-md focus:outline-none focus:border-form-brdsel focus:text-form-txtsel hover:border-form-brdhov hover:text-form-txthov"
          >
            <option value="Normal">Normal</option>
            <option value="Ironman">Ironman</option>
            <option value="Hardcore Ironman">Hardcore Ironman</option>
            <option value="Ultimate Ironman">Ultimate Ironman</option>
            <option value="Group Ironman">Group Ironman</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="w-full">
          <button
            type="submit"
            className="w-full px-6 py-2 bg-rp-buttonNormal text-header-txt text-base font-bold rounded-md hover:bg-rp-buttonHover focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-700"
          >
            Register
          </button>
        </div>

        <div className="text-zinc-300 text-sm mt-4">
          Have an Account?{" "}
          <a href="/login" className="text-link-txt hover:text-violet-300">
            Login Here
          </a>
        </div>
      </form>
    </div>
  );
};

export default RsnRegisterForm;
