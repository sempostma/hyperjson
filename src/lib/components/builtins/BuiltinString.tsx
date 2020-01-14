import React, { Component } from 'react';
import { register } from '../../component-registry';
import schema from '../../schemas/hojui-builtin-null.schema.json'

const DefaultStringInput: React.FC<{ children: undefined }> = ({ }) => (
  <input />
)

register({ type: "string", schema }, DefaultStringInput)
