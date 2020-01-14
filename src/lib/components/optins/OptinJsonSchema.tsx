import React, { Component } from 'react';
import { register } from '../../component-registry';
import schema from '../../schemas/hojui-optin-string.react-jsonschema-form.json'
import Form from 'react-jsonschema-form'

type KeyValuePairs = { [key: string]: any }
type Props = { 
  children: undefined, 
  value: KeyValuePairs, 
  setValue: (value: KeyValuePairs) => void, 
  descriptor: { 
    uiSchema: KeyValuePairs, 
    jsonSchema: KeyValuePairs 
  } 
}

const DefaultStringInput: React.FC<Props> = ({ descriptor, setValue, value }) => {
    const { jsonSchema, uiSchema } = descriptor;
    return (
      <Form formData={value} onChange={e => setValue(e.schema)} schema={jsonSchema} uiSchema={uiSchema} ><span /></Form>
    )
  }

register({ type: "react-jsonschema-form", schema }, DefaultStringInput)
