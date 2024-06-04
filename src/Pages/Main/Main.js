import style from './main.module.css'

import InputProcurarConexxao from '../../Components/Inputs/InputProcurarConexxao'
import InputPostUsuario from '../../Components/Inputs/InputPostUsuario'
import LabelRecentes from '../../Components/Labels/LabelRecentes'

import AmountPost from '../../Components/Containers/AmountPost';

import ImagemConnectores from '../../Components/Images/ImagemConnectores'
import InputProcurarConnecotores from '../../Components/Inputs/InputProcurarConnectores'
import PrimeiroConnector from '../../Components/Labels/LabelPrimeiroConnector'
import SegundoConnector from '../../Components/Labels/LabelSegundoConnector'
import TerceiroConnector from '../../Components/Labels/LabelTerceiroConnector'
import QuartoConnector from '../../Components/Labels/LabelQuartoConnector'

import React from 'react'
import Birthday from '../../Components/Containers/Birthday'
import FriendSuggest from '../../Components/Containers/FriendSuggest'
import Navigator from '../../Components/Containers/Navigator'


export default function Main() {

    return (
        <>
            <body id={style.Main}>
                <div className={style.containerCentral}>
                    <Navigator />
                    <div className={style.centro}>
                        <div className={style.teste}>
                            <div className={style.inputProcurarConexxao}>
                                <InputProcurarConexxao />
                            </div>
                            <div className={style.inputPostUsuario}>
                                <InputPostUsuario />
                            </div>
                            <div className={style.labelRecentes}>
                                <LabelRecentes />
                            </div>
                            <AmountPost />
                        </div>
                    </div>





                    <div className={style.abaLateralDireita}>

                        <Birthday />
                        <FriendSuggest />


                        <div className={style.containerConnectores}>
                            <div>
                                <ImagemConnectores />
                            </div>
                            <div className={style.divisoriadireita}>

                            </div>
                            <div className={style.inputProcurar}>
                                <InputProcurarConnecotores />
                            </div>
                            <div className={style.primeiroConnector}>
                                <PrimeiroConnector />
                            </div>
                            <div className={style.segundoConnector}>
                                <SegundoConnector />
                            </div>
                            <div className={style.terceiroConnector}>
                                <TerceiroConnector />
                            </div>
                            <div className={style.quartoConnector}>
                                <QuartoConnector />
                            </div>
                        </div>

                    </div>

                </div>


            </body>
        </>
    )
}