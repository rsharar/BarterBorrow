import React from "react";
import io from "socket.io-client";
import axios from 'axios'

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            username: '',
            message: '',
            messages: [],
            room: ''
        };


        // const ownerID = props.owneruserid;
        // const ownerId;

        this.socket = io('localhost:' + ((process.env.PORT || 3001) + 1),{
            // query: 'r_var=private_room',
            // userA: 'r_var=',
            // proposalId: this.props.proposalId ? this.props.proposalId : null
            query: "r_var=" + this.props.proposalId ? this.props.proposalId : ''
            // proposal page makes api call to get proposal data and passes id to chat component
        });

        // var socket_connect = function (room) {
        //     return io('localhost:' + ((process.env.PORT || 3001) + 1), {
        //         query: 'r_var='+room
        //     });
        // }
        
        // var random_room = Math.floor((Math.random() * 2) + 1);
        // var socket      = socket_connect(random_room);
        
        // socket.emit('SEND_MESSAGE', 'hello room #'+random_room);

        this.socket.on('GET_ROOM', room => {
            console.log(room)
        })

        this.socket.on('RECEIVE_MESSAGE', function (data) {
            // console.log("FRONT END RECEIPT")
            // console.log(data)
            addMessage(data);
        });

        const addMessage = data => {
            // console.log(data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log("Message: ");
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({ message: '' });
            // console.log("FRONT END SEND")
        }
    }

    componentDidMount() {
        axios.get('/auth/user').then(response => {
            if (!!response.data.user) {
                if (response.data.user.firstName) {
                    // google firstname
                    this.setState({
                        username: response.data.user.firstName
                    })
                    this.setState({
                        userId: response.data.user
                    })
                } else {
                    // local username
                    this.setState({
                        username: response.data.user.local.username
                    })
                }
            } else {
                console.log("USER NOT LOGGED IN")
            }
        })

        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Global Chat</div>
                                <hr />
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div>{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>

                            </div>
                            <div className="card-footer">
                                {/* <input type="text" placeholder="Username" value={this.state.username} className="form-control" />
                                <br /> */}
                                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} />
                                <br />
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;