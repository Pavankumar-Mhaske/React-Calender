/**
 * Configuring dotenv package
 */
require("dotenv").config();

/**
 * Importing express package and setting it up by calling it.
 */
const express = require("express");
const app = express();

/**
 * Importing cors package.
 */
const cors = require("cors");

const Reminder = require("./models/reminderSchema");

/**
 * Middlewares
 *      - express.json() - To handle (parse) the json data coming in request
 *      - express.urlencoded({extended: true}) - To handle data coming from URL in encoded format
 *      - cors - To handle cross origin requests
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/**
 * Home route for testing purpose
 */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the application",
  });
});

app.get("/getAllReminders", async (req, res) => {
  try {
    const reminders = await Reminder.find({});
    res.status(200).json({
      success: true,
      reminders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      errorMessage: error.message,
    });
  }
});

// json object for addreminder..

app.post("/addReminder", async (req, res) => {
  try {
    const { reminderMsg, remindAt } = req.body;
    if (!reminderMsg || !remindAt) {
      return res.status(400).json({
        success: false,
        message: "reminderMsg and remindAt are required",
      });
    }

    const reminder = await Reminder.create({
      reminderMsg,
      remindAt,
      isReminded: false,
    });
    res.status(200).json({
      success: true,
      reminder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      errorMessage: error.message,
    });
  }
});

app.delete("/deleteReminder/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "id is required",
      });
    }
    const reminder = await Reminder.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      reminder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      errorMessage: error.message,
    });
  }
});

// json object for updateReminder..


app.put("/updateReminder/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { reminderMsg, remindAt, isReminded } = req.body;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "id is required",
      });
    }
    const reminder = await Reminder.findByIdAndUpdate(
      id,
      {
        reminderMsg,
        remindAt,
        isReminded,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      reminder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      errorMessage: error.message,
    });
  }
});

module.exports = app;
