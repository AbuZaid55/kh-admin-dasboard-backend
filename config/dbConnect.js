const mongoose = require('mongoose');


// Function to connect to MongoDB
module.exports.dbConnect=async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB using Mongoose');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}


