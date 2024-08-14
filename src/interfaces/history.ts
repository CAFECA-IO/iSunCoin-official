export interface IHistory {
  id: number;
  phase: string;
  version: string;
  updateTimestamp: number;
  content: string;
}

export const dummyUpdateHistoryList: IHistory[] = [
  {
    id: 1,
    phase: '000001',
    version: '1.0.0',
    updateTimestamp: 1631184000,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Watashi no koi wa minami no kaze ni notte hashiru wa aoi kaze kitte hashire ano shima e. Anata to au tabi ni subete wo wasurete shimau no hashaida watashi wa onnanoko Atsui mune kikoeru deshou. Suhada ni kirakira sangoshou futarikkiri de nagasaretemo ii no. Anata ga suki. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 2,
    phase: '000002',
    version: '1.0.1',
    updateTimestamp: 1640184023,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    phase: '000003',
    version: '2.0.0',
    updateTimestamp: 1657184023,
    content: 'Hehe',
  },
  {
    id: 4,
    phase: '000004',
    version: '2.0.1',
    updateTimestamp: 1667189212,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Linm dews affeqiut er ao deiwt. Ut enim ad minim veniam, Hehe, some more content here. wfweff ewfweff, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Erale dew kyre dosax olids. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 5,
    phase: '000005',
    version: '2.0.2',
    updateTimestamp: 1683187291,
    content:
      'Voting Result Iste sed quia molestias vel reprehenderit ut qui consectetur. Neque nam unde quo omnis et perferendis quis dolores. Incidunt sunt ullam et qui ut id laborum sint. Aliquam dolorum velit quia. Ut rerum architecto animi est. Est modi error sit minima blanditiis omnis quo et atque. Incidunt at aliquid maiores quia qui ab nisi. Non corrupti qui soluta ipsam aperiam maxime facere. Aut voluptatem molestiae pariatur in non error aut. Harum ipsum perferendis error doloribus enim. Update progress Iste sed quia molestias vel reprehenderit ut qui consectetur. Neque nam unde quo omnis et perferendis quis dolores. Incidunt sunt ullam et qui ut id laborum sint. Aliquam dolorum velit quia. Ut rerum architecto animi est. Est modi error sit minima blanditiis omnis quo et atque. Incidunt at aliquid maiores quia qui ab nisi. Non corrupti qui soluta ipsam aperiam maxime facere. Aut voluptatem molestiae pariatur in non error aut. Harum ipsum perferendis error doloribus enim. Title Here 004 Iste sed quia molestias vel reprehenderit ut qui consectetur. Neque nam unde quo omnis et perferendis quis dolores. Incidunt sunt ullam et qui ut id laborum sint. Aliquam dolorum velit quia. Ut rerum architecto animi est. Est modi error sit minima blanditiis omnis quo et atque. Incidunt at aliquid maiores quia qui ab nisi. Non corrupti qui soluta ipsam aperiam maxime facere. Aut voluptatem molestiae pariatur in non error aut. Harum ipsum perferendis error doloribus enim.',
  },
];
