export interface IEmailBody {
  receiver: string;
  subject: string;
  comment: string;
}

export interface IEmailConfig {
  service: string;
  auth: {
    user: string;
    pass: string;
  };
}
