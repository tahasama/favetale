"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import Loading from "../dashboard/EventManagement/loading";
import SearchData from "./SearchData";

const Search = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("q");
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <SearchData q={search} />
      </Suspense>
    </div>
  );
};

export default Search;
