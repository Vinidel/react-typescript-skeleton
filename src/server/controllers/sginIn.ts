import User from '../models/userModel';

export function signIn(req, res) {
  const user = parseBody(req.body.user);
  user.save()
    .then((user)=> {
      res.status(200).json(user)
    })
    .catch(err => res.status(400).json({err: err.message}))
}

function parseBody(reqUser): User {
  const user = new User();
  user.firstName = reqUser.firstName;
  user.lastName = reqUser.lastName;
  user.email = reqUser.email;
  user.password = reqUser.password;
  user.dob = new Date();
  return user;
}