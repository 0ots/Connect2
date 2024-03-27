import { FaCog } from "react-icons/fa";
import style from './iconCogMain.module.css'

export default function Icon() {
    return (
        <div>
            <FaCog className={style.iconCogMain} id={style.idIconCogMain}/>
        </div>
    );
}