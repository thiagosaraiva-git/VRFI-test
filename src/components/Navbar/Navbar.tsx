import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-auto bg-white text-primary-dark flex flex-col fixed h-full text-[16px]">
      <div className="flex items-center justify-start p-6">
        <Image
          src="/avatar.png"
          alt="User Avatar"
          width={40.63}
          height={40.63}
          className="rounded-full"
        />
        <div className="ml-4 space-x-0">
          <div className="font-semibold">Brian Johnson</div>
          <p className="text-sm">Edit Profile</p>
        </div>
      </div>
      <div className="flex items-center justify-start p-6 mt-4 rounded-lg">
        <div className="relative bg-primary-light rounded-full w-12 h-12 flex items-center justify-center">
          <Image
            src="/icons/map.svg"
            alt="Countries"
            width={20}
            height={20}
            className="text-white"
          />
        </div>
        <div className="ml-4 text-lg font-semibold">Countries</div>
      </div>
      <div className="absolute bottom-6 w-full text-center">
        <Link
          href="/"
          className="font-semibold flex items-center justify-center"
        >
          <div className="relative bg-secondary-light rounded-full w-12 h-12 flex items-center justify-center">
            <Image
              src="/icons/logout.svg"
              alt="Logout"
              width={20}
              height={20}
              className="text-white"
            />
          </div>
          <div className="ml-4">Logout</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
