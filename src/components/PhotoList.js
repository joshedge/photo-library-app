import React, { useState, useEffect } from "react";
//import { nanoid } from "nanoid";

import "../styles/PhotoList.css";

import Photo from "./Photo";
import AddPhotoPanel from "./AddPhotoPanel";

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  //let page = 0;
  //const [page, setPage] = useState(0);

  const api = "https://api.unsplash.com/search/photos?";

  const CLIENT_ID = "t71c8BYO7h97GFwVTzFUpgtgWmMROGc7ncI1kTMmUCE";

  useEffect(() => {
    const savedPhotos = JSON.parse(
      localStorage.getItem("react-photo-library-app-data")
    );

    if (savedPhotos) {
      setPhotos(savedPhotos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "react-photo-library-app-data",
      JSON.stringify(photos)
    );
  }, [photos]);

  // const deletePhoto = (key) => {
  //   const newPhotos = photos.filter((photo) => photo.key !== key);
  //   setPhotos(newPhotos);
  // };

  // const checkStatus = (res) => {
  //   if (res.status >= 200 && res.status < 300) {
  //     return res;
  //   }
  //   const error = new Error(`HTTP Error ${res.statusText}`);
  //   error.status = res.statusText;
  //   error.res = res;
  //   console.log(error);
  //   throw error;
  // };

  // async function AddPhoto(query) {
  //   let page = Math.floor(Math.random() * 10) + 1;
  //   let index = Math.floor(Math.random() * 10);
  //   console.log("adding...");
  //   const res = await fetch(
  //     `${api}query=${query}&page=${page}&client_id=${CLIENT_ID}`
  //   );
  //   res
  //     .json()
  //     .then((data) => {
  //       console.log(data);
  //       const newPhoto = data.results[index];
  //       //console.log(newPhoto.urls.small);
  //       const newPhotos = [...photos, newPhoto];
  //       setPhotos(newPhotos);
  //     })
  //     .catch((err) => console.log(err));
  // }

  const AddPhoto = (query) => {
    let page = Math.floor(Math.random() * 10) + 1;
    let index = Math.floor(Math.random() * 10);
    fetch(`${api}query=${query}&page=${page}&client_id=${CLIENT_ID}`, {
      accept: "application/json",
    })
      // .then(checkStatus)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newPhoto = data.results[index];
        //console.log(newPhoto.urls.small);
        const newPhotos = [...photos, newPhoto];
        setPhotos(newPhotos);
      })
      .catch((err) => {
        console.log("Error Occurred: ", err);
      });
  };

  return (
    <div>
      {/* <Photo photo={photos[0].urls.small.url} /> */}
      {photos.length > 0 && (
        <div className="photo-list">
          {photos.map((photo) => (
            <Photo photo={photo} />
          ))}
        </div>
      )}
      <AddPhotoPanel handleAddPhoto={AddPhoto} />
    </div>
  );
};

export default PhotoList;
