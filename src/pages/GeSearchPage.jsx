/** @format */

import React from "react";
import MainPageLayout from "./MainPageLayout";
import GeSearchComponent from "../components/geComponents/GeSearchComponent";

const GeSearchPage = () => {
  return (
    <MainPageLayout pageTitle="Grand Exchange">
      <GeSearchComponent isResultsPage={false} />
    </MainPageLayout>
  );
};

export default GeSearchPage;
