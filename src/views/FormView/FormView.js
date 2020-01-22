import React from "react";
import Form from "../../components/Form";
import PropTypes from "prop-types";

const FormView = ({
  currentDate,
  dates,
  errorFields,
  setDate,
  setNewDate,
  setErrorFields
}) => {
  return (
    <Form
      currentDate={currentDate}
      dates={dates}
      setDate={setDate}
      setNewDate={setNewDate}
      errorFields={errorFields}
      setErrorFields={setErrorFields}
    />
  );
};
FormView.propTypes = {
  currentDate: PropTypes.object.isRequired,
  dates: PropTypes.array.isRequired,
  errorFields: PropTypes.bool.isRequired,
  setDate: PropTypes.func.isRequired,
  setNewDate: PropTypes.func.isRequired,
  setErrorFields: PropTypes.func.isRequired
};

export default FormView;
