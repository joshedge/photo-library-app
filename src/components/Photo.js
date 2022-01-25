import { MdOutlineDeleteForever } from "react-icons/md";

const Photo = ({ id, url, alt, handleDeleteClick }) => {
  return (
    <div className="mx-0 mb-0 mt-1">
      <img src={url} alt={alt} width="100%" />
      <MdOutlineDeleteForever
        onClick={() => handleDeleteClick(id)}
        className="add-icon"
        size="2.75rem"
      />
    </div>
  );
};

export default Photo;
