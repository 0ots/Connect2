import React from 'react'
import style from './connections.module.css'
import Birthday from '../../Components/Containers/Birthday'
import FriendSuggest from '../../Components/Containers/FriendSuggest'
import Navigator from '../../Components/Containers/Navigator'
import TemplatePage from '../TemplatePage/TemplatePage';
import ConectorsLink from '../../Components/Containers/ConectorLinks'
import InputProcurarConexxao from '../../Components/Inputs/InputProcurarConexxao'
import ConnectionSuggest from '../../Components/Containers/ConnectionsSuggest'
import LabelMostrarMais from '../../Components/Labels/LabelMostrarMais'

export default function Main() {

    return (
        <TemplatePage
            LeftContent={() => { return (<Navigator />) }}
            CenterContent={() => {
                return (
                    <div className={style.container}>
                        <div className={style.inputProcurarConexxao}>
                            <InputProcurarConexxao/>
                        </div>
                        <div className={style.sugestoes}>
                            <ConnectionSuggest/>
                        </div>
                        <div className={style.mostrarMais}>
                            <LabelMostrarMais/>
                        </div>
                    </div>)
            }}
            RigthContent={() => {
                return (
                    <>
                        <Birthday />
                        <FriendSuggest />
                        <ConectorsLink/>
                    </>
                )
            }}
        ></TemplatePage>
    )
}