import React, { Component } from 'react';
import { register, registredComponents } from '../../component-registry';
import schema from '../../schemas/hojui-builtin-null.schema.json'

const DefaultFloat: React.FC<{ children: undefined, indentation: number }> = ({ indentation }) => {
  return (
    <input />
  )

}

register({ type: "float", schema }, DefaultFloat)
