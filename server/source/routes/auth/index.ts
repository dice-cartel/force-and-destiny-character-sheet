import * as express from 'express';
import passport from 'passport';
const routes = express.Router();

routes.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

routes.get('/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
    session: true
  }));

routes.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/' // maybe /login-failed in the future
  }), (req, res) => {
    res.redirect('/home');
  });

module.exports = routes;
export {}