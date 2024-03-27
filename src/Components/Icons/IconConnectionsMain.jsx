import { FaUsers } from "react-icons/fa";
import style from './iconConnectionsMain.module.css'

export default function Icon() {
    return (
        <div>
            <FaUsers className={style.iconUserMain} id={style.idIconUserMain}/>
        </div>
    );
}