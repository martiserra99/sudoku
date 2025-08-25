declare class Inner {
    properties: Map<string, any>;
    functions: Map<string, Function>;
    constructor();
    set(name: string, value: any): void;
    get(name: string): any;
    fun(name: string, value: Function): void;
    call(name: string, ...params: any[]): any;
}
export default Inner;
//# sourceMappingURL=inner.d.ts.map