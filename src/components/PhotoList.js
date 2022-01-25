import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import AddPhotoPanel from "./AddPhotoPanel";

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const api = "https://api.unsplash.com/search/photos?";
  const CLIENT_ID = "t71c8BYO7h97GFwVTzFUpgtgWmMROGc7ncI1kTMmUCE";

  useEffect(() => {
    var savedPhotos = JSON.parse(
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

  const deletePhoto = (key) => {
    const newPhotos = photos.filter((photo) => photo.key !== key);
    setPhotos(newPhotos);
  };

  async function AddPhoto(query) {
    let page = Math.floor(Math.random() * 10) + 1;
    let index = Math.floor(Math.random() * 10);
    const res = await fetch(
      `${api}orientation=landscape&query=${query}&page=${page}&client_id=${CLIENT_ID}`
    );
    res
      .json()
      .then((data) => {
        let newPhotoObj = data.results[index];
        let newPhoto = {
          key: newPhotoObj.id,
          photo_url: newPhotoObj.urls.regular,
          photo_alt: newPhotoObj.alt_description,
        };
        let newPhotos = [...photos, newPhoto];
        setPhotos(newPhotos);
      })
      .catch((err) => console.log(err));
  }

  const photosArr1 = photos.filter((ei, i) => i % 3 === 0);
  const photosArr2 = photos.filter((ei, i) => i % 3 === 1);
  const photosArr3 = photos.filter((ei, i) => i % 3 === 2);

  return (
    <div>
      <AddPhotoPanel handleAddPhoto={AddPhoto} />
      {photos.length > 0 && (
        <div className="flex flex-row justify-between mx-auto w-[50%]">
          <div className="w-[100%] my-0 ml-0 mr-1">
            {photosArr1.map((photo) => (
              <Photo
                id={photo.key}
                url={photo.photo_url}
                alt={photo.photo_alt}
                handleDeleteClick={deletePhoto}
              />
            ))}
          </div>
          <div className="w-[100%] my-0 ml-0 mr-1">
            {photosArr2.map((photo) => (
              <Photo
                id={photo.key}
                url={photo.photo_url}
                alt={photo.photo_alt}
                handleDeleteClick={deletePhoto}
              />
            ))}
          </div>
          <div className="w-[100%] my-0 ml-0 mr-1">
            {photosArr3.map((photo) => (
              <Photo
                id={photo.key}
                url={photo.photo_url}
                alt={photo.photo_alt}
                handleDeleteClick={deletePhoto}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoList;
