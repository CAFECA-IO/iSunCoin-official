import { NextApiRequest, NextApiResponse } from 'next';
import { IPhase } from '@/interfaces/phase';

export default async function handler(request: NextApiRequest, response: NextApiResponse<IPhase>) {
  const dummyPhaseData: IPhase = {
    phase: 1,
    remainingBlocks: 592374,
    isDuringProposal: true,
  };

  if (request.method === 'GET') {
    response.status(200).json(dummyPhaseData);
  }
}
