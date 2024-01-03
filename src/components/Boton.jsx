import { useAuth } from "../context/useContext"

const Boton = () => {
    const { themma } = useAuth()
  
    return (
    <div className={`${themma == "light" ? "bg-black text-white hover:bg-slate-700" : "bg-gray-100 text-black hover:bg-gray-300"} px-3 py-1 rounded-md mx-4 cursor-pointer font-semibold text-sm`}>
        Empezar
    </div>
  )
}

export default Boton