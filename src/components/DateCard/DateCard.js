import React from "react";
import RemoveDate from "../RemoveDate";
import PropTypes from "prop-types";

const DateCard = ({ dates, currentDate, setNewDate }) => {
  const { dateTime, id, owner, pet, symptom, time } = currentDate;

  return (
    <div className="cita ">
      <p>
        <span>Pet name : {pet} </span>
      </p>
      <p>
        <span>Mascota name pet : {id} </span>
      </p>
      <p>
        <span>Mascota name pet : {owner} </span>
      </p>
      <p>
        <span>Mascota name pet : {symptom} </span>
      </p>
      <p>
        <span>Mascota name pet : {dateTime}</span>
      </p>
      <p>
        <span>Mascota name pet : {time}</span>
      </p>
      <RemoveDate
        dates={dates}
        currentDate={currentDate}
        setNewDate={setNewDate}
      />
    </div>
  );
};

DateCard.propTypes = {
  dates: PropTypes.array.isRequired,
  currentDate: PropTypes.object.isRequired,
  setNewDate: PropTypes.func.isRequired
};

export default DateCard;
