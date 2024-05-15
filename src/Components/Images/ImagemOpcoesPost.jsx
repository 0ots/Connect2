import style from './imagemFoto.module.css'
import Imagem from '../../Images/íconeOpcoesPost.png'
export default function imagem(){
    return(
        <img src={Imagem} className={style.foto} alt='Image ícone opcões post'></img>
    )
}