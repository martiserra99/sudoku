import Element from "../element";
declare class Custom {
    private element;
    private properties;
    private functions;
    constructor(element: Element);
    set(name: string, value: any): void;
    get(name: string): any;
    fun(name: string, value: Function): void;
    call(name: string, ...params: any[]): any;
}
export default Custom;
//# sourceMappingURL=custom.d.ts.map