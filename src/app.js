const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('ssl/cert.key'),
  cert: fs.readFileSync('ssl/cert.pem'),
};
const allowedOrigin = [
  '80.141.83.124',
  'https://mariusz.bialas.tech',
  'https://mariusz.bialas.tech'
];

const v1WorkoutRouter = require('./v1/routes/workoutRoutes');
const v2Router = require('./v2/routes/aboutMeRoutes');

const server = https.createServer(options, app);
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(
  cors({
    origin: allowedOrigin,
    methods: 'GET, POST, PATCH, DELETE',
  })
);

// ROUTES
app.use('/v1', v1WorkoutRouter);
app.use('/v2', v2Router);

// INIT
app.listen(PORT, (err) =>
  console.log(err || `API is listening on port ${PORT}`)
);
