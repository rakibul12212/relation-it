"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Breadcrumb from "../UI/Breadcrumb";

export default function EmployeeSidebar() {
  const pathname = usePathname(); // Current route path

  // Extract route segments for breadcrumbs
  const routeSegments = pathname.split("/").filter(Boolean);

  // Capitalize each segment
  const paths = routeSegments.map(
    (segment) =>
      segment
        .replace(/-/g, " ") // Handle kebab-case (if any)
        .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize first letter of each word
  );

  // Page title from last segment
  const title = paths.length > 0 ? `${paths[paths.length - 1]} ` : "Dashboard";

  // ✅ Updated Sidebar Menu Items
  const menuItems = [
    { name: "Dashboard", path: "/dashboard/employee" }, // Main employee dashboard
    { name: "Employees", path: "/dashboard/employee/employees" }, // ✅ Corrected path
    { name: "Company", path: "/dashboard/employee/company" },
    { name: "Calendar", path: "/dashboard/employee/calendar" },
    { name: "Leave", path: "/dashboard/employee/leave" },
    { name: "Reviews", path: "/dashboard/employee/reviews" },
    { name: "Reports", path: "/dashboard/employee/reports" },
    { name: "Manage", path: "/dashboard/employee/manage" },
    { name: "Settings", path: "/dashboard/employee/settings" },
    { name: "Profile", path: "/dashboard/employee/profile" },
  ];

  return (
    <aside className="max-w-72 shadow p-4 flex flex-col justify-between bg-white">
      <div>
        {/* Breadcrumb */}
        <div className="mb-6 rounded-md shadow-sm hover:shadow-md p-2">
          <Breadcrumb paths={paths} title={title} />
        </div>

        {/* Employee Profile */}
        <div className="flex flex-col items-center justify-center mb-6 rounded-md shadow-sm hover:shadow-md p-4 text-center">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="employee"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
          <h1 className="text-lg font-bold mt-2">Rakibul Islam</h1>
          <p className="text-sm text-gray-500">Sun, 29 Nov 2019</p>
        </div>

        {/* Navigation Menu */}
        <ul className="grid grid-cols-2  text-gray-700 text-base">
          {menuItems.map((item, index) => {
            const isActive =
              pathname === item.path || pathname.startsWith(item.path + "/");

            return (
              <li
                key={index}
                className={`rounded-md shadow-sm hover:shadow-md transition p-4 ${
                  isActive ? "bg-blue-100 text-blue-600 font-semibold" : ""
                }`}
              >
                <Link
                  href={item.path}
                  className="block p-3 text-center hover:text-blue-600 transition"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
