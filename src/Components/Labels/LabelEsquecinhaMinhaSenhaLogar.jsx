import style from './labelEsquecinhaMinhaSenhaLogar.module.css'

export default function label(){
    function esqueciMinhaSenha(){
        document.location.assign('/resetpassword')
    }
    return (
        <span className={style.esqueciMinhaSenha}><u id={style.idEsqueciMinhaSenha} onClick={esqueciMinhaSenha}>Esqueci minha senha</u></span>
    )
}