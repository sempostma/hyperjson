import React, { Component } from 'react';
import { register, registredComponents } from '../../component-registry';
import schema from '../../schemas/hojui-builtin-object.schema.json'
import { UnknownhojsonuiKey } from '../../errors';

type KeyValuePairs = { [key: string]: any }
type Item = {
  name: string,
  key: string,
  child: {
    type: string,
    schema: KeyValuePairs
  }
}

const DefaultObjectInput: React.FC<{ children: undefined, value: KeyValuePairs, descriptor: { items: Item[] }, setValue: (value: KeyValuePairs) => void }>
  = ({ value, setValue, descriptor }) => {
    const items = descriptor.items.map(({ name, child, key }) => {
      const TextComponent = registredComponents.text.component

      if (!(child.type in registredComponents)) {
        throw new UnknownhojsonuiKey(`Unknown json ui key "${child.type}"`)
      }

      const { component: Component } = registredComponents[child.type]
      const childValue = value[key]

      const setChildValue = (newChildValue: any) => {
        const newValue = { ...value, [key]: newChildValue }
        setValue(newValue)
      }

      return (
        <div key={key}>
          <TextComponent>{name}</TextComponent>
          <Component value={childValue} setValue={setChildValue} descriptor={child} />
        </div>
      )
    })

    return <>{items}</>
  }

register({ type: "object", schema }, DefaultObjectInput)
