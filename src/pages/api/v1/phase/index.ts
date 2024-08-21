import { NextApiRequest, NextApiResponse } from 'next';
import { IPhase } from '@/interfaces/phase';

export default async function handler(request: NextApiRequest, response: NextApiResponse<IPhase>) {
  const dummyPhaseData: IPhase = {
    blockNumber: 3273629,
  };

  if (request.method === 'GET') {
    response.status(200).json(dummyPhaseData);
  }
}
