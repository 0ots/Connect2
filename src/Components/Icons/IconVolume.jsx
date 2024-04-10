import style from './iconVolume.module.css'
import { IoVolumeHigh } from "react-icons/io5";

export default function icon(){
    return(
        <>
            <IoVolumeHigh className={style.iconVolume} id={style.idIconVolume} title='Ativar Modo Volume'/>
        </>
    )
}