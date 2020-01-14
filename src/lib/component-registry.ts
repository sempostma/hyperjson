import { IHojuiDescriptor } from "./types/hojui-descriptor";

type ReactComponent = React.Component | React.FC | Element | any

export const registredComponents: {
    [hyperKey: string]: {
        component: ReactComponent,
        descriptor: IHojuiDescriptor
    };
} = {};

export const register = (descriptor: IHojuiDescriptor, component: ReactComponent) => {
    registredComponents[descriptor.type] = {
        component,
        descriptor
    }
}

