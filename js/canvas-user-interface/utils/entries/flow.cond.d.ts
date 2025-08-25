import type { ItemEntries, FlowEntries, CondEntries } from "../../types/flow/entries";
import type { Position } from "../../types/flow/position";
/**
 * Creates a `CondEntries` object.
 *
 * @returns The created `CondEntries` object.
 */
export declare function create(): FlowEntries;
/**
 * Clones a `CondEntries` object.
 *
 * @param flow A `CondEntries` object.
 * @returns The cloned `CondEntries` object.
 */
export declare function clone(flow: CondEntries): FlowEntries;
/**
 * Returns the `ItemEntries` object at the given position within the given `CondEntries` object, or `null` if there is no item at the given position.
 *
 * @param flow The `CondEntries` object.
 * @param position The position within the `CondEntries` object.
 * @returns The `ItemEntries` object at the given position within the `CondEntries` object, or `null` if there is no item at the given position.
 */
export declare function getItem(flow: CondEntries, position: Position): ItemEntries | null;
/**
 * Sets the `ItemEntries` object at the given position within the given `CondEntries` object.
 *
 * @param flow The `CondEntries` object.
 * @param position The position within the `CondEntries` object.
 * @param item The `ItemEntries` object to set.
 */
export declare function setItem(flow: CondEntries, position: Position, item: ItemEntries): void;
//# sourceMappingURL=flow.cond.d.ts.map