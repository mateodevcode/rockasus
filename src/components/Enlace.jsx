import { Link } from "react-router-dom"
import { useAuth } from "../context/useContext"

const Enlace = ({name, link}) => {
  const { themma } = useAuth()
  return (
    <Link to={link} className={`${themma == "light" ? "hover:bg-slate-100" : "hover:bg-slate-800"} py-1 rounded-md`}>
        <p className="mx-4 font-semibold">{name}</p>
    </Link>
  )
}

export default Enlace