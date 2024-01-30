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
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div className="mb-2">
          <label htmlFor="rsn" className="sr-only">
            RSN
          </label>
          <input
            id="rsn"
            name="rsn"
            type="text"
            {...register("rsn", { required: true })}
            className="appearance-none rounded-none relative block w-full px-3 py-2 
            border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md 
            focus:outline-none focus:ring-lime-600 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="RSN"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="account_type" className="sr-only">
            Account Type
          </label>
          <select
            id="account_type"
            name="account_type"
            {...register("account_type", { required: true })}
            className="appearance-none rounded-none relative block w-full px-3 py-2 
            border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md 
            focus:outline-none focus:ring-lime-600 focus:border-indigo-500 focus:z-10 sm:text-sm"
          >
            <option value="Normal">Normal</option>
            <option value="Ironman">Ironman</option>
            <option value="Hardcore Ironman">Hardcore Ironman</option>
            <option value="Ultimate Ironman">Ultimate Ironman</option>
            <option value="Group Ironman">Group Ironman</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <img
              src="./images/dropdown-icon.png"
              alt="dropdown"
              className="h-4 w-4"
            />
          </div>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="relative w-full flex flex-col justify-center items-center py-2 px-4 
          border border-lime-400 text-md font-medium rounded-md text-white bg-stone-600 hover:bg-stone-700 
          focus:outline-none focus:ring-2 focus:ring-lime-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RsnRegisterForm;

{
  /* <img
src="./images/dropdown-icon.png"
alt="dropdown icon"
className="h-4 w-4"
/> */
}
