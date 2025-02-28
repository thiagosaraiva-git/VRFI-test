"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCountry } from "@/hooks/useCountry";
import Image from "next/image";

export default function CountryDetail() {
  const [countryName, setCountryName] = useState<string | null>(null);
  const { country, fetchCountryDetails, loading, error } = useCountry();
  const searchParams = useSearchParams();

  useEffect(() => {
    const name = searchParams.get("name");
    if (name) {
      setCountryName(name);
    }
  }, [searchParams]);

  useEffect(() => {
    if (countryName) {
      fetchCountryDetails(countryName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!country) return <p>Country not found</p>;

  return (
    <div className="mx-auto p-4 md:ml-52 ">
      <h1 className="text-[40px] font-bold mb-2 text-primary">
        {country.name.common}
      </h1>
      <p className="text-secondary-dark mb-8">
        A short description about {country.name.common}
      </p>

      <div className="grid grid-cols-3 gap-8 text-secondary">
        <div className="flex flex-col bg-white rounded-[20px] p-6 shadow-light">
          <p className="text-[16px] mb-6">Country Flag</p>
          <div className="overflow-hidden rounded-lg">
            <Image
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className="object-cover w-full h-full"
              width={256}
              height={128}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="bg-white rounded-[20px] p-6 shadow-light">
            <p className="text-[16px] mb-2">Population</p>
            <div className="text-[40px] text-primary">
              {country.population.toLocaleString()}
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-6 shadow-light">
            <p className="text-[16px] mb-2">Language</p>
            <div className="text-[40px] text-primary">
              {country.languages
                ? Object.values(country.languages).join(", ")
                : "N/A"}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="bg-white rounded-[20px] p-6 shadow-light">
            <p className="text-[16px] mb-2">Capital</p>
            <p className="text-[40px] text-primary">
              {country.capital ? country.capital[0] : "N/A"}
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-6 shadow-light">
            <p className="text-[16px] mb-2">Currency</p>
            <div className="text-[40px] text-primary">
              {country.currencies
                ? Object.values(country.currencies)
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .map((currency: any) => currency.name)
                    .join(", ")
                : "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
