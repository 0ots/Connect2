'use client'
import style from './inputConfirmarSenha.module.css'
import IconCalendario from '../Icons/IconCalendario.jsx'

export default function InputSenhaLogar(){
    return (
        <div className={style.inputSenhaContainer}>
            <div className={style.iconWrapper}>
                <IconCalendario/>
            </div>
            <input className={style.inputSenhaLogar} type="date" title='Insira sua data de nascimento'/>
        </div>
    )
}