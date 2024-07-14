import { SortOrder } from "../../util/SortOrder";

export type EmailTemplateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  subject?: SortOrder;
  body?: SortOrder;
};
