import TypeEvents from "../../../type/generic/dependencies/events";
import { Check } from "../../../types";
type Event = {
    check: Check;
    state: State;
    callbacks: Function[];
};
declare class Events {
    private events;
    constructor(events: TypeEvents);
    private setEvents;
    [Symbol.iterator](): MapIterator<[string, Event]>;
    get(name: string): Event | undefined;
}
export declare class State {
    private keys;
    constructor();
    set(name: string, value: any): void;
    get(name: string, value: any): any;
    del(name: string): void;
    has(name: string): boolean;
}
export default Events;
//# sourceMappingURL=events.d.ts.map