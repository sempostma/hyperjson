type ReactComponent = React.Component | React.FC

export const registredComponents: {
    [hyperKey: string]: {
        descriptor: IHyperNodeDescriptor,
        component: ReactComponent
    } 
} = {}

export const register = (descriptor: IHyperNodeDescriptor, component: ReactComponent) => {
    registredComponents[descriptor.hyperKey] = {
        component,
        descriptor
    }
}

