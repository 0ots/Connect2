import { FaHome } from "react-icons/fa";
import style from './iconHomeMain.module.css'

export default function Icon() {
    return (
        <div>
            <FaHome className={style.iconMain} id={style.idIconHome}/>
        </div>
    );
}