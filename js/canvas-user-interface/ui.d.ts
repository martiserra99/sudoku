import Element from './element/generic/element';
declare class UI {
    private canvas;
    private ctx;
    private width;
    private height;
    private resizeListener;
    private started;
    private animationId;
    private mouseSignals;
    private keySignals;
    element: Element | null;
    constructor(canvas: string | HTMLCanvasElement);
    private setCanvas;
    private setCanvasSize;
    private setCanvasSizeOnResize;
    start(element: Element): void;
    private insertElement;
    private startAnimation;
    private updateUI;
    private getMaxSize;
    private getCoords;
    setupSignals(): void;
    setupMouseSignals(): void;
    private getMouseSignalTypes;
    private getMouseSignalData;
    setupKeySignals(): void;
    private getKeySignalTypes;
    private getKeySignalData;
    end(): void;
    private removeSignals;
    private removeMouseSignals;
    private removeKeySignals;
    private stopAnimation;
    removeElement(): void;
    private clearCanvas;
}
export default UI;
//# sourceMappingURL=ui.d.ts.map