import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
const Home = lazy(() => import("../pages/Home"));

const PageLoader = () => (
  <div className="flex items-center justify-center h-screen bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dc-red"></div>
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="*"
            element={<div className="p-20 text-center">404 Not Found</div>}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
