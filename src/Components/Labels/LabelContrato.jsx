import style from './labelContrato.module.css'

export default function Label(){
    return (
        <>
            <span className={style.termos}>Ao continuar você concorda com os <u id={style.termosClicavel}> Termos de serviço</u></span>
        </>
    )
}