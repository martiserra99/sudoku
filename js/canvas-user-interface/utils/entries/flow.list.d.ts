import type { ItemEntries, FlowEntries, ListEntries } from "../../types/flow/entries";
import type { Position } from "../../types/flow/position";
/**
 * Creates a `ListEntries` object.
 *
 * @returns The created `ListEntries` object.
 */
export declare function create(): FlowEntries;
/**
 * Clones a `ListEntries` object.
 *
 * @param flow A `ListEntries` object.
 * @returns The cloned `ListEntries` object.
 */
export declare function clone(flow: ListEntries): FlowEntries;
/**
 * Returns the `ItemEntries` object at the given position within the given `ListEntries` object, or `null` if there is no item at the given position.
 *
 * @param flow The `ListEntries` object.
 * @param position The position within the `ListEntries` object.
 * @returns The `ItemEntries` object at the given position within the `ListEntries` object, or `null` if there is no item at the given position.
 */
export declare function getItem(flow: ListEntries, position: Position): ItemEntries | null;
/**
 * Sets the `ItemEntries` object at the given position within the given `ListEntries` object.
 *
 * @param flow The `ListEntries` object.
 * @param position The position within the `ListEntries` object.
 * @param item The `ItemEntries` object to set.
 */
export declare function setItem(flow: ListEntries, position: Position, item: ItemEntries): void;
//# sourceMappingURL=flow.list.d.ts.map