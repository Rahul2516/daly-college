import React, { Suspense, lazy } from "react";
import Hero from "../components/sections/Hero";

const AboutGrid = lazy(() => import("../components/sections/AboutGrid"));
const Publications = lazy(() => import("../components/sections/Publications"));
const Announcements = lazy(
  () => import("../components/sections/Announcements"),
);
const CampusInfra = lazy(() => import("../components/sections/CampusInfra"));
const LatestNews = lazy(() => import("../components/sections/LatestNews"));
const Moments = lazy(() => import("../components/sections/Moments"));

const SectionLoader = () => (
  <div className="w-full h-96 bg-gray-50 animate-pulse" />
);

const Home = () => {
  return (
    <main>
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <AboutGrid />
        <Publications />
        <Announcements />
        <CampusInfra />
        <LatestNews />
        <Moments />
      </Suspense>
    </main>
  );
};

export default Home;
