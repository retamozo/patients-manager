import React from "react";
import DateCard from "../../components/DateCard";
import PropTypes from "prop-types";

const DateCardView = ({ dates, setNewDate }) => {
  return (
    !!dates.length &&
    dates.map(card => (
      <DateCard
        key={card.id}
        dates={dates}
        currentDate={card}
        setNewDate={setNewDate}
      />
    ))
  );
};

DateCardView.propTypes = {
  dates: PropTypes.array.isRequired,
  setNewDate: PropTypes.func.isRequired
};

export default DateCardView;
