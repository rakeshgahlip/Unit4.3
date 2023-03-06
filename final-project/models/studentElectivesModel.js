var mongoose = require("mongoose");

//schema
var studentElectivesSchema = mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  elective1: {
    type: String,
    required: false,
  },
  elective2: {
    type: String,
    required: false,
  },
  elective3: {
    type: String,
    required: false,
  },
  elective4: {
    type: String,
    required: false,
  },
  elective5: {
    type: String,
    required: false,
  },
});

const StudentElectives = mongoose.model(
  "Student Electives",
  studentElectivesSchema
);
module.exports = StudentElectives;
