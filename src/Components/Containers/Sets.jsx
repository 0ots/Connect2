import style from './sets.module.css'
export default function row(){
    return (
        <div className={style.container}>
            <div className={style.row}>

            </div>

            <div className={style.AutenticacaoDoisFatores}>
                <div className={style.tituloAutenticacaoDoisFatores}>
                    <span>Autenticação de dois fatores</span>
                </div>
                <div className={style.opcoes}>
                    <div className={style.containerTelefone}>
                        <div className={style.botaoTelefone}>
                            <form class={style.options}>
                                <input type="radio" className={style.classOption} id="option1" name="option" onclick="selectOption(1)"></input>
                                <label for="option1" class="option"></label>
                            </form>
                        </div>
                        <div className={style.telefone}>
                            <div className={style.tituloTelefone}>
                                <span className={style.titulo}>Telefone (SMS)</span>
                            </div>
                            <div className={style.descricaoTelefone}>
                                <span className={style.descricao}>Um SMS será enviado para realizar a confirmação de login</span>
                            </div>
                        </div>
                    </div>

                    <div className={style.containerEmail}>
                        <div className={style.botaoEmai}>
                            <form class={style.options}>
                                <input type="radio" className={style.classOption} id="option1" name="option" onclick="selectOption(1)"></input>
                                <label for="option1" class="option"></label>
                            </form>
                        </div>

                        <div className={style.email}>
                            <div className={style.tituloEmail}>
                                <span className={style.titulo}>E-mail</span>
                            </div>
                            <div className={style.descricaoEmail}>
                                <span className={style.descricao}>Um e-mail será enviado para realizar a confirmação de login</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.alertaDeLogin}>
                <div className={style.tituloAlertaDeLogin}>
                    <span>Alerta de Login</span>
                </div>
                <div className={style.opcoes}>

                <div className={style.containerTelefone}>
                    <div className={style.botaoEmai}>
                        <form class={style.options}>
                            <input type="radio" className={style.classOption} id="option1" name="option" onclick="selectOption(1)"></input>
                            <label for="option1" class="option"></label>
                        </form>
                    </div>
                    <div className={style.telefone}>
                        <div className={style.tituloTelefone}>
                            <span className={style.titulo}>Telefone (SMS)</span>
                        </div>
                        <div className={style.descricaoTelefone}>
                            <span className={style.descricao}>Um SMS será enviado toda vez que você realizar um login</span>
                        </div>
                    </div>
                </div>

                    <div className={style.containerEmail}>
                        <div className={style.botaoEmai}>
                            <form class={style.options}>
                                <input type="radio" className={style.classOption} id="option1" name="option" onclick="selectOption(1)"></input>
                                <label for="option1" class="option"></label>
                            </form>
                        </div>
                        <div className={style.email}>
                        <div className={style.tituloEmail}>
                            <span className={style.titulo}>E-mail</span>
                        </div>
                        <div className={style.descricaoEmail}>
                            <span className={style.descricao}>Um e-mail será enviado toda vez que você realizar um login</span>
                        </div>
                    </div>
                    </div>
                    

                </div>
            </div>

            <div className={style.privacidade}>
                <div className={style.tituloPrivacidade}>
                    <span>Privacidade</span>
                </div>
                <div className={style.opcoes}>
                    
                    <div className={style.containerEmail}>
                        <form class={style.options}>
                            <input type="radio" className={style.classOption} id="option1" name="option" onclick="selectOption(1)"></input>
                            <label for="option1" class="option"></label>
                        </form>
                        <div className={style.publico}>
                            <div className={style.tituloPublico}>
                                <span className={style.titulo}>Público</span>
                            </div>
                            <div className={style.descricaoPublico}>
                                <span className={style.descricao}>Qualquer usuário poderá visualizar e interagir com suas publicações</span>
                            </div>
                        </div>
                    </div>

                    <div className={style.privado}>
                        <div className={style.containerEmail}>
                            <form class={style.options}>
                                <input type="radio" className={style.classOption} id="option1" name="option" onclick="selectOption(1)"></input>
                                <label for="option1" class="option"></label>
                            </form>
                            <div className={style.publico}>
                            <div className={style.tituloPublico}>
                                <span className={style.titulo}>Privado</span>
                            </div>
                            <div className={style.descricaoPublico}>
                                <span className={style.descricao}>Somente suas Connexões poderão acessar, visualizar, interagir e compartilhar suas publicações.</span>
                            </div>
                        </div>

                        </div>
                    </div>

                </div>
            </div>


            
            <div className={style.personalizacao}>
                <div className={style.tituloPrivacidade}>
                    <span>Personalização</span>
                </div>
                <div className={style.descricaoPrivacidade}>
                    <span className={style.descricao}>Gerencie os dados que a Connect 2 compartilha</span>
                </div>
                <div className={style.opcoes}>

                    <div className={style.primeiraOpcao}>
                        <div className={style.checkBox}>

                        </div>
                        <div className={style.descricao}>
                            <textarea name="" id="" className={style.textArea}>Uso de informações de sites que você acessa: permita que o Connect2 use dados de sites que você acessa para melhorar os anúncios no Pinterest. Saiba mais.</textarea>
                        </div>
                    </div>

                    <div className={style.segundaOpcao}>
                        <div className={style.checkBox}>

                        </div>
                        <div className={style.descricao}>
                            <textarea name="" id="" className={style.textArea}>Uso de informações dos parceiros: permita que o Connect2 use informações dos nossos parceiros para melhorar os anúncios que você vê no Connect2. Saiba mais.</textarea>
                        </div>
                    </div>

                    <div className={style.terceiraOpcao}>
                        <div className={style.checkBox}>

                        </div>
                        <div className={style.descricao}>
                            <textarea name="" id="" className={style.textArea}>Anúncios sobre o Connect2: permita que o Connect2 use sua atividade para melhorar os anúncios sobre o Connect2 que aparecem para você em outros sites ou aplicativos. Saiba mais.</textarea>
                        </div>
                    </div>

                    <div className={style.terceiraOpcao}>
                        <div className={style.checkBox}>

                        </div>
                        <div className={style.descricao}>
                            <textarea name="" id="" className={style.textArea}>Atividade para relatórios de anúncios: permita que o Connect2 compartilhe sua atividade para relatórios de desempenho de anúncios. Saiba mais.</textarea>
                        </div>
                    </div>


                </div>
            </div>


        </div>


    )
}