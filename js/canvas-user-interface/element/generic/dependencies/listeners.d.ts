import Events from "./events";
declare class Listeners {
    private events;
    constructor(events: Events);
    add(name: string, value: Function): void;
    remove(name: string, callback: Function): boolean;
    removeAll(name: string): void;
}
export default Listeners;
//# sourceMappingURL=listeners.d.ts.map