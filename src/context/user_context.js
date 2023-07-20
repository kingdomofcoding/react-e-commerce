import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [myUser, setMyUser] = useState(false);
  const { loginWithRedirect, logout, user } = useAuth0();
  useEffect(() => {
    setMyUser(user);
  }, [user]);
  return (
    <UserContext.Provider value={{ logout, user, loginWithRedirect, myUser }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
