type DesiredLength = 'auto' | {
    unit: string;
    value: number;
};
type DesiredSize = {
    width: DesiredLength;
    height: DesiredLength;
};
type Font = {
    weight: string;
    size: number;
    family: string;
};
declare const measure: {
    length(desired: null | number, max: number, auto?: () => number): number;
    availableLength(desired: number | null, max: number): number;
    desiredLength(length: DesiredLength, max: number): number | null;
    size(desired: {
        width: number | null;
        height: number | null;
    }, max: {
        width: number;
        height: number;
    }, auto?: {
        width: () => number;
        height: () => number;
    }): {
        width: number;
        height: number;
    };
    availableSize(desired: {
        width: number | null;
        height: number | null;
    }, max: {
        width: number;
        height: number;
    }): {
        width: number;
        height: number;
    };
    desiredSize(size: DesiredSize, max: {
        width: number;
        height: number;
    }): {
        width: number | null;
        height: number | null;
    };
    textSize(text: string, font: Font): {
        width: number;
        height: number;
    };
};
export default measure;
//# sourceMappingURL=utils.measure.d.ts.map