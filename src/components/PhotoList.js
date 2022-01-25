import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import AddPhotoPanel from "./AddPhotoPanel";

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const api = "https://api.unsplash.com/search/photos?";
  const CLIENT_ID = "t71c8BYO7h97GFwVTzFUpgtgWmMROGc7ncI1kTMmUCE";

  useEffect(() => {
    var savedPhotos = localStorage.getItem("react-photo-library-app-data")
      ? JSON.parse(localStorage.getItem("react-photo-library-app-data"))
      : [];

    savedPhotos && setPhotos(savedPhotos);
  }, []);

  async function AddPhoto(query) {
    let page = Math.floor(Math.random() * 10) + 1;
    let index = Math.floor(Math.random() * 10);
    const res = await fetch(
      `${api}orientation=landscape&query=${query}&page=${page}&client_id=${CLIENT_ID}`
    );
    res
      .json()
      .then((data) => {
        let newPhoto = data.results[index];
        let newPhotos = [...photos, newPhoto];
        setPhotos(newPhotos);
      })
      .catch((err) => console.log(err));
  }

  const photosArr1 = photos.filter((ei, i) => i % 3 === 0);
  const photosArr2 = photos.filter((ei, i) => i % 3 === 1);
  const photosArr3 = photos.filter((ei, i) => i % 3 === 2);
  console.log(photosArr1);

  return (
    <div className="items-center">
      {photos.length > 0 && (
        <div className="flex flex-row justify-between mx-auto w-[50%]">
          <div className="w-[100%] my-0 ml-0 mr-1">
            {photosArr1.map((photo) => (
              <Photo
                key={photo.id}
                photo_url={photo.urls.regular}
                photo_alt={photo.alt_description}
              />
            ))}
          </div>
          <div className="w-[100%] my-0 ml-0 mr-1">
            {photosArr2.map((photo) => (
              <Photo
                key={photo.id}
                photo_url={photo.urls.regular}
                photo_alt={photo.alt_description}
              />
            ))}
          </div>
          <div className="w-[100%] my-0 ml-0 mr-1">
            {photosArr3.map((photo) => (
              <Photo
                key={photo.id}
                photo_url={photo.urls.regular}
                photo_alt={photo.alt_description}
              />
            ))}
          </div>
          {/*
          {photos.map((photo) => (
            <Photo
              key={photo.id}
              photo_url={photo.urls.regular}
              photo_alt={photo.alt_description}
            />
          ))} */}
        </div>
      )}
      <AddPhotoPanel handleAddPhoto={AddPhoto} />
    </div>
  );
};

export default PhotoList;
