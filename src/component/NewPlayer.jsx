import React, {useState,useEffect} from "react";
import ReactAudioPlayer from "react-audio-player";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import options from "./../utils/options";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import linkedList from "../utils/linkedList";

export default function Player({songData, setSongData,src,setSrc}) {
  // const [src, setSrc] = useState(
  //   //"https://dns4.vippendu.com/download/128k-drifu/Pakalin-Vaathil.mp3"
  //   linkedList.getFirstSong()
  // );
  const [newSong,setNewSong]=useState()

  const playNextSong=()=>{
    console.log("nextsong");
    //console.log("pn",linkedList.playNext())
    let newLocalSong=linkedList.playNext(src||newSong)
    setNewSong(newLocalSong)
    setSrc(newLocalSong)
  }
  
  const playPreviousSong=()=>{
    console.log("nextsong");
    //console.log("pn",linkedList.playNext())
    let newLocalSong=linkedList.playPrevious(src||newSong)
    setNewSong(newLocalSong)
    setSrc(newLocalSong)
  }

  useEffect(()=>{

  },[newSong])

  return (
    <div>
      <AudioPlayer
        autoPlay
        src={newSong||src}
        onPlay={e => console.log("onPlay")}
        // other props here
        showSkipControls
        onClickNext={()=>playNextSong()}
        onClickPrevious={()=>playPreviousSong()}
        onEnded={()=>playNextSong()}
      />
    </div>
  );
}
