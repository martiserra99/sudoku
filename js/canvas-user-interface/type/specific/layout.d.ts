import ElementType, { ElementLifecycle } from "../../type/generic/element";
declare class LayoutType extends ElementType {
    layoutParams: LayoutParams;
    constructor(name: string);
    protected getLifecycle(): LayoutLifecycle;
}
declare class LayoutLifecycle extends ElementLifecycle {
    protected setFunctions(): void;
}
declare class LayoutParams {
    private layoutParams;
    constructor();
    [Symbol.iterator](): MapIterator<[string, any]>;
    set(name: string, value: any): void;
}
export default LayoutType;
//# sourceMappingURL=layout.d.ts.map