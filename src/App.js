import React, { useState, useEffect } from "react";
import HeaderView from "./views/HeaderView";
import FormView from "./views/FormView";
import DateCardView from "./views/DateCardView";
import "./App.css";

function App() {
  const [date, setDate] = useState({
    pet: "",
    owner: "",
    dateTime: "",
    time: "",
    symptom: ""
  });

  //if we have dates previusly created, we take it, else create an empty array
  let datesSaved = JSON.parse(localStorage.getItem("DATES"));
  if (!datesSaved) datesSaved = [];

  //hook which save and handle our dates created
  const [newDate, setNewDate] = useState(datesSaved);

  useEffect(() => {
    if (datesSaved) localStorage.setItem("DATES", JSON.stringify(newDate));
    else localStorage.setItem("DATES", JSON.stringify([]));
  }, [newDate, datesSaved]);

  const [errorFields, setErrorFields] = useState(false);

  const datesTitle =
    newDate.length === 0 ? <h2>Without dates</h2> : <h2>Manage your dates!</h2>;

  return (
    <div className="App">
      <HeaderView />
      <div className="container">
        <div className="row">
          <FormView
            currentDate={date}
            dates={newDate}
            errorFields={errorFields}
            setDate={setDate}
            setErrorFields={setErrorFields}
            setNewDate={setNewDate}
          />
          <div className="one-half column">
            {datesTitle}
            <DateCardView dates={newDate} setNewDate={setNewDate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
