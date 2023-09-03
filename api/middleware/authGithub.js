const GitHubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/v1/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, cd) {
      return cd(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
