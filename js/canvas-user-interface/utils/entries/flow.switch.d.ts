import type { ItemEntries, FlowEntries, SwitchEntries } from "../../types/flow/entries";
import type { Position } from "../../types/flow/position";
/**
 * Creates a `SwitchEntries` object.
 *
 * @returns The created `SwitchEntries` object.
 */
export declare function create(): FlowEntries;
/**
 * Clones a `SwitchEntries` object.
 *
 * @param flow A `SwitchEntries` object.
 * @returns The cloned `SwitchEntries` object.
 */
export declare function clone(flow: SwitchEntries): FlowEntries;
/**
 * Returns the `ItemEntries` object at the given position within the given `SwitchEntries` object, or `null` if there is no item at the given position.
 *
 * @param flow The `SwitchEntries` object.
 * @param position The position within the `SwitchEntries` object.
 * @returns The `ItemEntries` object at the given position within the `SwitchEntries` object, or `null` if there is no item at the given position.
 */
export declare function getItem(flow: SwitchEntries, position: Position): ItemEntries | null;
/**
 * Sets the `ItemEntries` object at the given position within the given `SwitchEntries` object.
 *
 * @param flow The `SwitchEntries` object.
 * @param position The position within the `SwitchEntries` object.
 * @param item The `ItemEntries` object to set.
 */
export declare function setItem(flow: SwitchEntries, position: Position, item: ItemEntries): void;
//# sourceMappingURL=flow.switch.d.ts.map