"use client";
import { useCountry } from "@/hooks/useCountry";
import Table from "@/components/Table/Table";
import SearchInput from "@/components/SearchInput/SearchInput";
import Select from "@/components/Select/Select";
import { useState } from "react";

export default function Dashboard() {
  const { countries, searchCountries, loading, error } = useCountry();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [continent, setContinent] = useState<string>("All Continents");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    searchCountries(value, continent);
  };

  const handleSelectChange = (continent: string) => {
    setContinent(continent);
    searchCountries(searchQuery, continent);
  };

  return (
    <div className="mx-auto p-4 md:ml-52">
      <h1 className="text-[40px] font-bold mb-4 text-primary">Countries</h1>
      <p className="text-secondary-dark mb-4">
        A database of the countries of the world
      </p>

      <div className="flex items-center gap-4 max-w-[36rem] mb-4">
        <Select
          options={[
            "All Continents",
            "Africa",
            "Americas",
            "Asia",
            "Europe",
            "Oceania",
          ]}
          onChange={handleSelectChange}
        />
        <SearchInput placeholder="Search" onChange={handleSearchChange} />
      </div>

      <div className="overflow-x-auto">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!error && !loading && <Table data={countries} />}
      </div>
    </div>
  );
}
