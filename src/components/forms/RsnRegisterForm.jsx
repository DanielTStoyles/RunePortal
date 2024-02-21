/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

const RsnRegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const registerMutation = useMutation(async (data) => {
    const response = await fetch("/api/playerRegistration", {
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
      className="w-full p-8 bg-neutral-800 rounded-lg border border-zinc-800 flex flex-col justify-start items-start gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="text-zinc-200 text-2xl font-normal font-['Arial']">
        Register an Account
      </div>

      <div className="w-full px-6 py-4 bg-zinc-900 rounded-lg border border-zinc-800 flex justify-start items-start gap-2.5">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="text"
          {...register("email", { required: true })}
          className="appearance-none w-full bg-zinc-900 text-zinc-200 placeholder-zinc-500 rounded-none px-3 py-2 focus:outline-none"
          placeholder="Email"
        />
      </div>

      <div className="w-full px-6 py-4 bg-zinc-900 rounded-lg border border-zinc-800 flex justify-start items-start gap-2.5">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="text"
          {...register("password", { required: true })}
          className="appearance-none w-full bg-zinc-900 text-zinc-200 placeholder-zinc-500 rounded-none px-3 py-2 focus:outline-none"
          placeholder="Password"
        />
      </div>

      {/* RSN Input */}
      <div className="w-full px-6 py-4 bg-zinc-900 rounded-lg border border-zinc-800 flex justify-start items-start gap-2.5">
        <label htmlFor="rsn" className="sr-only">
          RSN
        </label>
        <input
          id="rsn"
          name="rsn"
          type="text"
          {...register("rsn", { required: true })}
          className="appearance-none w-full bg-zinc-900 text-zinc-200 placeholder-zinc-500 rounded-none px-3 py-2 focus:outline-none"
          placeholder="RSN"
        />
      </div>

      {/* Account Type Select */}
      <div className="w-full px-6 py-4 bg-zinc-900 rounded-lg border border-zinc-800 flex justify-start items-center gap-2.5">
        <label htmlFor="account_type" className="sr-only">
          Account Type
        </label>
        <select
          id="account_type"
          name="account_type"
          {...register("account_type", { required: true })}
          className="appearance-none w-full bg-zinc-900 text-zinc-200 placeholder-zinc-500 rounded-none px-3 py-2 focus:outline-none"
        >
          <option value="Normal">Normal</option>
          <option value="Ironman">Ironman</option>
          <option value="Hardcore Ironman">Hardcore Ironman</option>
          <option value="Ultimate Ironman">Ultimate Ironman</option>
          <option value="Group Ironman">Group Ironman</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="w-full px-6 py-3 bg-purple-900 rounded-lg flex justify-center items-center gap-1">
        <button
          type="submit"
          className="w-full text-zinc-200 text-base font-bold font-['Arial'] py-2 focus:outline-none"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RsnRegisterForm;
