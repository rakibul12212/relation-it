export default function UserSidebar() {
  return (
    <aside className="w-64 bg-white shadow h-screen p-4">
      <h2 className="text-xl font-bold mb-4">User Menu</h2>
      <ul className="space-y-2">
        <li>
          <a href="/dashboard/user">Dashboard</a>
        </li>
        <li>
          <a href="/dashboard/user/tasks">Tasks</a>
        </li>
      </ul>
    </aside>
  );
}
