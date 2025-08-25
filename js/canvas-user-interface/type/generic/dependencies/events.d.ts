import { Check } from "../../../types";
declare class Events {
    private events;
    constructor();
    [Symbol.iterator](): MapIterator<[string, {
        check: Check;
        callbacks: Function[];
    }]>;
    set(name: string, check: Check): void;
    get(name: string): {
        check: Check;
        callbacks: Function[];
    } | undefined;
    private add;
    private click;
    private mousedown;
    private mouseup;
    private mouseenter;
    private mouseleave;
    private mousemove;
    private keydown;
    private keyup;
}
export default Events;
//# sourceMappingURL=events.d.ts.map