import { createContext, useContext, useState } from "react";
import { AppConfig, showConnect, UserSession } from "@stacks/connect";
import { useNavigate } from "react-router-dom";

const AuthProvider = createContext();

export function AuthContextProvider({ children }) {
  const appConfig = new AppConfig(["store_write", "publish_data"]);
  const userSession = new UserSession({ appConfig });
  const navigate = useNavigate();

  // state
  const [error, setError] = useState();
  const [address, setAddress] = useState("");

  // function
  const handleAuthenticate = function () {
    console.log("Hello World");
    showConnect({
      appDetails: {
        name: "Timmesafe",
        icon: "",
      },
      onCancel: function (err) {
        setError("It is closed");
      },
      onFinish: function () {
        setError("");
        sessionStorage.removeItem("address");

        const user = userSession.loadUserData();
        setAddress(user.profile.stxAddress.testnet);
        sessionStorage.setItem("address", user.profile.stxAddress.testnet);

        navigate("/dashboard");
      },
    });
  };

  return (
    <AuthProvider.Provider value={{ handleAuthenticate, error, address }}>
      {children}
    </AuthProvider.Provider>
  );
}

export function AuthContext() {
  const context = useContext(AuthProvider);
  return context;
}
