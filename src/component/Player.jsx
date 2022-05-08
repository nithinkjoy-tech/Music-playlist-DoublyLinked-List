import React, {useState} from "react";
import AudioPlayer from "react-h5-audio-player";
import linkedList from "../utils/linkedList";
import "react-jinke-music-player/assets/index.css";
import "react-h5-audio-player/lib/styles.css";

export default function Player({src,setSrc,userSelected,setUserSelected}) {
  const [newSong,setNewSong]=useState()

  if(userSelected) setSrc(userSelected)

  const playNextSong=()=>{
    let newLocalSong=linkedList.playNext(userSelected||src||newSong)
    setNewSong(newLocalSong)
    setSrc(newLocalSong)
    setUserSelected(null)
  }
  
  const playPreviousSong=()=>{
    let newLocalSong=linkedList.playPrevious(userSelected||src||newSong)
    setNewSong(newLocalSong)
    setSrc(newLocalSong)
    setUserSelected(null)
  }

  return (
    <div>
      <AudioPlayer
        autoPlay
        src={userSelected||newSong||src}
        showSkipControls
        onClickNext={()=>playNextSong()}
        onClickPrevious={()=>playPreviousSong()}
        onEnded={()=>playNextSong()}
      />
    </div>
  );
}
