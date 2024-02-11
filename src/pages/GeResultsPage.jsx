/** @format */

import React from "react";
import MainPageLayout from "./MainPageLayout";
import GeResultsComponent from "../components/geComponents/GeResultsComponent";
import GeSearchComponent from "../components/geComponents/GeSearchComponent";

const GeResultsPage = () => {
  return (
    <MainPageLayout pageTitle="Grand Exchange">
      <GeSearchComponent isResultsPage={true} />
      <GeResultsComponent />
    </MainPageLayout>
  );
};

export default GeResultsPage;
