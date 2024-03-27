import mongoose from "mongoose";

const projectDayContent = new mongoose.Schema({
  markdown: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
});

const projectDay = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  dayContent: {
    type: [projectDayContent],
    required: true,
  },
});

const projectSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  teaser: {
    type: String,
    required: true,
  },
  content: {
    type: [projectDay],
    default: [],
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: [String],
    default: [],
  },
});

const Projects = mongoose.model("Projects", projectSchema);

export default Projects;
