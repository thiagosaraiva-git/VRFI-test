import { Country } from "@/types/country";
import Image from "next/image";

interface TableProps {
  data: Country[];
}

const Table = ({ data }: TableProps) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="overflow-x-auto">
        <div className="w-full">
          <div className="flex text-secondary-dark mb-4 ml-12 space-x-4">
            <div className="py-2 text-left w-1/4">Country Identifier</div>
            <div className="py-2 text-left w-1/4">Country</div>
            <div className="pl-9 py-2 text-left w-1/4">Continent</div>
          </div>

          {data.length === 0 ? (
            <div className="text-center text-secondary-dark py-4">
              No data found
            </div>
          ) : (
            data.map((country, index) => (
              <div
                key={index}
                className="flex bg-white font-semibold shadow-light hover:shadow-dark hover:cursor-pointer rounded-[20px] mb-4 p-4 space-x-12 items-center"
              >
                <div className="flex items-center w-1/4">
                  <div className="w-12 h-12 rounded-full bg-secondary-light flex justify-center items-center ml-12">
                    <Image
                      src={country.flags.png}
                      alt={country.name.common}
                      width={30}
                      height={20}
                    />
                  </div>
                </div>

                <div className="w-1/4 text-secondary-dark flex">
                  {country.name.common}
                </div>

                <div className="w-1/4 text-secondary-dark flex">
                  {country.region}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
