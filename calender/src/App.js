import "./App.css";
import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";

function App() {
  const [reminderMsg, setReminderMsg] = useState("");
  const [remindAt, setRemindAt] = useState();

  const addReminder = () => {};
  return (
    <div className="App">
      <div className="homepage">
        <div className="homepage_header">
          <h1>Remind me 🙋🏻‍♂️</h1>
          <input
            type="text"
            placeholder="Reminder notes here..."
            value={reminderMsg}
            onChange={(e) => setReminderMsg}
          />
          <DateTimePicker
            value={remindAt}
            onChange={setRemindAt}
            minDate={new Date()}
            minutePlaceholder="mm"
            hourPlaceholder="hh"
            dayPlaceholder="dd"
            monthPlaceholder="mm"
            yearPlaceholder="yyyy"
          />
          <div className="button" onClick={addReminder}>
            Add Reminder
          </div>
        </div>
        <div className="homepage_body">
        
          <div className="reminder_card">
            <h2>Reminder notes</h2>
            <h3>Remind me at:</h3>
            <p> 26/05/2023 @2AM</p>
            <div className="button">Delete</div>
          </div>
          <div className="reminder_card">
            <h2>Reminder notes</h2>
            <h3>Remind me at:</h3>
            <p> 26/05/2023 @2AM</p>
            <div className="button">Delete</div>
          </div>
          <div className="reminder_card">
            <h2>Reminder notes</h2>
            <h3>Remind me at:</h3>
            <p> 26/05/2023 @2AM</p>
            <div className="button">Delete</div>
          </div>
          <div className="reminder_card">
            <h2>Reminder notes</h2>
            <h3>Remind me at:</h3>
            <p> 26/05/2023 @2AM</p>
            <div className="button">Delete</div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
