import React from "react";
// import "./App.css";
// import axios from "axios";
// import React, { useEffect, useState } from "react";

function App() {
  // const [reminderMsg, setReminderMsg] = useState("");
  // const [remindAt, setRemindAt] = useState(new Date());
  // const [reminderList, setReminderList] = useState([]);

  // write promise to getall reminders inside useEffect
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/getAllReminders")
  //     .then((response) => {
  //       console.log("response is ", response);
  //       setReminderList(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // const addReminder = () => {
  //   axios
  //     .post("http://localhost:4000/addReminder", {
  //       reminderMsg: reminderMsg,
  //       remindAt: remindAt,
  //     })
  //     .then((response) => {
  //       console.log("response is ", response);
  //       // setReminderList([...reminderList, response.data.reminder]);
  //       setReminderList(response.data.reminder);
  //       response.status(200).json({
  //         success: true,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log("error is ", error);
  //       // send json object with status code...
  //       // error.status(500).json({
  //       //   success: false,
  //       //   message: "Something went wrong",
  //       //   errorMessage: error.message,
  //       // });
  //     });
  // };

  // const deleteReminder = () => {
  //   axios.delete();
  // };
  // return (
  //   <div className="App">
  //     {console.log("ReminderList is ", reminderList)}

  //     <div className="homepage">
  //       <div className="homepage_header">
  //         <h1>Remind me 🙋🏻‍♂️</h1>
  //         <input
  //           type="text"
  //           placeholder="Reminder notes here..."
  //           value={reminderMsg}
  //           onChange={(e) => setReminderMsg(e.target.value)}
  //         />

  //         <div className="button" onClick={addReminder}>
  //           Add Reminder
  //         </div>
  //       </div>
  //       <div className="homepage_body">
  //         <div className="reminder_card">
  //           <h2>Reminder notes</h2>
  //           <h3>Remind me at:</h3>
  //           <p> 26/05/2023 @2AM</p>
  //           <div className="button" onClick={deleteReminder}>
  //             Delete
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
