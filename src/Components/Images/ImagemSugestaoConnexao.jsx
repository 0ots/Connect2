import style from './imagemSugestaoConnexao.module.css'
import Imagem from '../../Images/íconeSugestão.png'
export default function imagem(){
    return(
        <div className={style.container}>
            <img src={Imagem} className={style.imagem} alt='Imagem Sugestão Connexão'></img>
            <span className={style.sugestao}>Sugestões</span>
        </div>
    )
}