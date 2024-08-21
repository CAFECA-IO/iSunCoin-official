import { NextApiRequest, NextApiResponse } from 'next';
import { IPhase } from '@/interfaces/phase';
import axios from 'axios';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<IPhase | { error: string }>
) {
  if (request.method === 'GET') {
    try {
      const result = await axios.post(
        'https://mainnet.isuncoin.com/',
        {
          jsonrpc: '2.0',
          method: 'eth_blockNumber',
          params: [],
          id: 83,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return response.status(200).json(result.data);
    } catch (error) {
      return response.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }
}
