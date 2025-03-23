export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white shadow h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
      <ul className="space-y-2">
        <li>
          <a href="/dashboard/admin">Dashboard</a>
        </li>
        <li>
          <a href="/dashboard/admin/manage-users">Manage Users</a>
        </li>
      </ul>
    </aside>
  );
}
