import { useAuth } from "../context/useContext";
import AvatarNav from "./AvatarNav";
import Enlace from "./Enlace";
import Logo from "./Logo";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import '../../src/index.css'
import Boton from "./Boton";

const BarraDeNavegacion = () => {
  const { themma, onclickThemma } = useAuth();

  return (
    <div className={`flex flex-row justify-between items-center ${themma}`}>
      <div className="mx-20">
        <Logo />
      </div>
      <div className="flex flex-row justify-between items-center mx-10">
        <Enlace link={"/"} name={"Aprende a programar"} />
        <Enlace link={"/"} name={"Mateo Dev"} />
        <Enlace link={"/"} name={"Blog"} />
        <Enlace link={"/"} name={"Company"} />
        <div>

        </div>
        <Boton />
        <div onClick={onclickThemma} className="mx-4 cursor-pointer">
          {themma == "dark" ? <BsSunFill /> : <BsMoonFill />}
        </div>
        <AvatarNav />
      </div>
    </div>
  );
};

export default BarraDeNavegacion;
