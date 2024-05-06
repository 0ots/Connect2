import style from './imagemAjustes.module.css'
import ImagemAjustes from '../../Images/íconeAjustes.png'
export default function imagem(){
    return(
        <img src={ImagemAjustes} className={style.imagemAjustes} alt='Imagem Ajustes'></img>
    )
}