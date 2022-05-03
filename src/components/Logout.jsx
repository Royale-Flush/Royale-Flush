// export default Logout;

import { logout } from "../api";
import useAuth from "../hooks/useAuth";

const Logout = () => {
  const { setIsLoggedIn } = useAuth();

  const handleClick = async () => {
    await logout();
    setIsLoggedIn(false);
  };

  return (
    <button className="logoutButton" onClick={handleClick}>
      Logout
    </button>
  );
};

export default Logout;
