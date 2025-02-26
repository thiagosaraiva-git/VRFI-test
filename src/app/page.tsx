import Input from "@/components/Input";

export default function Home() {
  return (
    <div className="">
      <main>
        <Input placeholder="Email Address" type="text" />
        <Input placeholder="Password" type="password" />
      </main>
    </div>
  );
}
