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
  }, [countryName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!country) return <p>Country not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-[40px] font-bold mb-4 text-primary">
        {country.name.common}
      </h1>
      <p className="text-secondary-dark mb-4">
        A short description about {country.name.common}
      </p>

      <div className="grid grid-cols-3 gap-8 text-secondary">
        <div className="flex flex-col items-center bg-white rounded-[20px] p-4 shadow-light">
          <p className="text-[16px] mb-2 text-left">Country Flag</p>
          <div className="w-32 h-32 overflow-hidden rounded-lg">
            <Image
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className="object-cover w-full h-full"
              width={128}
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
