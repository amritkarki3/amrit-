export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField: string | null;
  recipient: string | null;
  content: string | null;
};
