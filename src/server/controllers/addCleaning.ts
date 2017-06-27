export function addCleaning(req, res)  {
  if(req.body === {}) {
    return res.status(400).json({message: 'Empty payload'});
  }
  else {
    return res.status(200).json({message: 'Added'});
  }
}
