import React, { useState } from "react";
import Select from "react-select";

const CustomHeader = ({ column, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: "relative" }}>
      <span onClick={handleClick} className="font-weight-bold fs-13">
        {column.name}
      </span>
      {isOpen && (
        <Select
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            // Add more options as needed
          ]}
          onChange={(selectedOption) => {
            console.log("Selected:", selectedOption);
            setIsOpen(false);
          }}
          styles={{
            menu: (provided) => ({
              ...provided,
              position: "absolute",
              top: "100%", // Adjust position as needed
              left: 0,
              zIndex: 9999,
            }),
          }}
        />
      )}
    </div>
  );
};

export default CustomHeader;
