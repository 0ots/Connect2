'use client'
import { useState } from 'react'; // Importe o useState
import style from './inputSenha.module.css'
import IconLockLogar from '../Icons/IconLockLogar.jsx'
import IconEyeOpen from '../Icons/IconOlhoAbertoLogar.jsx'
import IconEyeClose from '../Icons/IconOlhoFechadoLogar.jsx'

export default function InputSenhaLogar(){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Estado para controlar a visibilidade da senha

    function handleIconClick(){
        setIsPasswordVisible(prevState => !prevState); // Inverte o estado de visibilidade da senha quando o ícone é clicado
    }

    return (
        <div className={style.inputSenhaContainer}>
            <div className={style.iconWrapper}>
                <IconLockLogar/>
            </div>
            <input className={style.inputSenhaLogar} id={style.idInputSenha} type={isPasswordVisible ? "text" : "password"} placeholder='Insira sua senha'/>
            <div className={style.iconWrapperEyeOpen} id={style.idIconWrapperEyeOpen} onClick={handleIconClick}>
                {isPasswordVisible ? <IconEyeClose/> : <IconEyeOpen/>} {/* Renderiza o ícone correspondente com base no estado */}
            </div>
        </div>
    )
}
