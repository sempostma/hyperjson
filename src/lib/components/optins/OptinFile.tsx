import React, { Component } from 'react';
import { register } from '../../component-registry';
import schema from '../../schemas/hojui-optin-string.react-jsonschema-form.json'

type Props = { 
  children: undefined, 
  value: any, 
  setValue: (value: any) => void, 
  descriptor: { 
    multiple: boolean
  } 
}

const DefaultStringInput: React.FC<Props> = ({ descriptor, setValue, value }) => {
    const { multiple } = descriptor;
    return (
      <input type="file" multiple={multiple} />
    )
  }

register({ type: "react-jsonschema-form", schema }, DefaultStringInput)
