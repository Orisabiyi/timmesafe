import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <main className="flex items-stretch min-h-screen">
      <aside className="w-1/5 h-screen">
        <ul>
          <li>Lock Tokens</li>
          <li>View Locked Tokens</li>
          <li>Claim Tokens</li>
          <li>Transfer Rights</li>
        </ul>
      </aside>
      <Outlet />
    </main>
  );
}

export default Dashboard;
