import { createContext, useState } from "react";
import { AppConfig, showConnect, UserSession } from "@stacks/connect";

const AuthProvider = createContext();

function AuthContextProvider({ children }) {
  const appConfig = new AppConfig(["store_write", "publish_data"]);
  const userSession = new UserSession({ appConfig });

  // state
  const [error, setError] = useState();

  // function
  const handleAuthenticate = function () {
    showConnect({
      appDetails: {
        name: "Timmesafe",
        icon: "",
      },
      redirectTo: "/hello",
      onCancel: function () {
        setError("It is closed");
      },
      onFinish: function () {
        setError("");
        console.log(userSession.loadUserData());
      },
    });
  };

  return (
    <AuthProvider.Provider value={{ handleAuthenticate, error }}>
      {children}
    </AuthProvider.Provider>
  );
}

export default { AuthContextProvider };
