const mongoose = require('mongoose');
const config = require('config') // import the configuration package
const db = config.get('mongoURI'); // get the mongodb uri



const Connect= async ()=>{
  try {
    
    await mongoose.connect(db,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:true
    });

    console.log('Database connected to MongoDB Atlas')

  } catch (error) {
      console.log('Database connection failed with server')
      process.exit(1)
  }
}

 

module.exports = Connect;
