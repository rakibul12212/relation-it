import EmployeeSidebar from "@/Component/sidebar/EmployeeSidebar";
import React from "react";

const employeeLayout = ({ children }) => {
  return (
    <div>
      <div className="flex min-h-screen">
        <EmployeeSidebar /> {/* Show your sidebar */}
        <main className="flex-1 bg-gray-50 p-4">{children}</main>
      </div>
    </div>
  );
};

export default employeeLayout;
