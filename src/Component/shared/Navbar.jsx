"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { FaSearch } from "react-icons/fa";
import { Input } from "../UI/input";
import { Button } from "../UI/Button/Button";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const router = useRouter();

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    if (selectedRole === "employee") {
      router.push("/dashboard/employee");
    } else if (selectedRole === "admin") {
      router.push("/dashboard/admin");
    } else if (selectedRole === "super-admin") {
      router.push("/dashboard/superAdmin");
    }
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 py-4 bg-[#3E007C] text-white sticky top-0 z-10">
      {/* Logo */}
      <div className="text-xl font-bold">MyLogo</div>

      {/* Right side: Search input, Button, Role Dropdown */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 max-w-xs"
          />
        </div>

        <Button className="whitespace-nowrap">Apply leave</Button>

        <select
          value={role}
          onChange={handleRoleChange}
          className="border p-2 rounded "
        >
          <option value="">-- Choose a Role --</option>
          <option value="employee">employee</option>
          <option value="admin">Admin</option>
          <option value="super-admin">Super Admin</option>
        </select>
      </div>
    </nav>
  );
}
