import { useState } from "react";
import { useRouter } from "next/navigation";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Logging in with:", { email, password });
    router.push("/dashboard");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
}