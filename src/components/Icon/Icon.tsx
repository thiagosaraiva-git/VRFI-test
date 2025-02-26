import microsoft from "@/icons/microsoft.svg";
import google from "@/icons/google.svg";
import Image from "next/image";

interface IconProps {
  data: "microsoft" | "google";
}

const Icon = ({ data }: IconProps) => {
  return (
    <Image
      src={data === "microsoft" ? microsoft : google}
      alt={data}
      className="w-6 h-6"
    />
  );
};

export default Icon;
