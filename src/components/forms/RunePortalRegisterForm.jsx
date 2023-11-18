/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

const RunePortalRegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const registerMutation = useMutation(async (data) => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log("good register");
      navigate("/login");
    }
  });

  const onSubmit = (data) => {
    registerMutation.mutate(data);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md shadow-sm mb-4">
        <div className="flex flex-row items-start px-[24px] py-[16px] gap-[10px] w-[552px] h-[50px] border border-[#53358D] rounded-[8px]">
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full font-arial text-[16px] leading-[18px] text-[#808080] bg-transparent"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="rounded-md shadow-sm mb-4 mt-4">
          <div className="flex flex-row items-start px-[24px] py-[16px] gap-[10px] w-[552px] h-[50px] border border-[#53358D] rounded-[8px]">
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full font-arial text-[16px] leading-[18px] text-[#808080] bg-transparent"
              placeholder="Enter your password"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <div className="mb-2">
          <div className="flex flex-row items-start px-[24px] py-[16px] gap-[10px] w-[552px] h-[50px] border border-[#53358D] rounded-[8px]">
            <input
              type="username"
              {...register("username", { required: true })}
              className="w-full font-arial text-[16px] leading-[18px] text-[#808080] bg-transparent"
              placeholder="Enter your Runescape Username"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center px-[24px] py-[12px] gap-[8px] w-[552px] h-[42px] bg-runeportal-buttonpurple rounded-[8px]">
        <button type="submit" className="text-white">
          Register
        </button>
      </div>
      <div className="w-full text-center">
        <Link to="http://localhost:5173/login" className="text-white ">
          {" "}
          Already have an account? Click here to login!{" "}
        </Link>
      </div>
    </form>
  );
};

export default RunePortalRegisterForm;
