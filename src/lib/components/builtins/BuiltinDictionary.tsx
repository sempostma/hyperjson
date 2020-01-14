import React, { Component } from 'react';
import { register, registredComponents } from '../../component-registry';
import schema from '../../schemas/hojui-builtin-object.schema.json'

type ItemsType = {
  type: string
}

type KeyValuePairs = { [key: string]: any }

type Props = { indentation: number, children: undefined, value: KeyValuePairs, descriptor: { items: ItemsType }, setValue: (value: KeyValuePairs) => void }

const DefaultDictionary: React.FC<Props>
  = ({ value, setValue, descriptor,  }) => {

    console.log(descriptor)
    const { component: Component } = registredComponents[descriptor.items.type]

    const items = Object.keys(value).map(key => {
      const TextComponent = registredComponents.text.component
      const StringComponent = registredComponents.string.component
      const childValue = value[key]

      const setChildValue = (newChildValue: any) => {
        const newValue = { ...value, [key]: newChildValue }
        setValue(newValue)
      }

      return (
        <div key={key}>
          <StringComponent value={key} />
          <Component value={childValue} setValue={setChildValue} schema={schema} />
        </div>
      )
    })

    return (
      <>
          <h6>Dictionary</h6>

        {items}
      </>
    )

  }

register({ type: "dictionary", schema }, DefaultDictionary)
