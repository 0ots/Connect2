'use client'
import style from './labelCriarContaLogar.module.css'

export default function label(){
    function handleLabelClick(){
        window.location.assign('/register')
    }
    return(
        <span className={style.labelCriarConta}>Não tem uma conta? <u id={style.idCriarConta} onClick={handleLabelClick}>Criar uma</u></span>
    )
} 
