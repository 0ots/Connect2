import style from './imagemMeuPerfil.module.css'

import Imagem from '../../Images/íconePerfil.png'

export default function imagem(){
    return(
        <img src={Imagem} className={style.imagemMeuPerfil} alt='Ícone Perfil'></img>
    )
}