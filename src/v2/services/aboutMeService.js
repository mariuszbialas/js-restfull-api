const AboutMe = require('../database/AboutMe');

// description
const getDescription = () => {
  const description = AboutMe.getDescription();
  return description;
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

module.exports = {
  getDescription,
  getKnowledge,
  getEducation,
  getExperience,
  getBlog,
  getDownload,
};
