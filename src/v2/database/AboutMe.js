const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

// description
const getDescription = () => DB.description;

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

module.exports = {
  getDescription,
  getKnowledge,
  getEducation,
  getExperience,
  getBlog,
  getDownload,
};
