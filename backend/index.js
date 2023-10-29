const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(cors());
app.use(express.json());

dotenv.config();

const connectToMongoDB = require('./db');
connectToMongoDB();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api', require("./routes/CreateStudent"));
app.use('/api', require("./routes/CreateAnnouncement"));
app.use('/api', require("./routes/CreateStaff"));
app.use('/api', require("./routes/Login"));
app.use('/api', require("./routes/CreateComplaint"));
app.use('/api', require("./routes/CreateSuggestion"));
app.use('/api', require("./routes/GetAllComplaints"));
app.use('/api', require("./routes/GetAllSuggestions"));
app.listen(process.env.API_PORT, () => {
    console.log(`App listening on port ${process.env.API_PORT}`);
});
