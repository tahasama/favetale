import React, { Suspense } from "react";
import ContentDistribution from "./(ContentDistribution)/ContentDistribution";
import ContentSubmissionTrends from "./(ContentSubmissionTrends)/ContentSubmissionTrends";
import StoreSalesChart from "./(StoreSalesChart)/StoreSalesChart";
import UserGrowth from "./(userGrowth)/UserGrowth";
import TotalUsers from "./TotalUsers";
import ContentSubmissions from "./ContentSubmissions";
import TotalSold from "./TotalSold";
import UserInreraction from "./UserInreraction";
import Loading from "./Loading";

export const revalidate = 3600;

const DashboardOverview = () => {
  return (
    <div id="dashboard" className="bg-tealLight min-h-screen w-full">
      <h2
        id="dashboard"
        className="text-2xl font-semibold my-4 indent-4 md:indent-5 lg:indent-8 xl:indent-10"
      >
        Dashboard Overview
      </h2>
      <div className="flex flex-col w-full gap-">
        <div className="flex flex-row flex-wrap w-full items-center gap-3 md:gap-4 mb-4 text-center justify-around scale-95">
          <div className="bg-emerald-400 p-1 md:p-3 rounded-lg shadow-lg w-52 xl:w-60 flex-grow">
            <h3 className="text-base md:text-lg font-semibold text-white">
              Total Users
              <Suspense fallback={<Loading />}>
                <TotalUsers />
              </Suspense>
            </h3>
          </div>
          {/* <div className="bg-sky-300 p-1 md:p-3 rounded-lg shadow-lg w-52 xl:w-60 flex-grow">
            <h3 className="text-base md:text-lg font-semibold text-white">
              Active Users
            </h3>
            <p className="text-lg md:text-2xl font-bold text-white">789</p>
          </div> */}
          <div className="bg-indigo-400 p-1 md:p-3 rounded-lg shadow-lg w-52 xl:w-60 flex-grow">
            <h3 className="text-base md:text-lg font-semibold text-white">
              Content Submissions
            </h3>
            <Suspense fallback={<Loading />}>
              <ContentSubmissions />
            </Suspense>
          </div>{" "}
          <div className="bg-sky-500 p-1 md:p-3 rounded-lg shadow-lg w-52 xl:w-60 flex-grow">
            <h3 className="text-base md:text-lg font-semibold text-white">
              Comments / Review / Answers
            </h3>
            <Suspense fallback={<Loading />}>
              <UserInreraction />
            </Suspense>
          </div>
          <div className="bg-purple-400 p-1 md:p-3 rounded-lg shadow-lg w-52 xl:w-60 flex-grow">
            <h3 className="text-base md:text-lg font-semibold text-white">
              Total Sold{" "}
            </h3>
            <Suspense fallback={<Loading />}>
              <TotalSold />
            </Suspense>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-around gap-5 p-3 scale-95">
          <div className="bg-indigo-50 rounded-lg shadow-lg lg:min-h-[60vh] lg:w-6/12 xl:w-6/12 md:scale-95 lg:scale-100 p-2">
            <h3 className="text-lg font-semibold text-slate-500">
              User Growth
            </h3>
            <Suspense fallback={<Loading />}>
              <UserGrowth />
            </Suspense>
          </div>
          <div className="bg-indigo-50 rounded-lg shadow-lg lg:min-h-[60vh] lg:w-6/12 xl:w-6/12 md:scale-95 lg:scale-100 p-2">
            <h3 className="text-lg font-semibold text-slate-500">
              Content Submission Trends
            </h3>
            <Suspense fallback={<Loading />}>
              <ContentSubmissionTrends />
            </Suspense>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-around gap-5 p-3 scale-95">
          {/* Content Type Distribution Chart */}
          <div className="bg-indigo-50 rounded-lg shadow-lg  lg:w-6/12 xl:w-6/12 md:scale-95 lg:scale-100 p-2">
            <h3 className="text-lg font-semibold text-slate-500">
              Content Type Distribution
            </h3>
            <div className="h-52 lg:h-96 grid place-items-center w-full">
              <Suspense fallback={<Loading />}>
                <ContentDistribution />
              </Suspense>
              {/* Store Sales and Revenue Chart */}
            </div>
          </div>
          <div className="bg-indigo-50 rounded-lg shadow-lg  lg:w-6/12 xl:w-6/12 md:scale-95 lg:scale-100 p-2">
            <h3 className="text-lg font-semibold text-slate-500">
              Store Sales and Revenue
            </h3>
            <Suspense fallback={<Loading />}>
              <StoreSalesChart />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
