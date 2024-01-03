import { useAuth } from "../context/useContext";
import logo2 from "../../public/logo2.png";
import logo3 from "../../public/logo3.png";

const Logo = () => {
  const {themma} = useAuth();

  return (
    <div className="w-36">
      <img src={themma == "light" ? logo2 : logo3} />
    </div>
  );
};

export default Logo;
