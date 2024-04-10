import style from './iconSun.module.css'
import { IoSunny } from "react-icons/io5";

export default function icon(){
    return(
        <>
            <IoSunny className={style.iconSun} title='Ativar Modo Escuro'/>
        </>
    )
}