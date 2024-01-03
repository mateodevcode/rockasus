import imagePerfil from '../img/img-perfil.jpg'

const AvatarNav = () => {
  return (
    <div className='w-8'>
        <img className='object-cover rounded-full' src={imagePerfil} alt={`imagen de perfil`} />
    </div>
  )
}

export default AvatarNav