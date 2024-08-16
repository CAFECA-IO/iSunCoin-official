export interface IHistory {
  id: number;
  phase: string;
  version: string;
  updateTimestamp: number;
  content: string;
}

// Info: (20240816 - Julian) 包含總頁數
export interface IHistoryData {
  totalPages: number;
  historyList: IHistory[];
}
