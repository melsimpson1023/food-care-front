import React from 'react'
// import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import './scss/video-react.scss'

// import ifYouCanDreamImage from './IfYouCanDreamImage.jpg'
import Video from './Foodforthought.mp4'

// const buttonStyle = {
//  outline: 'none'
// }

const FoodForThought = () => (
  <div>
    <link rel="stylesheet" href="/scss/video-react.scss" />
    <Player
      playsInline
      src={Video}
    />
    <div>
      <p>
      Our Presentation
      </p>
    </div>
    <div>
      <a href='./Foodforthought.mp4'>
      </a>

    </div>
  </div>
)

export default FoodForThought
