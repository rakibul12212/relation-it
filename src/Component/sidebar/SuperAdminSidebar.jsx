export default function SuperAdminSidebar() {
  return (
    <aside className="w-64 bg-gray-500 shadow h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Super Admin</h2>
      <ul className="space-y-2">
        <li>
          <a href="/dashboard/super-admin">Dashboard</a>
        </li>
        <li>
          <a href="/dashboard/super-admin/settings">Settings</a>
        </li>
      </ul>
    </aside>
  );
}
