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

        console.log("PROPS:")
        console.log(this.props)
        // const ownerID = props.owneruserid;
        // const ownerId;
        

        this.socket = io('localhost:' + ((process.env.PORT || 3001) + 1),{
            // query: 'r_var=private_room',
            // userA: 'r_var=',
            // proposalId: this.props.proposalId ? this.props.proposalId : null


            // query: "r_var=" + (this.props.proposalId ? this.state.proposalId : '*') + ',' + JSON.stringify(this.props.ownerId) + ',' + this.state.userId
            // query: passRoom(this.state.room, this.props.proposalId)
            query: 'r_var=' + '5c5cd0b66de07d2d885cf14b'


            // proposal page makes api call to get proposal data and passes id to chat component
        });

        // function passRoom(room, propID) {
        //     if (room) {
        //         return "r_var=" + room
        //     } else {
        //         return "r_var=" + propID ? propID : ''
        //     }
        // }
        // this.socket.emit("USER_IDS", {idA: this.state.userId, idB: this.props.ownerId})


        this.socket.on('GET_ROOM', thisRoom => {
            console.log(thisRoom)
            this.setState({
                room: thisRoom
            })
        })

        this.socket.on('RECEIVE_MESSAGE', function (data) {
            // console.log("FRONT END RECEIPT")
            // console.log(data)
            addMessage(data);
        });

        this.socket.on('SAVE_HISTORY', () => {

        })

        const addMessage = data => {
            // console.log(data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log("Message: ");
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                room: this.state.room,
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

            this.setState({
                // TODO: set equal to this.props.proposalId
                room: '5c5cd0b66de07d2d885cf14b'
                // room: this.props.proposalId ? this.props.proposalId : ''
            })
        })
    }
    

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Chat</div>
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