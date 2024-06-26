import React from 'react'
import Birthday from '../../Components/Containers/Birthday'
import FriendSuggest from '../../Components/Containers/FriendSuggest'
import Navigator from '../../Components/Containers/Navigator'
import TemplatePage from '../TemplatePage/TemplatePage';
import ConectorsLink from '../../Components/Containers/ConectorLinks'
import Sets from '../../Components/Containers/Sets'


export default function Main() {

    return (
        <TemplatePage
            LeftContent={() => { return (<Navigator />) }}
            CenterContent={() => {
                return (
                    <><Sets/></>)
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