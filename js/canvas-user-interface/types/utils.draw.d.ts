import { Coords, Size } from '../index';
type Border = {
    size: number;
    color: string;
};
type Corner = {
    type: string;
    size: number;
};
declare const draw: {
    area(ctx: CanvasRenderingContext2D, coords: Coords, size: Size, background: string, border: Border, corner: Corner): void;
    _areaPath(ctx: CanvasRenderingContext2D, coords: Coords, size: Size, corner: Corner): void;
    _leftEdgePath(ctx: CanvasRenderingContext2D, coords: Coords, corner: Corner): void;
    _topLeftCornerPath(ctx: CanvasRenderingContext2D, coords: Coords, corner: Corner): void;
    _topEdgePath(ctx: CanvasRenderingContext2D, coords: Coords, size: Size, corner: Corner): void;
    _topRightCornerPath(ctx: CanvasRenderingContext2D, coords: Coords, size: Size, corner: Corner): void;
    _rightEdgePath(ctx: CanvasRenderingContext2D, coords: Coords, size: Size, corner: Corner): void;
    _bottomRightCornerPath(ctx: CanvasRenderingContext2D, coords: Coords, size: Size, corner: Corner): void;
    _bottomEdgePath(ctx: CanvasRenderingContext2D, coords: Coords, size: Size, corner: Corner): void;
    _bottomLeftCornerPath(ctx: CanvasRenderingContext2D, coords: Coords, size: Size, corner: Corner): void;
    rectangle(ctx: CanvasRenderingContext2D, coords: Coords, size: Size, background: string): void;
    text(ctx: CanvasRenderingContext2D, clipCoords: Coords, clipSize: Size, textCoords: Coords, text: string, font: {
        weight: string;
        size: number;
        family: string;
    }, color: string): void;
    image(ctx: CanvasRenderingContext2D, coords: Coords, size: Size, image: CanvasImageSource): void;
};
export default draw;
//# sourceMappingURL=utils.draw.d.ts.map