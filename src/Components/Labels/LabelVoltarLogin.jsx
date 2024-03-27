import style from './labelVoltarLogin.module.css'

export default function label(){
    function voltarLogin(){
        document.location.assign('/')
    }
    return (
        <h4 className={style.labelVoltarLogin}> Voltar para <u id={style.idLabelVoltarLogin} onClick={voltarLogin}> login</u>
        </h4> 
    )
}