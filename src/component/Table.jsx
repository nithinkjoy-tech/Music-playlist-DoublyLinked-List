import React, {useState, useEffect, useMemo} from "react";
import axios from "axios"
import DataTable from "react-data-table-component";
import Player from "./Player";
import NewPlayer from "./NewPlayer";
import linkedList from "./../utils/linkedList";
import AddMusic from "./AddMusic";

export default function Table({songData, setAddMusic,musicAdded}) {
  // const [songData, setSongData] = useState();
  // const [addMusic, setAddMusic] = useState(false);

  


  const [src, setSrc] = useState(
    //https://dns4.vippendu.com/download/128k-drifu/Pakalin-Vaathil.mp3
    //https://dns4.vippendu.com/download/128k-dmmpg/Kaane-Kaane.mp3
    //https://dns4.vippendu.com/download/128k-dmmht/Kattu-Thee.mp3
    //https://dns4.vippendu.com/download/128k-dmmrl/Para-Para-Paaruppenne-(From-Varayan).mp3
    //https://dns4.vippendu.com/download/128k-dmmzn/Vaanin-Mele.mp3

    //https://englishsongs.wapkiz.com/filedownload/2140029/KSHMR-Marnik-Bazaar-Sunburn-Goa-2015-Anthem-(englishsongs.wapkiz.com).mp3
    //linkedList.getFirstSong()
  );
  useEffect(() => {
    //setSongData(linkedList.getData());
    //console.log(linkedList.getData());
    setTimeout(()=>{
      console.log("etting fr");
    setSrc(linkedList.getFirstSong())
    },500)
  },[musicAdded]);

  const playSelected=(row)=>{
    //setSrc(row.songLink)
  }

  const addNewMusic = row => {
    console.log(row, "rw");
  };

  const columns = useMemo(
    () => [
      {
        name:"Operate",
        cell:row=>(
          <span onClick={()=>playSelected(row)}>
            <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAAFPElEQVRYhc2YW2xUVRRA175zp6UIBGgREdTKIyg1SFspDwHTKQYkvBQYO2A0MRJj5MMPjB9++SfohwmSaJQoIG1oFSkivqCTUCwVaKkgQcr7UQVLQREptDNn+8GURzuP3plbdH3NPXP2PmtOT+/ddwsuUrB1dWZY0h8wov0EYytWyOPhgtXWemrX1Bea3VpHUgnOC64dLnjmGMUnMA7IjDO9GagRIYixNtYWFR9Ndl3H0gvKyjxHMkN+EZYAE5NcVxWpRsz7w5u85eV+f9hJsCPp/GDJXFV5B3S4M8e4Ag0GeX2vL7DJQUxiRn+35m47zf4YZVbyeolEpMLYnsV7p/ibEs9NQH6wZJIq64F7XbGLT6NR8dcXBarjTbLifZlbWTpble+5M8IAgy3Rytxg6fx4k2Lu9PXzSzlgu66WmJAi82Kd86jSkSPxA9CjW9Xi02JUpkY7Kp2kc7eXDZBQqJ47dyRiInAGIbe2cOH5W8c7nWkJh1bxPxAGUBiiho86jt8mnbet9Gmnt7X+aT0Y0atvqn6xEebmbSuZdftQhAVlZZ6jWeFfnTw4etleKsbPoq83nR+bf2fZ4T00tlx2U7mdQ8PO2zntT84bO30sK/ys0yfd/Rm96etNB+DxzEGUF8zgpewcvFbcO2kyjDyaFZrXfnEju6KvOs0kHf6N0y0Przw4mvKCGYzvf08qklEWY0n7RwuuV2vABLfy35fRm5WPFvLe6CkMTO/pTlJl0tit64ZCRFqMPZcUy9RoTM4czPqCpwgMGYnV8c/iHAlb1hyISBvRwlQzxqK3ncbSEXmszZ9GTp945XYXiHhe3+nrBXy38lDvfnya9yRvjhzLXbY3uSTKeADJD5ZkqZKwHIxGTp/+rMmf5jjufGsLK47+zOazxx3HprfamZZBsh1HpkhWWgZvPTyeD8f4yO7Zx1Fsq9dkW2LUWZSLPNZvIKVjpzN30LAux4ilfSwRyehGr4SkWR5ezB7V9QA1PS1Vbek+pcQYVT5vPNL1ALGu2GrJJVHtPqs4HLp8kbcb9rDvr/OJJ0dQI5dsb7j1eMhK8haUJJdDbXxwfD/rGxswDjcsrc06YUU6P13/qSlS1dyIf9cWSs8cciwM/LFzuv+CDaCwS2CG+4o3OdXyN8sa9lBz4WwqaWog8tJqqQRVtFukr5kwq08d5JOTB2g1JrVkShBuvGnLl6DLcbloqmpuZHlDLb9d/ceNdOpR3QSR2iPSDNzpRmaAc9eu8MYvO3ht33a3hEHYsXvqomNwS09DRVeISrINRQDajGHt6YOsOnmAq2FHPcWEiNEV7Z9vvLkMb/KWCzQ4SXTqymUuhVoB2H3xHMW7v2HlsX2uC6McrK06/EX75W1nOLeydLagFU7yDUzvSVZ6Dw5cuuCWYicEmVnrC3x987oD+ZWlGxWd020GjpENdb7AvFtHOr02G9uzGGi8Y05xEDgjoi93HO8kvXeKv8mo+IH/tJACvQIyv2NLDGK0euuLAtUGDQChbneLTgiV4lpf4KdoX8bsqtT7FlWgPMOd3/FrCsV1RQu/ijUh4RNwzLbSiR7R9QpD3HWLymlBFsTa4XYS9q/qiwLVCLkoG91zi4ZssE1bbiJhcFhr5AU/m4la7wIjk3briHLQEl26x7doS1dDHHUK6wqf21y3vWEUIsXADiDZVx5FqBJVf11VwyNOhCHFqm7s1nVDw5Y1B8WH6DhgQJzpTQg1GCpDdqhi3xPPO296RHC1FJ3wbVn/tozwAyak/RD1iqFVvNaf1yxzYv/kRRfdWudfgszXXj681jIAAAAASUVORK5CYII="/>
          </span>
        ),
      },
      {
        name: "Song Name",
        selector: row => row["songName"],
        grow: 1,
      },
      {
        name: "Artist Name",
        selector: row => row["artistName"],
        grow: 1,
      },
      {
        name: "Song Album",
        selector: row => row["songAlbum"],
        grow: 1,
      },
      {
        name: "",
        selector: row => row[""],
        cell: row => (
          <td data-label="Delete">
            <button className="btn btn-danger">Delete</button>
          </td>
        ),
      },
    ],
    []
  );

  let conditionalRowStyles=[
    {
    when: row => row.songLink==src,
    style: {
      backgroundColor: '#5C636A',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }
]

  return (
    <>
      <div style={{margin: "auto", width: "50%"}} className="dashboard-items">
        <div className="arrivallist" style={{margin: 0}}>
          <>
            <DataTable
              title="Playlist"
              pagination
              subHeader
              noDataComponent="No song in the playlist"
              conditionalRowStyles={conditionalRowStyles}
              columns={columns}
              data={songData}
            />
          </>
        </div>
        <button
          className="btn btn-secondary mb-4"
          onClick={() => {
            setAddMusic(true);
          }}
        >
          Add Music
        </button>
        {/* <Player songData={songData} setSongData={setSongData} /> */}
      </div>
      <div style={{margin: "auto", width: "50%"}} className="dashboard-items">
        <NewPlayer src={src} setSrc={setSrc} songData={songData} />
      </div>
    </>
  );
}
