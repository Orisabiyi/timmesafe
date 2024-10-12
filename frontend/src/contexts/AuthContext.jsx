import { createContext } from "react";
import { AppConfig, UserSession } from "@stacks/connect";

const AuthProvider = createContext();

function AuthContext({ children }) {
  const appConfig = new AppConfig(["store_write", "publish_data"]);
  const userSession = new UserSession({ appConfig });
  console.log(userSession);

  return <AuthProvider.Provider value={{}}>{children}</AuthProvider.Provider>;
}

export default AuthContext;
