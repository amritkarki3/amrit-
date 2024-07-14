import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="type" source="typeField" />
        <TextInput label="recipient" source="recipient" />
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Edit>
  );
};
