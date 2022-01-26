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
    <div className="flex flex-row justify-center w-[100%] items-center mb-8">
      <div className="">
        <input
          className="border-solid rounded-md border-2 border-emerald-900 py-1 pl-4 mr-4 focus:outline-emerald-700 test-left"
          placeholder="Search for a photo..."
          value={photoText}
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              ev.preventDefault();
              handleAddClick();
            }
          }}
          onChange={handleChange}
        ></input>
      </div>
      <div className="">
        <MdAddCircleOutline
          onClick={handleAddClick}
          className="add-icon"
          size="2.75rem"
        />
      </div>
    </div>
  );
};

export default AddPhotoPanel;
