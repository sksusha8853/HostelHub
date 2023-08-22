const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const connectToMongoDB = require('./db');
connectToMongoDB();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api', require("./routes/CreateStudent"));
app.use('/api', require("./routes/CreateStaff"));

app.listen(process.env.API_PORT, () => {
    console.log(`App listening on port ${process.env.API_PORT}`);
});
