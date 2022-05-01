import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Player({link}) {
  return (
    <div style={{margin: "auto", width: "50%"}}>
      <ReactAudioPlayer
        src={"https://englishsongs.wapkiz.com/filedownload/2140029/KSHMR-Marnik-Bazaar-Sunburn-Goa-2015-Anthem-(englishsongs.wapkiz.com).mp3"}
        autoPlay 
        controls
      />
      <button className="btn btn-primary">Prev</button>
      <button style={{marginLeft:"10px"}} className="btn btn-primary">Next</button>
    </div>
  );
}
