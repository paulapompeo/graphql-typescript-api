import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://dbUser:dbUser123@cluster0.xwfe0.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true   
})

// export default

