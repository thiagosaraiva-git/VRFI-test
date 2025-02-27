"use client";
import { useCountry } from "@/hooks/useCountry";
import Table from "@/components/Table/Table";
import SearchInput from "@/components/SearchInput/SearchInput";

export default function Dashboard() {
  const { countries, searchCountries, loading, error } = useCountry();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-[40px] font-bold mb-4 text-primary">Countries</h1>
      <p className="text-secondary-dark mb-4">
        A database of the countries of the world
      </p>

      <div className="flex mb-4 max-w-[18rem]">
        <SearchInput
          className="text-secondary-dark"
          placeholder="Search"
          onChange={(e) => searchCountries(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!error && !loading && <Table data={countries} />}
      </div>
    </div>
  );
}
