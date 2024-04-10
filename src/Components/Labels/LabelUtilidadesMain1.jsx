import style from './labelUtilidadesMain1.module.css'

export default function label(){
    return(
        <>
            <span className={style.spanItem}>Privacidade ° </span>
            <span className={style.spanItem}>Terno ° </span>
            <span className={style.spanItem}>Publicidade ° </span>
            <span className={style.spanItem}>Ads</span>
        </>
    )
}