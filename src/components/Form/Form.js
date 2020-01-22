import React from "react";
import uuid from "uuid/v4";
import PropTypes from "prop-types";

const Form = ({
  currentDate,
  dates,
  errorFields,
  setDate,
  setErrorFields,
  setNewDate
}) => {
  const { pet, owner, dateTime, time, symptom } = currentDate;
  const handleInputData = e => {
    setDate({
      ...currentDate,
      [e.target.name]: e.target.value
    });
  };

  const createNewDate = currentDate => {
    setNewDate([...dates, currentDate]);
  };

  const checkValuesFromInput = obj =>
    Object.values(obj).some(field => field.trim() === "");

  const submitDate = e => {
    e.preventDefault();
    //validate
    const almostOneFieldIncompleted = checkValuesFromInput(currentDate);
    if (almostOneFieldIncompleted) {
      setErrorFields(true);
      return;
    } else {
      setErrorFields(false);
      //add a unique id Date
      currentDate.id = uuid();
      //create the currentDate
      createNewDate(currentDate);
      //restart currentDate

      setDate({
        pet: "",
        owner: "",
        dateTime: "",
        time: "",
        symptom: ""
      });
    }
  };

  return (
    <div className="one-half column">
      <h2>Create new currentDate</h2>
      {errorFields ? (
        <p className="alerta-error">All fields are required</p>
      ) : null}
      <form onSubmit={submitDate}>
        <label>Pet's name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Write pet's name"
          value={pet}
          onChange={handleInputData}
        />
        <label>Pet's owner</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Name of the pet owner"
          value={owner}
          onChange={handleInputData}
        />
        <label>Date</label>
        <input
          type="date"
          name="dateTime"
          className="u-full-width"
          placeholder="Select a currentDate..."
          value={dateTime}
          onChange={handleInputData}
        />
        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          value={time}
          onChange={handleInputData}
        />
        <label>Symptom</label>
        <textarea
          className="u-full-width"
          value={symptom}
          name="symptom"
          onChange={handleInputData}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Send
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  currentDate: PropTypes.object.isRequired,
  dates: PropTypes.array.isRequired,
  errorFields: PropTypes.bool.isRequired,
  setDate: PropTypes.func.isRequired,
  setErrorFields: PropTypes.func.isRequired,
  setNewDate: PropTypes.func.isRequired
};
export default Form;
