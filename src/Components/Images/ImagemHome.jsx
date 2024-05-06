import style from './imagemHome.module.css'

import Imagem from '../../Images/íconePaginaInicial.png'

export default function imagem(){
    return(
        <img src={Imagem} className={style.imagemHome} alt='Ícone Home'></img>
    )
}