'use client'
import style from './labelHomeMain.module.css'

export default function label(){
    function Home(){
        document.location.assign('/main')
    }
    return(
        <span className={style.labelHomeMain} onClick={Home}>Página Inicial</span>
    )
}



