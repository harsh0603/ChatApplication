import React from 'react'
import Add from '../images/add.png'
import Cam from '../images/cam.png'
import More from '../images/more.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Harsh</span>
        <div className="chatIcon">
          <img src={Add} alt="" />
          <img src={Cam} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat