import React, { Component, useState, ReactNode } from 'react';
import { registredComponents, register } from '../component-registry';
import { IHojuiDescriptor } from '../types/hojui-descriptor';
import { UnknownhojsonuiKey } from '../errors';

import './builtins/BuiltinBoolean'
import './builtins/BuiltinFloat'
import './builtins/BuiltinString'
import './builtins/BuiltinText'
import './builtins/BuiltinObject'
import './builtins/BuiltinDictionary'
import './builtins/BuiltinList'

type IHojuiData = any

type Props = {
    descriptor: IHojuiDescriptor,
    value: IHojuiData,
    setValue: (value: IHojuiData) => void
}

const Hojui: React.FC<Props> = ({ descriptor, value, setValue }: Props) => {
    if (descriptor.type in registredComponents) {
        const { component: Component } = registredComponents[descriptor.type]
        return <Component indentation={0} descriptor={descriptor} value={value} setValue={setValue} />
    } else {
        throw new UnknownhojsonuiKey(`"${descriptor.type}" is not a registered Hojui type`)
    }
}

export default Hojui

