"use client";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import LoginImages from "@/components/LoginImages/LoginImages";
import { useLogin } from "@/hooks/useLogin";

export default function Login() {
  const { email, setEmail, password, setPassword, handleLogin } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full flex flex-col xl:flex-row bg-white overflow-hidden">
        <div className="w-full max-w-[40rem] p-10 flex flex-col justify-center space-y-6 mx-auto">
          <h1 className="text-3xl font-bold text-primary-dark">
            Welcome back!
          </h1>
          <p className="text-secondary">
            Learn all about the countries of the world
          </p>

          <div className="flex flex-row gap-4">
            <Button text="Sign up with Microsoft" disabled icon="microsoft" />
            <Button text="Sign up with Google" disabled icon="google" />
          </div>

          <div className="my-6 h-[1px] w-full bg-secondary" />

          <Input
            placeholder="Email Address"
            type="text"
            value={email}
            onChange={setEmail}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <Button
            text="Log In"
            bgColor="bg-primary-dark"
            onClick={() => handleLogin()}
          />

          <p className="text-secondary-dark">
            Don&apos;t have an account?{" "}
            <span className="text-primary-dark cursor-pointer">Sign in</span>
          </p>
        </div>

        <div className="hidden xl:flex w-1/2 min-h-screen bg-gradient text-white flex-col p-20 rounded-[40px]">
          <div className="space-y-6 mt-10">
            <h1 className="text-4xl font-bold">The simplest way to track and manage  your geographical data</h1>
            <p className="text-xl mt-4">
              Enter your credentials and access your account
            </p>
          </div>
          <div className="items-center justify-center">
           <LoginImages />
          </div>
        </div>
      </div>
    </div>
  );
}
