import React, { Component, useState, ReactNode } from 'react';
import { registredComponents } from '../component-registry';

const TextWrapper: React.FC<{}> = ({ children }) => (
    <>{children}</>
)


const InputWrapper: React.FC<{ children: undefined }> = ({  }) => (
    <input  />
)

type Props = {
    hyperJson: { [key: string]: IHyperNodeDescriptor },
}

const HyperJson: React.FC<Props> = props => {
    
    return (
        
    )
}

