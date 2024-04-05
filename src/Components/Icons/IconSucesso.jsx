import style from './iconSucesso.module.css'
import { MdDone } from "react-icons/md";

export default function icon(){
    return(
        <>
            <MdDone className={style.EmailEnviadoComSucesso}/>
        </>
    )
}