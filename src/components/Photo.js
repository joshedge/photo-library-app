const Photo = (props) => {
  const url = props.photo_url;
  const alt = props.photo_alt;

  return (
    <div className="mx-0 mb-0 mt-1">
      <img src={url} alt={alt} width="100%" />
    </div>
  );
};

export default Photo;
