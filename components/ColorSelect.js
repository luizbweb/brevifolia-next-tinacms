import React from "react";

const ColorSelect = ({ options, value, setValue }) => {
  return (
    <select
      style={{ width: "100%", height: "40px", maxWidth: "432px" }}
      value={value}
      onChange={({ target }) => setValue(target.value)}
    >
      <option value="" disabled>
        Selecione um Álbum
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ColorSelect;
