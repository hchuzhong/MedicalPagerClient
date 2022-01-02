import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelContainer, ChannelListContainer } from "./components";
import "./App.css";

const apiKey = "5x6ka88tsksw";

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='team light'>
        <ChannelListContainer></ChannelListContainer>
        <ChannelContainer></ChannelContainer>
      </Chat>
    </div>
  );
};

export default App;
