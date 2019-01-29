import React from 'react'


const Chat = props => {
    let history = props.chatHistory;

    $(function () {
        let socket = io();
        $('form').submit(function (e) {
            e.preventDefault(); // prevents page reloading
            socket.emit('chat message', $('#compose').val());
            $('#compose').val('');
            return false;
        });
        socket.on('chat message', function (msg) {
            $('#messages').append($('<li>').text(msg));
        });
    });

    return (
        <div>
            <ul id='messages'></ul>
            <form action="">
                <input id="compose" autocomplete="off" /><button>Send</button>
            </form>
        </div>
    )
}

export default Chat;