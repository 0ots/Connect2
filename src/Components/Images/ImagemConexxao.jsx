import style from './imagemConexxao.module.css'
import ImagemConexxao from '../../Images/íconeConnexões.png'
export default function imagem(){
    return(
        <img src={ImagemConexxao} className={style.conexxao} alt='Imagem Conexxão'></img>
    )
}