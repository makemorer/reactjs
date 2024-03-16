import React, {useContext} from 'react'
import {UserContext, ChannelContext} from './HookUseContext'

export default function  ComponentC(){

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return(
        <>
            I am {user} and I am a developer @ {channel}
        </>
    )
}