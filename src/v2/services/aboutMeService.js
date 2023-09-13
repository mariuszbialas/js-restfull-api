const AboutMe = require('../database/AboutMe');

// description
const getDescription = () => {
  const description = AboutMe.getDescription();
  return description;
};

const updateDescription = (changes) => {
  const updatedDesc = AboutMe.updateDescription(changes);
  return updatedDesc;
};

// knowledge
const getKnowledge = () => {
  const knowledge = AboutMe.getKnowledge();
  return knowledge;
};

// education
const getEducation = () => {
  const education = AboutMe.getEducation();
  return education;
};

// experience
const getExperience = () => {
  const experience = AboutMe.getExperience();
  return experience;
};

// blog
const getBlog = () => {
  const blog = AboutMe.getBlog();
  return blog;
};

// download
const getDownload = () => {
  const download = AboutMe.getDownload();
  return download;
};

// projects
const getProjects = () => {
  const projects = AboutMe.getProjects();
  return projects;
};
const createNewProject = (newProject) => {
  const projectToInsert = {
    ...newProject,
    createdAt: new Date.toLocaleString('de-DE'),
    updatedAt: new Date.toLocaleString('de-DE'),
  };
  const createdProject = AboutMe.createNewProject(projectToInsert);
  return createdProject;
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
