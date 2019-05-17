import React from 'react'

export default function Player({url , title}){
    return(
            <iframe
            src={`https://wcs5-eu.flashphoner.com:8888/embed_player?urlServer=&streamName=${url}&mediaProviders=WebRTC,Flash,MSE,WSPlayer`}
            marginWidth='0'
            marginHeight='0'
            frameBorder='0'
            scrolling='no'
            allowFullScreen='allowfullscreen'
            title={title}
                   >
            </iframe>
    )
}
//width='100%'
//height='100%'