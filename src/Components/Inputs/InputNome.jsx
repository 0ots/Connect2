'use client'
import style from './inputNome.module.css'
import IconUser from '../Icons/IconUser.jsx'

export default function label(){
    return (
            <div className={style.inputNomeContainer}>
                <div className={style.iconWrapper}>
                    <IconUser/>
                </div>
                <input className={style.inputNomeLogar} type="text" placeholder='Insira seu nome'/>
            </div>
    )
}


