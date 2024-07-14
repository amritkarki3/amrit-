import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmailTemplateWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  subject?: StringNullableFilter;
  body?: StringNullableFilter;
};
