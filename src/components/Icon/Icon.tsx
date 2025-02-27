import Image from "next/image";

interface IconProps {
  data: "microsoft" | "google";
}

const Icon = ({ data }: IconProps) => {
  return (
    <Image
      src={`/icons/${data}.svg`}
      alt={data}
      className="w-6 h-6"
      width={24}
      height={24}
    />
  );
};

export default Icon;
