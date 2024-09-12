import { IProposal } from '@/interfaces/proposal';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<IProposal[]>
) {
  if (request.method === 'GET') {
    response.status(200).json([]);
  }
}
