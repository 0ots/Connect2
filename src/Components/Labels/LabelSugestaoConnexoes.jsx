import style from './labelSugestaoConnexoes.module.css'
import FotoPrimeiraSugestao from '../../Components/Images/FotoUsuarioLogado'
import Icone from '../../Images/buttonAddUser.png'

export default function label(){
    return(
        <div className={style.sugestao}>
            <div className={style.foto}>
                <FotoPrimeiraSugestao/>
            </div>
            <div className={style.containerInformacoes}>
                <div className={style.nome}>
                    <span id={style.idNome}>Henrique Silveira</span>
                </div>
            <div className={style.cidade}>
                <span className={style.opacidadeAtiva}>Belo Horizonte - MG</span>
            </div>
            <div className={style.universidade}>
                <span className={style.opacidadeAtiva}>UFGM - Universidade federal de Minas Gerais</span>
            </div>
            <div className={style.amigosEmComum}>
                <span className={style.opacidadeAtiva}>13 amigos em comum</span>
            </div>
            </div>
            <div className={style.buttonAdd}>
                <img src={Icone} className={style.iconeAdicionarSugestao} alt="Ícone Add Usuário" />
            </div>   
        </div>
    )
}