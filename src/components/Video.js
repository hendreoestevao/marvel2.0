import React from 'react'
import videoBg from '../movies/videoBg.mp4';

export const Video = () => {
  return (
    <div className="movies">
    <video autoPlay loop muted>
    <source src={videoBg} />
    </video>
  </div>
  )
}


export default Video;