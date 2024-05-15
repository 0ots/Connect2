import style from './labelAjustes.module.css'

export default function Label(){
    function Ajustes(){
        document.location.assign('setts')
    }
    return (
        <>
            <span className={style.ajustes} onClick={Ajustes}>Ajustes</span>
        </>
    )
}