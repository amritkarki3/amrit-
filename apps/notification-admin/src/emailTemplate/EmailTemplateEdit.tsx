import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EmailTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="subject" source="subject" />
        <TextInput label="body" multiline source="body" />
      </SimpleForm>
    </Edit>
  );
};
