import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full flex flex-col xl:flex-row bg-white overflow-hidden">
        
        <div className="w-full max-w-[50rem] p-10 flex flex-col justify-center space-y-6 mx-auto">
          <h1 className="text-3xl font-bold text-primary-dark">Welcome back!</h1>
          <p className="text-secondary">Learn all about the countries of the world</p>

          <div className="flex flex-row gap-4">
            <Button text="Sign up with Microsoft" disabled icon="microsoft" />
            <Button text="Sign up with Google" disabled icon="google" />
          </div>

          <div className="my-6 h-[1px] w-full bg-secondary-dark" />

          <Input placeholder="Email Address" type="text" />
          <Input placeholder="Password" type="password" />
          <Button text="Log In" bgColor="bg-primary-dark" onClick={() => handleLogin()} />
        </div>

        <div className="hidden xl:flex w-1/2 min-h-screen bg-gradient text-white flex-col p-10 rounded-[40px]">
        </div>
      </div>
    </div>
  );
}