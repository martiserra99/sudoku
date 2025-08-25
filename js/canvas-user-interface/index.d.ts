import UI from './ui';
import ViewType from './type/specific/view';
import LayoutType from './type/specific/layout';
import CompositeType from './type/specific/composite';
import View from './element/specific/view';
import Layout from './element/specific/layout';
import Composite from './element/specific/composite';
export { default as ElementType } from './type/generic/element';
export { default as Element } from './element/generic/element';
export { Size, Coords, Signal, Check } from './types';
export { State } from './element/generic/dependencies/events';
export { UI, ViewType, LayoutType, CompositeType, View, Layout, Composite };
type CanvasUI = {
    ui: {
        new: (selector: string | HTMLCanvasElement) => UI;
    };
    view: {
        newType: (name: string) => ViewType;
        new: (id: string, name: string) => View;
    };
    layout: {
        newType: (name: string) => LayoutType;
        new: (id: string, name: string) => Layout;
    };
    composite: {
        newType: (name: string) => CompositeType;
        new: (id: string, name: string) => Composite;
    };
};
declare const canvasUI: CanvasUI;
export default canvasUI;
//# sourceMappingURL=index.d.ts.map