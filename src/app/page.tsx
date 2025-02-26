import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import SearchInput from "@/components/SearchInput/SearchInput";

export default function Home() {
  return (
    <div>
      <main className="mt-2 max-w-xl space-y-4">
        <Input placeholder="Email Address" type="text" />
        <Input placeholder="Password" type="password" />
        <SearchInput placeholder="Search" />

        <Button text="Log In" bgColor="bg-primary-dark" />
        <Button text="Sign up with Microsoft" disabled icon="microsoft" />
        <Button text="Sign up with Google" disabled icon="google" />
      </main>
    </div>
  );
}
