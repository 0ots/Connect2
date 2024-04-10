import { CiSearch } from "react-icons/ci";
import style from './iconProcurar.module.css'

export default function Icon() {
    return (
        <div>
            <CiSearch className={style.iconSearch} id={style.idIconSearch}/>
        </div>
    );
}