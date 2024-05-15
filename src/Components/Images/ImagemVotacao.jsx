import style from './imagemVotacao.module.css'
import Imagem from '../../Images/íconeVotação.png'
export default function imagem(){
    return(
        <img src={Imagem} className={style.votacao} alt='Image ícone votação'></img>
    )
}