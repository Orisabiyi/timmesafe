import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./contexts/AuthContext";

import Dashboard from "./pages/Dashboard";
import LockToken from "./pages/LockToken";
import ViewLockTokens from "./pages/ViewLockTokens";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<LockToken />} />
            <Route path="lock-token" element={<LockToken />} />
            <Route path="lock-token/:id" element={<LockToken />} />
            <Route path="view-lock-token" element={<ViewLockTokens />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
