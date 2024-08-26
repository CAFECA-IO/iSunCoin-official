import { NextApiRequest, NextApiResponse } from 'next';
import { IRealTimeData } from '@/interfaces/real_time_data';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<IRealTimeData>
) {
  const realTimeData: IRealTimeData = {
    totalIssuance: 856721,
    totalNodes: 47511,
    totalComputingPower: 2687145,
    oneDayTransactions: 540000,
  };

  if (request.method === 'GET') {
    response.status(200).json(realTimeData);
  }
}
