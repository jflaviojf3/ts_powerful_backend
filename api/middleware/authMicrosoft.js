const MicrosoftStrategy = require('passport-microsoft').Strategy;
const passport = require('passport')

passport.use(new MicrosoftStrategy({
    // Standard OAuth2 options
    clientID: process.env.MICROSOFT_CLIENT_ID,
    clientSecret: process.env.MICROSOFT_CLIENT_ID,
    callbackURL: "http://localhost:3000/v1/auth/microsoft/callback",
    scope: ['user.read'],
    // Microsoft specific options
    // [Optional] The tenant for the application. Defaults to 'common'. 
    // Used to construct the authorizationURL and tokenURL
    //tenant: 'common',
    // [Optional] The authorization URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`
    //authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    // [Optional] The token URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`
    //tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
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
