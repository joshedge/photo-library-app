import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

const AddPhotoPanel = ({ handleAddPhoto }) => {
  const [photoText, setPhotoText] = useState("");
  const charLimit = 30;

  const handleChange = (event) => {
    if (charLimit - event.target.value.length >= 0)
      setPhotoText(event.target.value);
  };

  const handleAddClick = () => {
    if (photoText.trim().length > 0) {
      handleAddPhoto(photoText);
      setPhotoText("");
    }
  };

  return (
    <div className="flex flex-row justify-center w-[100%] items-center">
      <div className="">
        <input
          className=""
          placeholder="Search for a photo..."
          value={photoText}
          onChange={handleChange}
        ></input>
      </div>
      <div className="">
        <MdAddCircleOutline
          onClick={handleAddClick}
          className="add-icon"
          size="3em"
        />
      </div>
    </div>
  );
};

export default AddPhotoPanel;
