import style from './fotoUsuarioMeuPerfil.module.css'
import Image from '../../Images/fotoPerfil160.png'

export default function image(){
    return(
        <div className={style.divFotoNome}>
            <img src={Image} className={style.fotoUsuarioLogado} id={style.idFoto} alt='Foto de Perfil'></img>
            <span className={style.nome}>Pedro Silva</span>
        </div>
    )
}