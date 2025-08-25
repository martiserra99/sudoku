import Element from '../generic/element';
import CompositeType from '../../type/specific/composite';
import { Size, Coords, Signal } from '../../types';
declare class Composite extends Element {
    private child;
    constructor(id: string, type: CompositeType);
    start(): void;
    measure(maxSize: Size): void;
    locate(coords: Coords): void;
    draw(ctx: CanvasRenderingContext2D): void;
    end(): void;
    signal(signal: Signal): void;
}
export default Composite;
//# sourceMappingURL=composite.d.ts.map