import { SortOrder } from "../../util/SortOrder";

export type PositionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
};
