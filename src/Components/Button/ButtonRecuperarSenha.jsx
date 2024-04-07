import style from './buttonRecuperarSenha.module.css'

export default function input(){
    function handleLabelClick(){
        document.location.assign('/linksended')
      }
    return(
        <button className={style.inputButtonRecuperarSenha} id={style.idInputButtonRecuperarSenha} onClick={handleLabelClick}>Enviar Link</button>
    )
}