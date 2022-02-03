import { MdOutlineDeleteForever } from "react-icons/md";
import React, { useState } from "react";

const Photo = ({ id, url, alt, handleDeleteClick }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div className="relative mx-0 mb-0 mt-1">
      <img
        src={url}
        alt={alt}
        width="100%"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      />
      <MdOutlineDeleteForever
        onClick={() => handleDeleteClick(id)}
        className={`delete-icon absolute right-0 bottom-0
          ${hovered ? "opacity-100" : "opacity-0"}`}
        size="2rem"
      />
    </div>
  );
};

export default Photo;
