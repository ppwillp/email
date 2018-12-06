const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

//const db = require('./config/database');

const PORT = process.env.PORT || 5000;

//DB
mongoose.connect(keys.mongoURI, { useNewUrlParser: true})
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

//ROUTES
require('./routes/authRoutes')(app);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});