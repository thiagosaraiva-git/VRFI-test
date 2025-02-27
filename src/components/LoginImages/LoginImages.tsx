import Image from "next/image";

const LoginImages = () => {
  return (
    <div className="relative flex justify-center items-center w-full max-w-4xl mx-auto mt-20">
      <div className="relative w-full max-w-[900px]">
        <Image
          src="/login2.png"
          alt="App image"
          width={900}
          height={500}
          className="rounded-lg w-full h-auto"
        />

        <Image
          src="/login1.png"
          alt="App image"
          width={900}
          height={500}
          className="absolute top-40 left-16 w-full h-auto"
        />
      </div>
    </div>
  );
};

export default LoginImages;
