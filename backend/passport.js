const passport = require("passport");
const Student = require("./models/Student");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/register",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      try {
        let Student = await Student.findOne({ email: profile.email });
        if (!Student) {
            Student = new Student({
            username: profile.email,
            email: profile.email,
            googleId: profile.id,
            role: "Student",
          });
        } else {
            Student.googleId = profile.id;
        }
        await Student.save();
        return done(null, Student);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: process.env.APP_ID,
//       clientSecret: process.env.APP_SECRET,
//       callbackURL: "http://localhost:5000/auth/facebook/register",
//     },
//     async function (accessToken, refreshToken, profile, done) {
//       try {
//         let user = await User.findOne({ facebookId: profile.id });
//         if (!user) {
//           user = new User({
//             username: profile.displayName,
//             facebookId: profile.id,
//             role: "user",
//           });
//           await user.save();
//         }
//         return done(null, user);
//       } catch (err) {
//         return done(err);
//       }
//     }
//   )
// );