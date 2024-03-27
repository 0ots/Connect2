'use client'
import style from './labelHomeMain.module.css'

export default function label(){
    function handleLabelClick(){
        window.location.assign('/main')
    }
    function mudarTema(){
        
    }
    return(
        <span className={style.labelHomeMain} onClick={mudarTema}>Menu Principal</span>
    )
}