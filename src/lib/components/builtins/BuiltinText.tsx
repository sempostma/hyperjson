import React, { Component } from 'react';
import { register } from '../../component-registry';
import schema from '../../schemas/hojui-builtin-null.schema.json'

const DefaultText: React.FC<{ indentation: number }> = ({ children, indentation }) => (
  <>{children}</>
)

register({ type: "text", schema }, DefaultText)
