import style from './labelContrato.module.css'

export default function label(){
    return (
        <span className={style.termos}>Ao continuar você concorda com os <u id={style.termosClicavel}>Termos de serviço</u></span>
    )
}