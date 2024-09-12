import { NextApiRequest, NextApiResponse } from 'next';
import { IHistoryData } from '@/interfaces/history';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<IHistoryData>
) {
  const historyData: IHistoryData = {
    totalPages: 0,
    historyList: [],
  };

  if (request.method === 'GET') {
    response.status(200).json(historyData);
  }
}
