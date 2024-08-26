export interface IRealTimeData {
  totalIssuance: number;
  totalNodes: number;
  totalComputingPower: number;
  oneDayTransactions: number;
}

export const defaultRealTimeData: IRealTimeData = {
  totalIssuance: 0,
  totalNodes: 0,
  totalComputingPower: 0,
  oneDayTransactions: 0,
};
