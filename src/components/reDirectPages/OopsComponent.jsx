/** @format */

import MainPageLayout from "../../pages/MainPageLayout";
import RsnRegisterForm from "../forms/RsnRegisterForm";
import RunePortalLoginForm from "../forms/RunePortalLoginForm";

const OopsComponent = () => {
  return (
    <MainPageLayout pageTitle="Oops!">
      <div className="relative w-full min-h-screen flex flex-col justify-start items-center text-center px-4 md:px-10 lg:px-20 pt-8 pb-8">
        <h1 className="text-neutral-300 text-2xl md:text-4xl font-bold mt-10 mb-6">
          Oops! The page you’ve tried to visit requires a registered account.
        </h1>
        <p className="text-zinc-400 text-xl md:text-2xl font-bold mb-8 max-w-2xl">
          Having a registered account allows you to track your own progress and
          get the most out of the other features.
        </p>

        <h2 className="text-neutral-300 text-2xl md:text-3xl font-bold mb-8 mt-20">
          Register or Log In below
        </h2>
        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-10 md:gap-16 mt-6">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6 flex flex-col justify-start items-start gap-6">
            <RsnRegisterForm />
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6 flex flex-col justify-start items-start gap-6">
            <RunePortalLoginForm />
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default OopsComponent;
