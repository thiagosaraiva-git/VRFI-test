import Navbar from "@/components/Navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-1 bg-secondary-light p-6 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
