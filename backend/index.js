const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const passport = require("passport");
const cookieSession = require("cookie-session");
// const authRoutes = require("./routes/authRoutes");
// const mainRoutes = require("./routes/mainRoutes");
dotenv.config();
require("./passport");

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


const connectToMongoDB = require('./db');
connectToMongoDB();

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.use(
  cookieSession({
    name: "google-auth-session",
    keys: ["key1", "key2"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require("./routes/CreateStudent"));
app.use('/api', require("./routes/CreateStaff"));
app.use('/api', require("./routes/Login"));
app.use('/api', require("./routes/IsLoggedIn"));
app.use('/api', require("./routes/GoogleLogin"));
app.use('/api', require("./routes/Success"));
app.use('/api', require("./routes/GoogleRedirect"));
app.use('/api', require("./routes/CreateComplaint"));
app.use('/api', require("./routes/CreateSuggestion"));
app.use('/api', require("./routes/CreateAnnouncement"));
app.use('/api', require("./routes/GetAllComplaints"));
app.use('/api', require("./routes/GetAllSuggestions"));
app.use('/api', require("./routes/DeleteComplaint"));
app.use('/api', require("./routes/DeleteSuggestion"));
app.use('/api', require("./routes/DeleteAnnouncement"));
app.listen(process.env.API_PORT, () => {
  console.log(`App listening on port ${process.env.API_PORT}`);
});
