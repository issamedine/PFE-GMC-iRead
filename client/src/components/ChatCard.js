import React from "react";
import moment from "moment";

import "./ChatCard.scss";

function ChatCard(props) {
  return (
    <div className="items-chat">
      <div className="d-flex">
        <figure className="img-chat">
          <img src={props.chat.sender.image} alt="" />
        </figure>
        <p className="ml-4 mb-0">{props.chat.sender.name}</p>
      </div>
      <div className="message-chat my-2">
        <span>{props.chat.message}</span>
        <p className="mt-2">{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
      </div>
    </div>
  );
}

export default ChatCard;
