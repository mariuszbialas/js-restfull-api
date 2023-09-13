const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

// description
const getDescription = () => DB.description;

const updateDescription = (changes) => {
  const updatedDesc = {
    ...DB.description,
    ...changes,
    updatedAt: new Date().toLocaleString('de-DE'),
  };
  DB.description = updatedDesc;
  saveToDatabase(DB);
  return updatedDesc;
};

// knowledge
const getKnowledge = () => DB.knowledge;

// education
const getEducation = () => DB.education;

// experience
const getExperience = () => DB.expierience;

// blog
const getBlog = () => DB.blog;

// download
const getDownload = () => DB.download;

// projects
const getProjects = () => DB.projects;
const createNewProject = (newProject) => {
  DB.projects.push(newProject);
  saveToDatabase(DB);
  return newProject;
};

module.exports = {
  getDescription, updateDescription,
  getKnowledge,
  getEducation,
  getExperience,
  getBlog,
  getDownload,
  getProjects, createNewProject,
};
