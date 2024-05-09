import style from './imagemTerceiraSugestao.module.css'
import Imagem from '../../Images/fotoSugestao3.png'
import Icone from '../../Images/buttonAddUser.png'
export default function imagem(){
    return(
        <div className={style.container}>
            <img src={Imagem} alt="Imagem Primeira Sugestão" />
            <span className={style.nomeSugestao}>Sarah Campelo</span>
            <img src={Icone} className={style.iconeAdicionarSugestao} alt="Ícone Add Usuário" />
        </div>
    )
}