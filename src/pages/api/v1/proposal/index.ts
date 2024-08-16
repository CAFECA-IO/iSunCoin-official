import { IProposal } from '@/interfaces/proposal';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<IProposal[]>
) {
  const dummyProposals: IProposal[] = [
    {
      id: 1,
      title: 'Proposal 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros nec auctor tincidunt',
      agreeCount: 10,
      disagreeCount: 5,
    },
    {
      id: 2,
      title: 'Proposal 2',
      content:
        'Consequatur praesentium non atque modi. Ullam distinctio in rerum illo autem et exercitationem quis. Sint sed voluptate ut consequuntur. Neque sunt et. Vero ea enim. Consequatur praesentium non atque modi. Ullam distinctio in rerum illo autem et exercitationem quis. Sequi sed nobis expedita eum.',
      agreeCount: 12103,
      disagreeCount: 123,
    },
    {
      id: 3,
      title: 'Proposal 3',
      content: 'Hey',
      agreeCount: 931,
      disagreeCount: 1234,
    },
    {
      id: 4,
      title: 'Proposal 4',
      content:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      agreeCount: 4353,
      disagreeCount: 20,
    },
    {
      id: 5,
      title: 'Proposal 5',
      content:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua exercitationem quis. Sint sed voluptate ut consequuntur. Neque sunt et. Vero ea enim. Sequi sed nobis expedita eum.',
      agreeCount: 123,
      disagreeCount: 123,
    },
  ];

  if (request.method === 'GET') {
    response.status(200).json(dummyProposals);
  }
}
