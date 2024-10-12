import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <main>
      <aside>hello world</aside>
      <Outlet />
    </main>
  );
}

export default Dashboard;
