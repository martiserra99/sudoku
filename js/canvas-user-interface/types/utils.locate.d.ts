type Coords = {
    start: number;
    end: number;
};
declare const locate: {
    alignStart(coords: Coords, _: number, margin?: {
        start: number;
        end: number;
    }): number;
    alignMiddle(coords: Coords, length: number, margin?: {
        start: number;
        end: number;
    }): number;
    alignEnd(coords: Coords, length: number, margin?: {
        start: number;
        end: number;
    }): number;
};
export default locate;
//# sourceMappingURL=utils.locate.d.ts.map