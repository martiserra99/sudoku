import Element from "../generic/element";
import LayoutType from "../../type/specific/layout";
import { Size, Coords, Signal } from "../../types";
declare class Layout extends Element {
    children: Element[];
    childLayoutParams: Map<string, any>;
    constructor(id: string, type: LayoutType);
    private setChildLayoutParams;
    start(): void;
    measure(maxSize: Size): void;
    private setChildrenSizes;
    private sortChildrenToMeasure;
    private getChildMaxSize;
    private setSize;
    locate(coords: Coords): void;
    private setChildrenCoords;
    private sortChildrenToLocate;
    private getChildCoords;
    private setCoords;
    draw(ctx: CanvasRenderingContext2D): void;
    private drawItself;
    private drawChildren;
    private sortChildrenToDraw;
    end(): void;
    signal(signal: Signal): void;
    insert(child: Element): void;
    remove(child: Element): void;
    removeAll(): void;
    find(id: string, direct?: boolean): Element | null;
}
export default Layout;
//# sourceMappingURL=layout.d.ts.map