import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const PositionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="latitude" source="latitude" />
        <NumberInput label="longitude" source="longitude" />
      </SimpleForm>
    </Create>
  );
};
