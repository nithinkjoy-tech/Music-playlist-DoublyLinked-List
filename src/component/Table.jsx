import React,{useState,useMemo} from 'react'
import DataTable from "react-data-table-component"
import Player from './Player';

export default function Table() {

    

    const [songData,setSongData]=useState(
    [
        {
            Sl:1,
            songName:"new song1"
        },
        {
            Sl:2,
            songName:"new song2"
        }, //{data:{title:"ff",link:"fewefe"},next:{data:{t},next:{data:"40"}}}
        {
            Sl:3,
            songName:"new song3"
        },
    ]
    )

    const addMusic=(row)=>{
      console.log(row,"rw")
      setSongData()
    }

    const columns = useMemo(
        () => [
          {
            name: "Sl",
            selector: row=>row["Sl"],
            grow:0
          },
          {
            name: "Song Name",
            selector: row=>row["songName"],
            grow:0
          },
          {
            name: "",
            selector: row=>row[""],
            cell: row => (
                <td data-label="Delete">
                  <button className="btn btn-danger">
                    Delete
                  </button>
                </td>
              ),
          },
          {
            name: "",
            selector: row=>row[""],
            cell: row => (
                <td data-label="Add After">
                  <button onClick={()=>addMusic(row)} className="btn btn-primary">
                    Add After
                  </button>
                </td>
              ),
          },
        ],
        [] 
      );

      return (
        <div style={{margin:"auto",width:"50%"}} className="dashboard-items">
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
          <Player />
        </div>
      );
}
