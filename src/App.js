import {useState} from "react";
import {ToastContainer} from "react-toastify";
import Table from "./component/Table.jsx";
import AddMusic from "./component/AddMusic";
import linkedList from "./utils/linkedList";
import "./App.css";

function App() {
  const [addMusic, setAddMusic] = useState(true);
  const [songData, setSongData] = useState([]);
  const [musicAdded, setMusicAdded] = useState(false);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={"colored"}
      />
      {addMusic ? (
        <AddMusic
          musicAdded={musicAdded}
          setMusicAdded={setMusicAdded}
          setAddMusic={setAddMusic}
          operations={linkedList}
          max={linkedList.getSize()}
          setSongData={setSongData}
        />
      ) : (
        <Table musicAdded={musicAdded} setAddMusic={setAddMusic} songData={songData} setSongData={setSongData} />
      )}
    </>
  );
}

export default App;
