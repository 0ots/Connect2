import style from './buttonPostarPost.module.css'

export default function button(){
    function handleButtonClick(){
        alert('Seu post foi publicado com sucesso')
    }
    return(
        <button className={style.buttonPostar} onClick={handleButtonClick}>Postar</button>
    )
}