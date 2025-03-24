export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-500 shadow h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
      <ul className="space-y-2">
        <li>
          <a href="/dashboard/admin">Dashboard</a>
        </li>
        <li>
          <a href="/dashboard/admin/manage-employees">Manage employees</a>
        </li>
      </ul>
    </aside>
  );
}
