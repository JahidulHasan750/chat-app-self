import React from 'react'
import SendMessage from '../component/SendMessage'
import Chatbubble from '../component/Chatbubble'
import Messages from '../component/Messages'

const Chat = () => {
  return (
    <div>
        <Messages></Messages>
       
        <SendMessage></SendMessage>
    </div>
  )
}

export default Chat