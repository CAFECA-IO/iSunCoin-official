export interface IRealTimeData {
  totalIssuance: number;
  totalNodes: number;
  totalComputingPower: number;
  oneDayTransactions: number;
}

// Info:(20240827 - Julian) 畫地圖用
export interface IGlobalMiningData {
  name: string;
  countryCode: string;
  minedBlocks: number;
}

export const defaultRealTimeData: IRealTimeData = {
  totalIssuance: 0,
  totalNodes: 0,
  totalComputingPower: 0,
  oneDayTransactions: 0,
};
