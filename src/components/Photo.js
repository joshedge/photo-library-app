import { MdOutlineDeleteForever } from "react-icons/md";

const Photo = ({ id, url, alt, handleDeleteClick }) => {
  return (
    <div className="relative mx-0 mb-0 mt-1">
      <img src={url} alt={alt} width="100%" />
      <MdOutlineDeleteForever
        onClick={() => handleDeleteClick(id)}
        className="delete-icon absolute right-0 bottom-0 opacity-0 hover:opacity-100"
        size="2rem"
      />
    </div>
  );
};

export default Photo;
