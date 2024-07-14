import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotificationWhereInput = {
  id?: StringFilter;
  typeField?: StringNullableFilter;
  recipient?: StringNullableFilter;
  content?: StringNullableFilter;
};
