/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/api/api";
import { Country } from "@/types/country";
import { useState, useEffect } from "react";

export function useCountry() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all countries
  const fetchCountries = async () => {
    try {
      const data = await api({ endpoint: "/all?fields=flags,name,region" });
      setCountries(data);
    } catch (err: any) {
      setError(err.message || "Error fetching countries");
    } finally {
      setLoading(false);
    }
  };

  // Fetch details of a specific country by name
  const fetchCountryDetails = async (countryName: string) => {
    setLoading(true);
    try {
      const data = await api({
        endpoint: `/name/${countryName}?fullText=true`,
      });
      setCountry(data && data[0]);
    } catch (err: any) {
      setError(err.message || "Error fetching country details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const searchCountries = async (countryName: string, continent?: string) => {
    if (!countryName && continent === "All Continents") {
      fetchCountries();
      return;
    }

    try {
      let endpoint = `/name/${countryName}`;
      if (!countryName && continent !== "All Continents") {
        endpoint = `/region/${continent}`;
      }

      const data = await api({ endpoint });

      if (continent && continent !== "All Continents") {
        const filteredData = data.filter(
          (country: any) => country.region === continent,
        );
        setError(null);
        setCountries(filteredData);
        return;
      }
      setError(null);
      setCountries(data);
    } catch (err: any) {
      setError(err.message || "Error fetching countries");
    } finally {
      setLoading(false);
    }
  };

  return {
    countries,
    country,
    fetchCountryDetails,
    searchCountries,
    loading,
    error,
  };
}
