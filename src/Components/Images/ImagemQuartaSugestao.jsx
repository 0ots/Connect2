import style from './imagemQuartaSugestao.module.css'
import Imagem from '../../Images/fotoSugestao4.png'
import Icone from '../../Images/buttonAddUser.png'
export default function imagem(){
    return(
        <div className={style.container}>
            <img src={Imagem} alt="Imagem Quarta Sugestão" />
            <span className={style.nomeSugestao}>Luíza Campos</span>
            <img src={Icone} className={style.iconeAdicionarSugestao} alt="Ícone Add Usuário" />
        </div>
    )
}