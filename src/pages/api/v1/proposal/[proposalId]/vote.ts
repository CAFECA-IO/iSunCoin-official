import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === 'POST') {
    response.status(200).json({ success: true });
  }
}
