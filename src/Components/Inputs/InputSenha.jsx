'use client'
import style from './inputSenha.module.css'
import IconLockLogar from '../Icons/IconLockLogar.jsx'

export default function InputSenhaLogar(){
    return (
        <div className={style.inputSenhaContainer}>
            <div className={style.iconWrapper}>
                <IconLockLogar/>
            </div>
            <input className={style.inputSenhaLogar} id={style.idInputSenha} type="text" placeholder='Insira sua senha'/>
        </div>
    )
}
