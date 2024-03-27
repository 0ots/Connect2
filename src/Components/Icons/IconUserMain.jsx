import { FaUser } from "react-icons/fa";
import style from './iconUserMain.module.css'

export default function Icon() {
    return (
        <div>
            <FaUser className={style.iconUserMain} id={style.idIconUserMain}/>
        </div>
    );
}