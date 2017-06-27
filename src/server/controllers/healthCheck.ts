export function healthCheck(req, res) {
  res.status(200).json({message: 'I am healthy'});
}
