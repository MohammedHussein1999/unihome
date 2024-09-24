import React from "react";
import { JitsiMeeting } from "react-jitsi";

const VideoConference = ({ roomName }) => (
  <JitsiMeeting
    roomName={roomName} // Room name for unique session
    onApiReady={(api) => {
      // Here you can add listeners to Jitsi events
    }}
  />
);

export default VideoConference;
