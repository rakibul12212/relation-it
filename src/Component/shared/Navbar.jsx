"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Input } from "../UI/input";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";

const menuItems = [
  { key: "1", label: "Profile", path: "/dashboard/employee/profile" },
  { key: "2", label: "Settings", path: "/dashboard/employee/settings" },
  { key: "3", label: "Logout", path: "/" },
];

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const router = useRouter();

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    router.push(`/dashboard/${selectedRole}`);
  };

  const menu = {
    items: menuItems.map((item) => ({
      key: item.key,
      label: item.label,
      onClick: () => router.push(item.path),
    })),
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 py-4 bg-[#3E007C] text-white sticky top-0 z-10">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/">RelationIT</Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 max-w-xs"
          />
        </div>

        {/* Role Dropdown */}
        <div className="relative">
          <select
            value={role}
            onChange={handleRoleChange}
            className="appearance-none border border-gray-300 bg-[#3E007C] text-gray-200 py-2 px-4 pr-10 rounded-lg shadow-md focus:outline-none transition duration-200"
          >
            <option value="" disabled>
              -- Choose a Role --
            </option>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
            <option value="superAdmin">Super Admin</option>
          </select>
        </div>

        {/* Apply Leave Button with Tooltip */}
        <div className="relative group">
          <Link href="/dashboard/employee/leave" className="p-0">
            <IoBriefcaseOutline size={30} />
          </Link>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Apply Leave
          </div>
        </div>

        {/* User Avatar Dropdown - FIXED OVERLAPPING ISSUE */}
        <div className="relative z-50">
          <Dropdown menu={menu} trigger={["hover"]}>
            <Avatar
              size={48}
              icon={<UserOutlined />}
              className="cursor-pointer"
            />
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}
