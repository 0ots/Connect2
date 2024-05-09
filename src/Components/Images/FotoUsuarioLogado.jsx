import style from './fotoUsuarioLogado.module.css'
import Image from '../../Images/foto.png'

export default function image(){
    return(
        <img src={Image} className={style.fotoUsuarioLogado} alt='Foto de Perfil do Usuário Logado'></img>

    )
}