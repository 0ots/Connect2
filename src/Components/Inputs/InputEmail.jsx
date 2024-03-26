'use client'
import style from './inputEmail.module.css';
import IconEmailLogar from '../Icons/IconEmailLogar.jsx';

export default function InputEmailLogar() {
    return (
        <div className={style.inputEmailContainer}>
            <div className={style.iconWrapper}>
                <IconEmailLogar/>
            </div>
            <input className={style.inputEmail} id={style.idInputEmail} type="text" placeholder='Insira seu e-mail'/>
        </div>        
    );
}
