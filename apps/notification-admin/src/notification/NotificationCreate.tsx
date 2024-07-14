import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="type" source="typeField" />
        <TextInput label="recipient" source="recipient" />
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Create>
  );
};
