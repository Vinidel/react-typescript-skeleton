import User from '../models/userModel';

export async function checkPassword(req, res, next) {
  const {login} = req.body;
  try {
    req.body.user = await User.checkPassword(login.email, login.password);
    return next();
  } catch (ex) {
    console.log('Error');
    res.status(400).json({message: 'Invalid login'});
  }
}
