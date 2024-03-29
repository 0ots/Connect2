import style from '../Labels/labelUtilidadesLogar.module.css'

export default function label(){
    return (
        <span className={style.utilidades}>
            <span className={style.spanItem}>Connect2</span>
            <span className={style.spanItem}>Sobre</span>
            <span className={style.spanItem}>Blog</span>
            <span className={style.spanItem}>Central de Ajuda </span>
            <span className={style.spanItem}>API</span>
            <span className={style.spanItem}>Privacidade</span>
            <span className={style.spanItem}>Acessibilidade</span>
            <span className={style.spanItem}>Termos</span>
            <span className={style.spanItem}>Localizações</span>
            <span className={style.spanItem}>Publicidade</span>
            <span className={style.spanItem}>Marketing</span>
        </span>
    )
}