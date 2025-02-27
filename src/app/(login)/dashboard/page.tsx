'use client'
import { useCountry } from "@/hooks/useCountry";
import Image from "next/image";

export default function Dashboard() {
  const { countries, loading, error } = useCountry();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Country List</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Country Identifier</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Country</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Continent</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country, index) => (
              <tr key={index} className="odd:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <Image 
                    src={country.flags.png} 
                    alt={country.name.common} 
                    width={30} 
                    height={20} 
                    layout="intrinsic"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">{country.name.common}</td>
                <td className="border border-gray-300 px-4 py-2">{country.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}