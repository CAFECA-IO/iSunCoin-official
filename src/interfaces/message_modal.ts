export interface IMessageModal {
  title: string;
  message: string;
  confirmBtnText: string;
  confirmHandler: () => void;
}

export const defaultMessageModalData: IMessageModal = {
  title: 'Title',
  message: 'Message',
  confirmBtnText: 'Confirm',
  confirmHandler: () => {},
};
