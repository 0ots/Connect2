'use client'
import style from './buttonRegistrar.module.css'

export default function ButtonLogar(){
    const handleButtonLogarClick = () => {
        document.location.assign('/accountCreated')
    }
    return (
    <button className={style.buttonRegistrar} onClick={handleButtonLogarClick}>Cadastrar</button>
    )
}

