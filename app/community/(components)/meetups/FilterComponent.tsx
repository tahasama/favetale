"use client";
import React, { useState } from "react";
import MeetupCard from "./MeetupCard";

const FilterComponent = ({ meetupsData }: any) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>(meetupsData);

  const handleSearch = () => {
    const filteredMeetups = meetupsData.filter((meetup: any) => {
      const meetupLocation = meetup.location;
      const criteriaMatch =
        (!country ||
          meetupLocation.country
            .toLowerCase()
            .includes(country.toLowerCase())) &&
        (!city ||
          meetupLocation.city.toLowerCase().includes(city.toLowerCase())) &&
        (!zipCode ||
          meetupLocation.zipCode
            .toLowerCase()
            .includes(zipCode.toLowerCase())) &&
        (!date || meetup.startDate.includes(date));

      return criteriaMatch;
    });

    setSearchResults(filteredMeetups);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-1 p-6 ">
        <div>
          <label
            htmlFor="country"
            className="text-gray-600 font-semibold block"
          >
            Country:
          </label>
          <input
            type="text"
            id="country"
            placeholder="Enter Country"
            className="border rounded py-2 px-3 w-full"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="city" className="text-gray-600 font-semibold block">
            City:
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter City"
            className="border rounded py-2 px-3 w-full"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="zipCode"
            className="text-gray-600 font-semibold block"
          >
            ZIP Code:
          </label>
          <input
            type="text"
            id="zipCode"
            placeholder="Enter ZIP Code"
            className="border rounded py-2 px-3 w-full"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="text-gray-600 font-semibold block"
          >
            Address:
          </label>
          <input
            type="text"
            id="address"
            placeholder="Enter Address"
            className="border rounded py-2 px-3 w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="date" className="text-gray-600 font-semibold block">
            Date:
          </label>
          <input
            type="date"
            id="date"
            placeholder="Enter Date"
            className="border rounded py-2 px-3 w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="col-span-full">
          <button
            onClick={handleSearch}
            className="bg-violet-600 hover:bg-violet-700  text-white text-lg font-bold py-2 px-0  rounded w-full sm:w-[18%] shadow-slate-700 shadow-md hover:animate-bounceQ active:animate-bounceQ"
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {searchResults?.map((meetup: any, index: any) => (
          <>
            <MeetupCard meetup={meetup} />
          </>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
