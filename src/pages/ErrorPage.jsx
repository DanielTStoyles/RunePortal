/** @format */

import React from "react";
import MainPageLayout from "./MainPageLayout";
import NotFoundComponent from "../components/reDirectPages/notFoundComponent";

const NotFoundPage = () => {
  return (
    <MainPageLayout pageTitle="404 Not Found">
      <div className="flex justify-center items-center">
        <NotFoundComponent />
      </div>
    </MainPageLayout>
  );
};

export default NotFoundPage;
