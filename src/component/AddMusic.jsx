import React from "react";
import * as Yup from "yup";
import {Formik, Form} from "formik";
import InputBox from "./common/InputBox";
import PropertySelectBox from "./common/PropertySelectBox";
import {displayNotification} from "./../services/notificationService";

const validationSchema = Yup.object().shape({
  songName: Yup.string().min(2).max(50).required("Song Name is required").label("Song"),
  songLink: Yup.string().min(2).max(3000).required("Song Link is required").label("Link"),
  artistName: Yup.string().min(2).max(50).required("Singer Name is required").label("Singer"),
  insertPosition: Yup.string().required("Insert position is required").label("Position"),
  otherInsertPosition: Yup.number().integer().min(0).label("Position"),
  songAlbum: Yup.string().min(2).max(256).label("Album"),
});

function AddMusic({setAddMusic, setMusicAdded, setSongData, max, operations}) {
  const handleSubmit = async (values, setFieldError) => {
    if (values["insertPosition"] == "other" && !values["otherInsertPosition"]) {
      return setFieldError("otherInsertPosition", "Position is required");
    }
    if (values["otherInsertPosition"] > max)
      return setFieldError("otherInsertPosition", `Index should be between 0- ${max}`);

    let existingSongs = operations.getData();
    let duplicate = false;

    existingSongs.forEach(element => {
      if (element.songLink == values["songLink"]) duplicate = true;
    });

    if (duplicate) return setFieldError("songLink", "Duplicate song not allowed");
    displayNotification("success", "Music successfully Added");
    setAddMusic(false);

    if (values["insertPosition"] == "First"){
      operations.insertFirst({
        songName: values["songName"],
        songLink: values["songLink"],
        artistName: values["artistName"],
        songAlbum: values["songAlbum"],
      });
    }

    if (values["insertPosition"] == "Last") {
      operations.insertLast({
        songName: values["songName"],
        songLink: values["songLink"],
        artistName: values["artistName"],
        songAlbum: values["songAlbum"],
      });
    }

    if (values["insertPosition"] == "other") {
      operations.insertAt(values["otherInsertPosition"], {
        songName: values["songName"],
        songLink: values["songLink"],
        artistName: values["artistName"],
        songAlbum: values["songAlbum"],
      });
    }
    setMusicAdded(true);
    setSongData(operations.getData());
  };

  return (
    <Formik
      initialValues={{
        songName: "",
        songLink: "",
        artistName: "",
        insertPosition: "",
        songAlbum: "",
        otherInsertPosition: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, {setFieldError}) => handleSubmit(values, setFieldError)}
    >
      {({errors, touched, values, handleChange, handleBlur, getFieldProps}) => (
        <Form>
          <h3 style={{textAlign: "center"}}>Add Music</h3>
          <div style={{margin: "auto", width: "50%"}}>
            <div className="form-group">
              <InputBox
                error={errors}
                handleBlur={handleBlur}
                touched={touched}
                label="Song Name"
                values={values}
                type="text"
                name="songName"
                placeholder="Song Name"
                handleChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <InputBox
                error={errors}
                handleBlur={handleBlur}
                touched={touched}
                label="Song Link"
                values={values}
                type="text"
                name="songLink"
                placeholder="Song Link"
                handleChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <InputBox
                error={errors}
                handleBlur={handleBlur}
                touched={touched}
                label="Artist Name"
                values={values}
                type="text"
                name="artistName"
                placeholder="Artist Name"
                handleChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <InputBox
                error={errors}
                handleBlur={handleBlur}
                touched={touched}
                label="Song Album"
                values={values}
                type="text"
                name="songAlbum"
                placeholder="Song Album"
                handleChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <PropertySelectBox
                label="Insert Position"
                name="insertPosition"
                options={["", "First", "Last", "other"]}
              />
            </div>
            {getFieldProps("insertPosition").value == "other" && (
              <div className="form-group">
                <InputBox
                  error={errors}
                  handleBlur={handleBlur}
                  touched={touched}
                  label="Other Position"
                  values={values}
                  type="text"
                  name="otherInsertPosition"
                  placeholder={`Other Position(Index) 0 - ${max}`}
                  handleChange={handleChange}
                  className="form-control"
                />
              </div>
            )}
            <button type="submit" className="btn btn-primary btn-block mt-2">
              Add Music
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AddMusic;
