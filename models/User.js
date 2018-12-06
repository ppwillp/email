const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String
});

//mongoose.model('collection name', shcema name);
mongoose.model('users', userSchema);

