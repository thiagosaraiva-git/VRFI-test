/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/api/api";
import { Country } from "@/types/country";
import { useState, useEffect } from "react";

export function useCountry() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    fetchCountries();
  }, []);

  const searchCountries = async (query: string) => {
    if (!query) {
      fetchCountries();
      return;
    }
    try {
      const data = await api({ endpoint: `/name/${query}` });
      setError(null);
      setCountries(data);
    } catch (err: any) {
      setError(err.message || "Error fetching countries");
    } finally {
      setLoading(false);
    }
  };

  return { countries, searchCountries, loading, error };
}
