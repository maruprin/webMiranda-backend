const passport = require('passport');
const app = require('../app');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const userInformation = {
    email: 'maruprin@mymail.com',
    password: 1234
}
passport.use(
    'login',
    new localStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        try {
          if (email === userInformation.email && password === userInformation.password) {
            return done(null, userInformation, { message: 'Logged in Successfully' });
          }
          return done(null, false, { message: 'Credenciales incorrectas' });
        } catch (error) {
          return done(error);
        }
      }
    )
  );


passport.use(
  new JWTstrategy(
    {
      secretOrKey: 'TOP_SECRET',
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

