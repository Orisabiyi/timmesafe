import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(
    function () {
      let address;
      try {
        address = sessionStorage.getItem("address");
      } catch (error) {
        address = null;
      }

      if (!address) navigate("/");
    },
    [navigate]
  );

  return (
    <main className="max-w-screen-xl mx-auto flex items-stretch min-h-screen">
      <aside className="w-1/5 h-screen px-10 py-16 text-dark-gray flex flex-col items-stretch">
        <figure className="mb-40 text-25">Timmesafe</figure>

        <ul className="flex flex-col items-stretch gap-8 text-16 mb-auto">
          <li className="border-b-2 border-dark-mint-green pb-4">
            <Link to="/dashboard/lock-token">Lock Tokens</Link>
          </li>
          <li className="border-b-2 border-dark-mint-green pb-4">
            <Link to="/dashboard/view-lock-token">View Locked Tokens</Link>
          </li>
          <li className="border-b-2 border-dark-mint-green pb-4">
            <Link to="/dashboard/claim-tokens">Claim Tokens</Link>
          </li>
          <li className="border-b-2 border-dark-mint-green pb-4">
            <Link to="/dashboard/transfer-rights">Transfer Rights</Link>
          </li>
        </ul>
        <p>&copy; copyrght.Timmesafe</p>
      </aside>
      <Outlet />
    </main>
  );
}

export default Dashboard;
