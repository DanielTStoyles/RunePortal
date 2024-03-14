/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

const RsnRegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const registerMutation = useMutation(async (data) => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("failed to register player");
    }
    console.log(response.json);
    return response.json();
  });

  const onSubmit = (data) => {
    registerMutation.mutate(data);
  };

  return (
    <form
      className="w-full max-w-xl p-10 bg-zinc-900 rounded-lg border border-zinc-800 flex flex-col justify-start items-start gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-zinc-200 text-3xl font-bold mb-8">
        Register an Account
      </h2>

      <div className="w-full">
        <input
          id="username"
          name="username"
          type="username" // Assuming you want to change the type to email for better validation
          {...register("username", { required: true })}
          className="w-full px-4 py-3 bg-zinc-800 text-zinc-200 placeholder-zinc-500 rounded-md focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          placeholder="Username"
        />
      </div>

      {/* Email Field */}
      <div className="w-full">
        <input
          id="email"
          name="email"
          type="email" // Assuming you want to change the type to email for better validation
          {...register("email", { required: true })}
          className="w-full px-4 py-3 bg-zinc-800 text-zinc-200 placeholder-zinc-500 rounded-md focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          placeholder="Email"
        />
      </div>

      {/* Password Field */}
      <div className="w-full">
        <input
          id="password"
          name="password"
          type="password" // To hide the password input
          {...register("password", { required: true })}
          className="w-full px-4 py-3 bg-zinc-800 text-zinc-200 placeholder-zinc-500 rounded-md focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
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
          className="w-full px-4 py-3 bg-zinc-800 text-zinc-200 placeholder-zinc-500 rounded-md focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          placeholder="Runescape Username"
        />
      </div>

      {/* Account Type Select */}
      <div className="w-full">
        <select
          id="account_type"
          name="account_type"
          {...register("account_type", { required: true })}
          className="w-full px-4 py-3 bg-zinc-800 text-zinc-200 placeholder-zinc-500 rounded-md focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
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
          className="w-full px-6 py-3 bg-rp-buttonNormal text-zinc-200 text-base font-bold rounded-md hover:bg-rp-buttonHover focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-700"
        >
          Register
        </button>
      </div>

      <div className="text-zinc-300 text-sm mt-4">
        Have an Account?{" "}
        <a href="/login" className="text-violet-400 hover:text-violet-300">
          Log In Here
        </a>
      </div>
    </form>
  );
};

export default RsnRegisterForm;
