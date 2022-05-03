import React,{useState} from "react";
import ReactAudioPlayer from "react-audio-player";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import options from './../utils/options';

export default function Player({songData,setSongData}) {
  // return (
  //   <div style={{margin: "auto", width: "50%"}}>
  //     <ReactAudioPlayer
  //       src={"https://englishsongs.wapkiz.com/filedownload/2140029/KSHMR-Marnik-Bazaar-Sunburn-Goa-2015-Anthem-(englishsongs.wapkiz.com).mp3"}
  //       autoPlay 
  //       controls
  //     />
  //     <button className="btn btn-primary">Prev</button>
  //     <button style={{marginLeft:"10px"}} className="btn btn-primary">Next</button>
  //   </div>
  // );
  const [audioInstance, setAudioInstance] = useState();
  const getAudioInstance = instance => {
    console.log("Getting audio instance", instance);
    setAudioInstance(instance);
  };

  const changeSong=(index)=>{
    songData.forEach((element)=>{
      if(element.index==index){
        console.log("manually",index,element);
        setSongData([element])
      }
    })
  }
  console.log(audioInstance,"ai");

  return (
    <div style={{marginBottom:"50px"}}>
      <ReactJkMusicPlayer onAudioPlayTrackChange={(data)=>console.log(data,"data")} onPlayIndexChange={(index)=>changeSong(index)} audioLists={songData} {...options} />
    </div>
  ) 
}
