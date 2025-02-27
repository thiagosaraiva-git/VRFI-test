import { Country } from '@/types/country';
import Image from 'next/image';

interface TableProps {
  data: Country[];
}

const Table = ({ data }: TableProps) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-primary-light">
          <thead>
            <tr className="bg-primary-dark text-secondary-light">
              <th className="border border-primary-light px-4 py-2 text-left">Country Identifier</th>
              <th className="border border-primary-light px-4 py-2 text-left">Country</th>
              <th className="border border-primary-light px-4 py-2 text-left">Continent</th>
            </tr>
          </thead>
          <tbody>
            {data.map((country, index) => (
              <tr key={index} className="odd:bg-secondary-light even:bg-primary-light">
                <td className="border border-primary-light px-4 py-2">
                  <Image src={country.flags.png} alt={country.name.common} width={30} height={20} />
                </td>
                <td className="border border-primary-light px-4 py-2 text-secondary-dark">{country.name.common}</td>
                <td className="border border-primary-light px-4 py-2 text-secondary-dark">{country.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;