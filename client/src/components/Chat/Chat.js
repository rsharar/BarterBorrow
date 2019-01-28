import React from 'react'


const Chat = props => {
    let history = props.chatHistory;
    

    return (
        <div>
            <ul id='messages'></ul>
        </div>
    )
}

export default Chat;