import style from './imagemAlterarTema.module.css'
import ImagemAlterarTema from '../../Images/íconeDarkMode.png'
export default function imagem() {
    return (
        <div>
            <img src={ImagemAlterarTema} className={style.imagemAlterarTema} alt='Imagem Alterar Tema' title='Alterar Tema'></img>
        </div>
    )
}