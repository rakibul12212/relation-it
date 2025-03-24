"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Breadcrumb from "../UI/Breadcrumb";

export default function SuperAdminSidebar() {
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

  const menuItems = [
    { name: "Dashboard", path: "/dashboard/admin" },
    { name: "Employees", path: "/dashboard/admin/employees" },
    { name: "Company", path: "/dashboard/admin/company" },
    { name: "Calendar", path: "/dashboard/admin/calendar" },
    { name: "Leave", path: "/dashboard/admin/leave" },
    { name: "Reviews", path: "/dashboard/admin/reviews" },
    { name: "Reports", path: "/dashboard/admin/reports" },
    { name: "Manage", path: "/dashboard/admin/manage" },
    { name: "Settings", path: "/dashboard/admin/settings" },
    { name: "Profile", path: "/dashboard/admin/profile" },
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaT_ZJ1PscPs0m7B0xx_gLUcM8WPjPw1uDol5_cog3HqI0LvNFXOeNTW6WTbiRAh0PDE&usqp=CAU"
            alt="super admin"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
          <h1 className="text-lg font-bold mt-2">Super Admin</h1>
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
