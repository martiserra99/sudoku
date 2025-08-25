import Element from "../element";
type InnerValues = {
    properties: Map<string, any>;
    functions: Map<string, Function>;
};
declare class Inner {
    private element;
    private properties;
    private functions;
    constructor(element: Element, inner: InnerValues);
    private setProperties;
    private setFunctions;
    set(name: string, value: any): void;
    get(name: string): any;
    fun(name: string, value: Function): void;
    call(name: string, ...params: any[]): any;
}
export default Inner;
//# sourceMappingURL=inner.d.ts.map