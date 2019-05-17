const mongoose = require('mongoose');
mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

module.exports=db