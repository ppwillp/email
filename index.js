const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');

require('./services/passport');

const keys = require('./config/keys');
const db = require('./config/database');

const PORT = process.env.PORT || 5000;

//ROUTES
require('./routes/authRoutes')(app);

//passport config
//require('./services/passport')(passport);

//DB
/*mongodb://<dbuser>:<dbpassword>@ds143990.mlab.com:43990/email-dev*/
//mongoose.Promise = global.Promise;
mongoose.connect(db.mongoURI, { useNewUrlParser: true})
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

require('./models/User');
const User = mongoose.model('users');

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});