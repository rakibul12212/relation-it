import SuperAdminSidebar from "@/Component/sidebar/SuperAdminSidebar";

const adminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen ">
      <SuperAdminSidebar /> {/* Show your sidebar */}
      <main className="flex-1 bg-gray-50 p-4">{children}</main>
    </div>
  );
};

export default adminLayout;
