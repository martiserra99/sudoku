import Events from "./dependencies/events";
import Inner from "./dependencies/inner";
declare class ElementType {
    name: string;
    properties: Map<string, any>;
    functions: Map<string, Function>;
    lifecycle: ElementLifecycle;
    inner: Inner;
    events: Events;
    constructor(name: string);
    protected getLifecycle(): ElementLifecycle;
    set(name: string, value: any): void;
    fun(name: string, value: Function): void;
}
export declare class ElementLifecycle {
    protected lifecycle: Map<string, Function>;
    constructor();
    protected setFunctions(): void;
    [Symbol.iterator](): MapIterator<[string, Function]>;
    set(name: string, value: Function): void;
}
export default ElementType;
//# sourceMappingURL=element.d.ts.map