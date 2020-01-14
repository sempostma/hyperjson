import React, { Component } from 'react';
import { register, registredComponents } from '../../component-registry';
import schema from '../../schemas/hojui-builtin-null.schema.json'

const DefaultBooleanInput: React.FC<{ children: undefined, indentation: number, value: boolean, setValue: (value: boolean) => void }>
  = ({ value, setValue, indentation }) => {
    return (<input type="checkbox" checked={value} onChange={e => setValue(e.target.checked)} />)
  }

register({ type: "boolean", schema }, DefaultBooleanInput)
