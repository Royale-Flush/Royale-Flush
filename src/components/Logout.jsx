import { logout } from "../api";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
    await logout();
    setIsLoggedIn(false);
    navigate("/");
  };

  return <button onClick={handleClick}>Logout</button>;
};

export default Logout;
