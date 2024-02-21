/** @format */

import React from "react";
import MainPageLayout from "./MainPageLayout";
import NotFoundComponent from "../components/reDirectPages/notFoundComponent";

const NotFoundPage = () => {
  return (
    <MainPageLayout pageTitle="404 Not Found">
      <div>
        <NotFoundComponent />
      </div>
    </MainPageLayout>
  );
};

export default NotFoundPage;
