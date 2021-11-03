import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default function count(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    axios
      .get<{ count: number }>('https://api.buttondown.email/v1/subscribers', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${process.env.BUTTONDOWN_TOKEN}`,
        },
      })
      .then((response) => res.status(200).json({ count: response.data.count }))
      .catch(() => res.status(500).json({ error: 'Something was wrong' }));
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
