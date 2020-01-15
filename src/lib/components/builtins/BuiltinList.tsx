import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { register, registredComponents } from '../../component-registry';
import schema from '../../schemas/hojui-builtin-list.schema.json'
import { UnknownhojsonuiKey } from '../../errors';
import { IHojuiDescriptor } from '../../types/hojui-descriptor';

type KeyValuePairs = { [key: string]: any }
type Item = {
    name: string,
    key: string,
    child: {
        type: string,
        schema: KeyValuePairs
    }
}

type Descriptor = {
    items: {
        type: string
    }
}

const SortableItem = SortableElement(({ value, child, setValue }: any) => {
    const TextComponent = registredComponents.text.component
    const { component: Component } = registredComponents[child.type]

    return (<Component value={value} setValue={setValue} descriptor={child} />)

});

const SortableList = SortableContainer(({ items, descriptor, setValue }: { items: any[], descriptor: Descriptor, setValue: (value: any[]) => void }) => {
    const child = descriptor.items

    if (!(child.type in registredComponents)) {
        throw new UnknownhojsonuiKey(`Unknown json ui key "${child.type}"`)
    }

    return (
        <ul>
            {items.map((value, index) => {
                return (
                    <SortableItem key={`item-${value}`} child={child} index={index} value={value} setValue={setValue} />
                )
            })}
        </ul>
    );
});

const List: React.FC<{ children: undefined, value: any[], descriptor: Descriptor, setValue: (value: any[]) => void }>
    = ({ value, setValue, descriptor }) => {
        const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {
            setValue(arrayMove(value, oldIndex, newIndex))
        };

        return <SortableList descriptor={descriptor} items={value} onSortEnd={onSortEnd} setValue={setValue} />;
    }

register({ type: 'list', schema }, List)
