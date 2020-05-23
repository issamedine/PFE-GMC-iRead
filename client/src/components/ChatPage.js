import React, { Component } from "react";
import io from "socket.io-client";
import moment from "moment";

import { getChats, afterPostMessage } from "../redux/actions/chat";
import { connect } from "react-redux";

import ChatCard from "./ChatCard";

import "./ChatPage.scss";
import "../App.scss";

class ChatPage extends Component {
  state = {
    chatMessage: "",
  };

  componentDidMount() {
    let server = "http://localhost:5000";

    this.props.getChats();

    this.socket = io(server);

    this.socket.on("Output Chat Message", (messageFromBackend) => {
      console.log("messageFromBackend", messageFromBackend);
      this.props.afterPostMessage(messageFromBackend);
    });
  }

  handleSearchChange = (e) => {
    this.setState({ chatMessage: e.target.value });
  };

  submitChatMessage = (e) => {
    e.preventDefault();

    let chatMessage = this.state.chatMessage;
    let userId = this.props.auth._id;
    let userName = this.props.auth.name;
    let nowTime = moment();
    let type = "Text";

    this.socket.emit("Input Chat Message", {
      chatMessage,
      userId,
      userName,
      nowTime,
      type,
    });
    this.setState({ chatMessage: "" });
  };

  render() {
    return (
      <div className="main-other-pages">
        <div className="container container-chat-page">
          <p className="pb-2 text-center">Chat page</p>
          <div className="col-xs-12 col-md-5 offset-md-3 mb-3">
              <div className="chat-body">
                {this.props.chats.chats &&
                  this.props.chats.chats.map((chat, i) => {
                    return (
                      <>
                        <ChatCard key={chat._id} chat={chat} />
                      </>
                    );
                  })}
              </div>
            <form onSubmit={this.submitChatMessage}>
              <div className="chat-footer">
                <input
                  type="text"
                  value={this.state.chatMessage}
                  onChange={this.handleSearchChange}
                />
                <i
                  class="fas fa-paper-plane"
                  onClick={this.submitChatMessage}
                ></i>
                {/* <button onClick={this.submitChatMessage}>add</button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.person,
    chats: state.chat,
  };
};

export default connect(mapStateToProps, { getChats, afterPostMessage })(
  ChatPage
);
