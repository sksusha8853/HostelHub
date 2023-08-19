const mongoose = require('mongoose')

const connectToMongoDB = async () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Database connected");
        })
        .catch((err) => {
            console.log("Database connection failed. Server not started");
            console.log(err);
        });
};

module.exports = connectToMongoDB;