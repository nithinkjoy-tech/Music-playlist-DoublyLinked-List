import React, {useState, useEffect, useMemo} from "react";
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

  const addNewMusic = row => {
    console.log(row, "rw");
  };

  const columns = useMemo(
    () => [
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
