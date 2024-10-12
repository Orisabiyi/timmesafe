import { createContext, useContext, useState } from "react";
import { AppConfig, showConnect, UserSession } from "@stacks/connect";

const AuthProvider = createContext();

export function AuthContextProvider({ children }) {
  const appConfig = new AppConfig(["store_write", "publish_data"]);
  const userSession = new UserSession({ appConfig });

  // state
  const [error, setError] = useState();
  const [address, setAddress] = useState(function () {
    return JSON.parse(sessionStorage.getItem("address")) || "";
  });

  // function
  const handleAuthenticate = function () {
    console.log("Hello World");
    showConnect({
      appDetails: {
        name: "Timmesafe",
        icon: "",
      },
      redirectTo: "/hello",
      onCancel: function (err) {
        setError("It is closed");
      },
      onFinish: function () {
        setError("");

        const user = userSession.loadUserData();
        setAddress(user.profile.stxAddress.testnet);
      },
    });
  };

  return (
    <AuthProvider.Provider value={{ handleAuthenticate, error }}>
      {children}
    </AuthProvider.Provider>
  );
}

export function AuthContext() {
  const context = useContext(AuthProvider);
  return context;
}
