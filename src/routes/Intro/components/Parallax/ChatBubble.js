import React from "react";
import {
  ChatBubbleContainer,
  ChatBubbleContent,
  ChatBubbleSpeaker,
  ChatBubbleText,
} from "./ParallaxStyle";

const ChatBubble = ({ speaker, text, isInterviewer }) => {
  return (
    <ChatBubbleContainer isInterviewer={isInterviewer}>
      <ChatBubbleContent isInterviewer={isInterviewer}>
        <ChatBubbleSpeaker>{speaker}</ChatBubbleSpeaker>
        <ChatBubbleText isInterviewer={isInterviewer}>
          <p>{text}</p>
        </ChatBubbleText>
      </ChatBubbleContent>
    </ChatBubbleContainer>
  );
};

export default ChatBubble;
