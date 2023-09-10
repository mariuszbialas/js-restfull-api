const express = require('express');
const bodyParser = require('body-parser');

const v1WorkoutRouter = require('./v1/routes/workoutRoutes');
const v2Router = require('./v2/routes/aboutMeRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// ROUTES
app.use('/v1', v1WorkoutRouter);
app.use('/v2', v2Router );


// INIT
app.listen(PORT, err => console.log(err || `API is listening on port ${PORT}`));