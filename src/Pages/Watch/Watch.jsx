import React from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import './watch.scss'
const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
        <ArrowBackOutlinedIcon />
        Home
        </div>
      <video className='video' autoPlay progress controls src='https://media.istockphoto.com/id/490978204/video/time-lapse-sunrise-from-grand-canyon.mp4?s=mp4-640x640-is&k=20&c=Opsqcad_WNUTTUU1Ncwf7qSWmmFvWds73w290hWPbEQ='></video>
    </div>
  )
}

export default Watch

