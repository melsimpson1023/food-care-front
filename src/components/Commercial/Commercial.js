import React from 'react'
// import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import './scss/video-react.scss'

// import ifYouCanDreamImage from './IfYouCanDreamImage.jpg'
import Video from './videoplayback.mp4'

// const buttonStyle = {
//  outline: 'none'
// }

const Commercial = () => (
  <div>
    <link rel="stylesheet" href="/scss/video-react.scss" />
    <Player
      playsInline
      src={Video}
    />
    <div>
      <p>
      Commercial
      </p>
    </div>
    <div>
      <a href='./videoplayback.mp4'>
      </a>

    </div>
  </div>
)

export default Commercial
