export type EmailTemplate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  subject: string | null;
  body: string | null;
};
