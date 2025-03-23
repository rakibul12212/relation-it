'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";


const Navbar = () => {
     const [role, setRole] = useState("");
     const router = useRouter();

     const handleRoleChange = (e) => {
       const selectedRole = e.target.value;
       setRole(selectedRole);

       if (selectedRole === "user") {
         router.push("/dashboard/user");
       } else if (selectedRole === "admin") {
         router.push("/dashboard/admin");
       } else if (selectedRole === "super-admin") {
         router.push("/dashboard/superAdmin");
       }
     };

    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Select Your Role</h1>
        <select
          value={role}
          onChange={handleRoleChange}
          className="border p-2 rounded text-gray-700"
        >
          <option value="">-- Choose a Role --</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="super-admin">Super Admin</option>
        </select>
      </div>
    );
};

export default Navbar;