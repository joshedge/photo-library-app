import "../styles/Photo.css";

const Photo = (photo) => {
  // if (typeof url !== undefined) {
  //   //if (Object.keys(url).length !== 0) {
  //   link = url.urls.small.url;
  // }

  //console.log(photo.url.urls.regular.url);

  return (
    //{isLoggedIn ? <HomeLoggedIn /> : <HomeLoggedOut />}
    <div>
      {typeof photo !== undefined && (
        <div className="photo">
          <div className="photo-frame">
            <img src={photo.url.urls.small} alt=""></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photo;
