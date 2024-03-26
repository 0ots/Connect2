import { FaUser } from "react-icons/fa";
import style from './iconUser.module.css'

export default function Icon() {
    return (
        <div>
            <FaUser className={style.iconUser} id={style.idIconUser}/>
        </div>
    );
}