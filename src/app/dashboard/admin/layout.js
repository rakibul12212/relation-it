import AdminSidebar from "@/Component/sidebar/AdminSidebar";


const adminLayout = ({ children }) => {
  return (
   
      <div className="flex min-h-screen">
        <AdminSidebar /> {/* Show your sidebar */}
        <main className="flex-1 bg-gray-50 p-4">{children}</main>
      </div>
    
  );
};

export default adminLayout;
