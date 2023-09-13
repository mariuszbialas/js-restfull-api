const aboutMeService = require('../services/aboutMeService');

// main info
const getAboutMe = (req, res) => {
  res.send({ status: 'OK', info: 'Data for a website "About Me"' });
};

// description
const getDescription = (req, res) => {
  const description = aboutMeService.getDescription();
  res.send({ status: 'OK', data: description });
};

const updateDescription = (req, res) => {
  const updateDescription = aboutMeService.updateDescription(req.body);
  res.send({ status: 'OK', data: updateDescription });
};

// knowledge
const getKnowledge = (req, res) => {
  const knowledge = aboutMeService.getKnowledge();
  res.send({ status: 'OK', data: knowledge });
};

// education
const getEducation = (req, res) => {
  const education = aboutMeService.getEducation();
  res.send({ status: 'OK', data: education });
};

// experience
const getExperience = (req, res) => {
  const experience = aboutMeService.getExperience();
  res.send({ status: 'OK', data: experience });
};

// blog
const getBlog = (req, res) => {
  const blog = aboutMeService.getBlog();
  res.send({ status: 'OK', data: blog });
};
const createNewBlog = (req, res) => {
  const newBlog = aboutMeService.createNewBlog();
  res.send({ status: 'OK', data: newBlog });
};

// download
const getDownload = (req, res) => {
  const download = aboutMeService.getDownload();
  res.send({ status: 'OK', data: download });
};

// projects
const getProjects = (req, res) => {
  const projects = aboutMeService.getProjects();
  res.send({ status: 'OK', data: projects });
};
const createNewProject = (req, res) => {
  const { body } = req;
  if(!body.name || !body.type || !body.description) return;
  const newProject = {
    name: body.name,
    type: body.type,
    description: body.description,
    github: body.github,
    url: body.url,
    pics: body.pics,
  };
  const createProject = aboutMeService.createNewProject(newProject);
  res.send({ status: 'OK', data: createProject })
};

module.exports = {
  getAboutMe,
  getDescription,
  updateDescription,
  getKnowledge,
  getEducation,
  getExperience,
  getBlog, createNewBlog,
  getDownload,
  getProjects, createNewProject,
};
