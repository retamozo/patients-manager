import React from "react";
import PropTypes from "prop-types";

const RemoveDate = ({ dates, currentDate, setNewDate }) => {
  const removeDate = id => {
    const dateSelected = dates.filter(date => date.id !== id);
    setNewDate(dateSelected);
  };
  return (
    <button type="button" onClick={() => removeDate(currentDate.id)}>
      Delete date
    </button>
  );
};

RemoveDate.propTypes = {
  dates: PropTypes.array.isRequired,
  currentDate: PropTypes.object.isRequired,
  setNewDate: PropTypes.func.isRequired
};

export default RemoveDate;
