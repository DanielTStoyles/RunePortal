/** @format */

import React from "react";
import MainPageLayout from "./MainPageLayout";
import GeResultPageComponent from "../components/geComponents/GeResultPageComponent";

const GeResultsPage = () => {
  return (
    <MainPageLayout
      pageTitle="Grand Exchange"
      contentClassName="flex-grow p-8 md:p-12 lg:p-16"
    >
      <GeResultPageComponent />
    </MainPageLayout>
  );
};

export default GeResultsPage;
