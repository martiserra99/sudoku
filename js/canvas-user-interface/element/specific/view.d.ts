import Element from '../generic/element';
import ViewType from '../../type/specific/view';
import { Size, Coords } from '../../types';
declare class View extends Element {
    constructor(id: string, type: ViewType);
    measure(maxSize: Size): void;
    private setSize;
    locate(coords: Coords): void;
    private setCoords;
    draw(ctx: CanvasRenderingContext2D): void;
    private drawItself;
}
export default View;
//# sourceMappingURL=view.d.ts.map