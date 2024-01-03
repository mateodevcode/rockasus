import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [themma, setThemma] = useState("light");

  const onclickThemma = () => {
    if (themma == "dark") {
      setThemma("light");
    } else {
      setThemma("dark");
    }
  };

  return (
    <AuthContext.Provider
      value={{ themma, onclickThemma }}
    >
      {children}
    </AuthContext.Provider>
  );
};
