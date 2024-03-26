'use client'
import style from './labelCriarContaLogar.module.css'

export default function label(){
    return(
        <span className={style.labelCriarConta}>Não tem uma conta? <u id='criarConta'>Criar uma</u></span>
    )
} 
