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

// download
const getDownload = (req, res) => {
    const download = aboutMeService.getDownload();
  res.send({ status: 'OK', data: download });
};

module.exports = {
  getAboutMe,
  getDescription,
  getKnowledge,
  getEducation,
  getExperience,
  getBlog,
  getDownload,
};
