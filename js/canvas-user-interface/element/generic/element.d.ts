import Inner from "./dependencies/inner";
import Custom from "./dependencies/custom";
import Events from "./dependencies/events";
import Listeners from "./dependencies/listeners";
import LayoutParams from "./dependencies/layout-params";
import UI from "../../ui";
import Layout from "../../element/specific/layout";
import ElementType from "../../type/generic/element";
import { Size, Coords, Signal } from "../../types";
declare class Element {
    id: string;
    size: Size;
    coords: Coords;
    inner: Inner;
    custom: Custom;
    events: Events;
    listeners: Listeners;
    uiParent?: UI;
    layoutParent?: Layout;
    private properties;
    private functions;
    private layoutParameters?;
    protected lifecycle: Map<string, Function>;
    get layoutParams(): LayoutParams;
    constructor(id: string, type: ElementType);
    private setProperties;
    private setFunctions;
    private setLifecycle;
    set(name: string, value: any): void;
    get(name: string): any;
    fun(name: string, value: Function): void;
    call(name: string, ...params: any[]): any;
    insertToUI(uiParent: UI): void;
    removeFromUI(): void;
    insertToLayout(layoutParent: Layout): void;
    removeFromLayout(): void;
    private resetPlacementData;
    start(): void;
    measure(maxSize: {
        width: number;
        height: number;
    }): void;
    locate(coords: {
        x: number;
        y: number;
    }): void;
    draw(ctx: CanvasRenderingContext2D): void;
    end(): void;
    signal(signal: Signal): void;
}
export default Element;
//# sourceMappingURL=element.d.ts.map