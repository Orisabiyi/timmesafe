import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <main className="flex items-stretch">
      <aside className="w-1/3">hello world</aside>
      <Outlet />
    </main>
  );
}

export default Dashboard;
