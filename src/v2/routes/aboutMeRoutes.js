const express = require('express');
const router = express.Router();
const aboutMeController = require('../controllers/aboutMeController');

// main route
router.get('/', aboutMeController.getAboutMe);

// description route
router.get('/description', aboutMeController.getDescription);


// knowledge route
router.get('/knowledge', aboutMeController.getKnowledge);


// education route
router.get('/education', aboutMeController.getEducation);


// expierience route
router.get('/expierience', aboutMeController.getExperience);


// blog route
router.get('/blog', aboutMeController.getBlog);


// download route
router.get('/download', aboutMeController.getDownload);

module.exports = router;