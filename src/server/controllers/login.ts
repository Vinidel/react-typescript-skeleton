import User from '../models/userModel';
import Session from '../models/sessionModel';

export function login(req, res) {
  const user: User = req.body.user;
  return Session.create(user)
    .then((session) => {
      res.status(200).json({session, user: {firstName: user.firstName}});
    })
    .catch((err) => {
    console.log(err);
      res.status(400).json({err: {message: 'There was an error during login'}});
    });
}
