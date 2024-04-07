import { LuConstruction } from "react-icons/lu";
import style from './iconDevelopment.module.css'

export default function Icon(){
    return (
        <div>
            <LuConstruction className={style.construcao} id={style.idConstrucao}/>
        </div>
    )
}