import style from './ConectorLinks.module.css'

import ImagemConnectores from '../Images/ImagemConnectores'
import InputProcurarConnecotores from '../Inputs/InputProcurarConnectores'
import PrimeiroConnector from '../Labels/LabelPrimeiroConnector'
import SegundoConnector from '../Labels/LabelSegundoConnector'
import TerceiroConnector from '../Labels/LabelTerceiroConnector'
import QuartoConnector from '../Labels/LabelQuartoConnector'

import React from 'react'
export default function ConectorsLink() {

    return (
        <div className={style.containerConnectores}>
            <div>
                <ImagemConnectores />
            </div>
            <div className={style.divisoriadireita}> </div>
            <InputProcurarConnecotores />
            <PrimeiroConnector />
            <SegundoConnector />
            <TerceiroConnector />
            <QuartoConnector />
        </div>
    )
}