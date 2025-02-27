'use client'
import { useCountry } from "@/hooks/useCountry";
import Table from "@/components/Table/Table";

export default function Dashboard() {
  const { countries, loading, error } = useCountry();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Country List</h1>
      <div className="overflow-x-auto">
        <Table data={countries} />
      </div>
    </div>
  );
}