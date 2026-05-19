import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
        
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
     <div className="flex-1 flex flex-col overflow-y-auto">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;