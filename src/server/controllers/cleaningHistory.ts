function getHistory(id: string): Array<any> {
  const history = [{
    id,
    status: 'cleaned',
    date: new Date().toISOString(),
    person: {
      name: 'Vinicius'
    }
  },
    {
      id,
      status: 'cleaned',
      date: new Date().toISOString(),
      person: {
        name: 'Gabi'
      }
    },
    {
      id,
      status: 'not cleaned',
      date: new Date().toISOString(),
      person: {
        name: 'Daniel'
      }
    }];

  return history;
}


export function cleaningHistory(req, res) {
  const id = req.params.id;
  res.status(200).json(getHistory(id));
}
