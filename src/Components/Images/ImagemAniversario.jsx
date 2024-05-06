import style from './imagemAniversario.module.css'
import ImagemAniversario from '../../Images/íconeAniversariantes.png'
export default function imagem(){
    return(
        <img src={ImagemAniversario} className={style.ImagemAniversario} alt='Imagem Aniversário'></img>
    )
}