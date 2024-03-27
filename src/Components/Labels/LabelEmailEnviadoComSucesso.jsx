import style from './labelEmailEnviadoComSucesso.module.css'

export default function label(){
    return(
        <>
            <h1 className={style.emailEnviadoComSucesso} id={style.idEmailEnviadoComSucesso}>E-mail enviado com sucesso</h1>
        </>
    )
}