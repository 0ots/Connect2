import { FaEye } from "react-icons/fa";
import style from './iconOlhoAbertoLogar.module.css'

export default function Icon() {
    return (
        <div>
            <FaEye className={style.iconEmailLogar} id={style.idIconOlhoAberto}/>
        </div>
    );
}